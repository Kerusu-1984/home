import type { NextPage } from "next";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import styles from "../styles/Home.module.css";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
import React, { ChangeEvent, useState } from "react";
import Link from "next/link";

const Home: NextPage = () => {
  const [count, setCount] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);
  const [password, setPassword] = useState("");

  const handleClickImage = () => {
    if (count === 10) {
      setShow(true);
      setCount(0);
    }
    setCount((prev) => {
      return prev + 1;
    });
  };

  const handleClose = () => setShow(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Enterキーでデータを送信できるようにする
    if (e.nativeEvent.isComposing || e.key !== "Enter") return;
    // TODO:API呼び出し
    handleClose();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>kerusu Home Page</title>
        <meta name="description" content="kerusu home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="container">
          <div className="row align-items-center d-flex g-5 py-5">
            <div className="col-md-6">
              <img
                src="/img/rowlet.jpg"
                alt="rowlet"
                width="250px"
                height="250px"
                className="d-block mx-auto rounded-circle"
                onClick={handleClickImage}
              />
            </div>
            <div className="col-md-3 text-center text-md-start">
              <h1>kerusu</h1>
              <p>筑波大で情報を科学しています</p>
              <ul className="d-inline-block text-start ps-md-4 list-unstyled">
                <li className="text-decoration-underline">Programming</li>
                <li className="text-decoration-underline">Pokemon</li>
                <li>
                  <Link href="/shadow-box">
                    <a className="link-dark">Shadowbox</a>
                  </Link>
                </li>
              </ul>
              <div className="row justify-content-center">
                <div className="d-flex col-8 justify-content-evenly">
                  <a href="https://twitter.com/kerusu_1984">
                    <FaTwitter size={30} color={"#00acee"} />
                  </a>
                  <a href="https://github.com/Kerusu-1984">
                    <FaGithub size={30} color={"#000"} />
                  </a>
                  <FaDiscord size={30} color={"#7289da"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </Modal.Body>
        </Modal>
      </main>
    </div>
  );
};

export default Home;
