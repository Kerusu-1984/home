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
          <div className="row align-items-center flex g-5 py-5">
            <div className="col-md-6">
              <img
                src="/img/rowlet.jpg"
                width="250px"
                height="250px"
                className="d-block mx-auto rounded-circle"
              />
            </div>
            <div className="col-md-6 text-center text-md-start">
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
