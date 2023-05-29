import Head from 'next/head'
import styles from '../styles/home.module.scss'
import { Header } from '~/components/Header'
import { Card } from '~/components/Card';
import { Footer } from '~/components/Footer';
import { FormEvent, useEffect, useState } from 'react';
import { useServices } from '~/hooks/useServices';
import { useNurses } from '~/hooks/useNurses';
import { useDaySchedule } from '~/hooks/useDaySchedule';
import { useHourSchedule } from '~/hooks/useHourSchedule';
import { toast } from 'react-toastify';
import { IMaskInput } from "react-imask";

export default function Home() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');

  const { services } = useServices();
  const [selectedService, setSelectedService] = useState('');
  const { nurses, loading: loadingNurses } = useNurses({ serviceId: selectedService});
  const [selectedNurse, setSelectedNurse] = useState('');
  const { daysSchedule, loading: loadingDaysSchedule } = useDaySchedule({ nurse_id: selectedNurse });
  const [selectedDaySchedule, setSelectedDaySchedule] = useState('');
  const { hoursSchedule, loading: loadingHoursSchedule } = useHourSchedule({ date_id: selectedDaySchedule });
  const [selectedHourSchedule, setSelectedHourSchedule] = useState('');
  const [imagem, setImagem] = useState('/nurses/2d72b61caf25f10344c3dc954c7fa714-download.jpeg');

  const handleService = async (event) => {
    setSelectedService(event.target.value);
    setSelectedNurse("1");
    setImagem(nurses[0].photo_path);
  }

  const handleNurse = (event) => {
    nurses.map((item) => {
      if (item.id === selectedNurse) {
        console.log("entrou no if")
        //setImagem(`http://localhost:3333/files/${item.photo_path}`);
        setImagem(`${item.photo_path}`);
      }
    });
    setSelectedNurse(event.target.value);
  }

  const handleDaySchedule = (event) => {
    setSelectedDaySchedule(event.target.value);
  }

  const handleHourSchedule = (event) => {
    setSelectedHourSchedule(event.target.value);
  }

  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    try {
      setSelectedService('');
      setSelectedNurse('');
      setSelectedDaySchedule('');
      setSelectedHourSchedule('');
      setImagem('/avatar.png');
      //setImagemUrl('');
      setName('');
      setCpf('');
      setPhone('');

      toast.success("Agendamento realizado com sucesso!\nAguarde a confirmação pelo número informado.");
    } catch (error) {
      console.log(error);
      toast.error("Ops, erro ao cadastrar!")
    }
  }

  return (
    <>
      <Head>
      <title>HomeCare - cuidando da sua saúde</title>
      </Head>
      <div>
        <Header />
        <main className={styles.mainContainer}>
          <div className={styles.infoContent}>
            <div className={styles.subtitleContainer}>
              <p className={styles.subtitle2}>
                Confira os serviços disponíveis e agende sua consulta.
              </p>
            </div>

            <Card 
              img='/img1.png' 
              description='Seja atendido por enfermeiros qualificados para o atendimento que você precisa!' 
            />
            <Card 
              img='/img2.jpg' 
              description='Realize sua consulta na comodidade da sua casa. Não se preocupe em se locomover, nós vamos até você!'
            />
            <Card 
              img='/img3.jpg' 
              description='Receba todos os cuidados necessários, vamos cuidar da sua saúde como você merece!' 
            />

          </div>
          <div className={styles.scheduleContainer}>

            <div className={styles.avatarContainer}>
              {loadingNurses ? (
                <img 
                  src="/avatar.png" 
                  width={190} 
                  height={187} 
                  alt="Foto de perfil do enfermeiro"
                />
              ) : (
                <img 
                  src={imagem} 
                  width={190} 
                  height={187} 
                  alt="Foto de perfil do enfermeiro"
                />
              )}
            </div>

            <div className={styles.formContainer}>
              <h3>Agenda sua consulta:</h3>

              <form action="" className={styles.form} onSubmit={handleRegister}>
              
                <select value={selectedService} onChange={handleService}>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.description}
                    </option>
                  ))}
                </select>

                {loadingNurses ? (
                  <p>Carregando Profissionais... aguarde</p>
                ) : (
                  <select value={selectedNurse} onChange={handleNurse}>
                    {nurses.map((nurse) => (
                      <option key={nurse.id} value={nurse.id}>{nurse.name}</option>
                    ))}
                  </select>
                )}

                <div className={styles.dateTimeContainer}>
                  {loadingDaysSchedule ? (
                    <p>Carregando datas disponíveis... aguarde</p>
                  ) : (
                    <select value={selectedDaySchedule} onChange={handleDaySchedule}>
                      {daysSchedule.map((day) => (
                        <option key={day.id} value={day.id}>{day.date}</option>
                      ))}
                    </select>
                  )}

                  {loadingHoursSchedule ? (
                    <p>Carregando horas disponíveis... aguarde</p>
                  ) : (
                    <select value={selectedHourSchedule} onChange={handleHourSchedule}>
                      {hoursSchedule.map((hour) => (
                        <option key={hour.id} value={hour.hour}>{hour.hour}</option>
                      ))}
                    </select>
                  )}
                </div>
                <input 
                  type='text'
                  placeholder='Informe seu Nome Completo*'
                />

                <IMaskInput 
                  type='text'
                  mask="000.000.000-00"
                  placeholder='Informe seu CPF*'
                />

                <IMaskInput 
                  type='text'
                  mask="(00) 00000-0000"
                  placeholder='Informe seu Telefone*'
                />
                <p className={styles.small}>
                  * Os dados preenchidos passarão por uma análise de disponibilidade e você receberá uma confirmação do agendamento em até 48 horas.
                </p>
                <button className={styles.buttonForm} type="submit">
                  Realizar agendamento
                </button>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
