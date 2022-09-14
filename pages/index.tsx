import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>kerusu Home Page</title>
        <meta name="description" content="kerusu home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/img/rowlet.jpg" width="150px" height="150px" />
        <div>kerusu</div>
      </main>

      <footer>kerusu</footer>
    </div>
  );
};

export default Home;
