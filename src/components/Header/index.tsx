import Link from 'next/link';
import styles from './styles.module.scss';

export function Header() {
 
  return(
    <>
      <header className={styles.headerContainer}>
        <Link href="/">
          <img src="/logo.png" width={159} height={124} />
        </Link>
        <h2>HOME CARE</h2>
      </header>
    </>
  )
}