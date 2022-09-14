import type { NextPage } from "next";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
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
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 justify-content-center row">
              <img
                src="/img/rowlet.jpg"
                width="250px"
                height="250px"
                className={styles.roundImage}
              />
            </div>
            <div className="col-md-6">
              <h1>kerusu</h1>
              <ul>
                <li>Programming</li>
                <li>Pokemon</li>
                <li>Shadowbox</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
