import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export const getStaticProps = () => ({
  props: {
    message: 'This message came from getStaticProps.',
  },
});

export default function Home({ message }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <Link href='/'>
            <a>My App</a>
          </Link>
          !
        </h1>
        <p>{message}</p>
      </main>
    </div>
  );
}
