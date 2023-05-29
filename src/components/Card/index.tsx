import styles from './styles.module.scss';

interface CardProps {
  img: string;
  description: string;
}

export function Card({ img, description }: CardProps) {

  return(
    <>
      <div className={styles.cardContainer}>
        <div className={styles.cardImgContent}>
          <img src={img} alt="Imagem de três enfermeiros" />
        </div>
        <div className={styles.cardDescription}>
          <p>
            {description}
          </p>
        </div>
      </div>
    </>   
  );
}