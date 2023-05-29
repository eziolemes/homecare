import Link from 'next/link';
import styles from './styles.module.scss';

export function Footer() {
 
  return(
    <>
      <footer className={styles.footerContainer}>
        <div>
          <p>
            Curso Enfermagem
          </p>
          <p>
            9° Período
          </p>
        </div>
        <div>
          <img src="/estacio.svg" width={190} height={187} />
        </div>
      </footer>
    </>
  )
}