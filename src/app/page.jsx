// app/page.js
import Image from 'next/image';
import Logo from '../../public/logo.png'
import styles from './page.module.css';
import { useWeb3Modal } from '@web3modal/react';
import { useEffect } from 'react';

export const metadata = {
  title: 'Hyperion',
  description: 'Welcome to Hyperion, A peer to peer energy trading platform',
};


export default function Home() {
  const router = useRouter();
  const { isConnected } = useWeb3Modal();

  useEffect(() => {
    if (isConnected) {
      router.push('/dashboard');
    }
  }, [isConnected, router]);
  
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


