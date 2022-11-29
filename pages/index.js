import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export const getStaticProps = () => ({
  props: {
    message: 'This message came from getStaticProps.',
  },
});

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My App - index.js</title>
        <link rel='icon' href='/my-app/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href='/'>My App</Link>!
        </h1>
        <div>
          <h4>Page props:</h4>
          <pre>{JSON.stringify(props, null, 2)}</pre>
        </div>
        <Link href='/page'>My Page</Link>
      </main>
    </div>
  );
}
