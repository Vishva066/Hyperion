// app/page.js
import Image from 'next/image';
import Logo from '../../public/logo.png'
import styles from './page.module.css';

export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.logoContainer}>
          {/* Placeholder for Hyperion Logo */}
          <Image src={Logo} alt="Hyperion Logo" width={550} height={550} />
        </div>

        <h1 className={styles.title}>
          Hyperion
        </h1>

        <p className={styles.description}>
          Empowering the Future of Energy <br />
          Innovating for a Sustainable Tomorrow
        </p>
        <w3m-button size='md' balance='show' loadingLabel='Connecting' />
      </div>
    </div>
  );
}


