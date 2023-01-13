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
        <title>My App - page.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h4>Page props:</h4>
          <pre>{JSON.stringify(props, null, 2)}</pre>
        </div>
        <Link href="/">Go to /</Link>
      </main>
    </div>
  );
}
