import type { NextPage } from "next";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
import React, { ChangeEvent, useState } from "react";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen md:py-12 px-12 py-24">
      <main className="md:flex h-full">
        <div className="avatar md:my-auto min-w-64 md:w-1/2 w-full">
          <div className="max-w-64 max-h-64 mx-auto rounded-full">
            <img src="/img/rowlet.jpg" alt="rowlet" />
          </div>
        </div>
        <div className="profile my-auto md:text-left text-center">
          <p className="text-5xl font-semibold my-3">kerusu</p>
          <p>筑波大で情報を科学しています</p>
          <div className="links my-3 text-2xl md:ml-4 text-left md:mx-0 mx-auto w-fit underline">
            <ul>
              <li>
                <Link href="/programming">
                  <a>Programming</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/shadow-box">
                  <a>Shadowbox</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="social-links flex justify-between md:w-full w-2/3 mx-auto mt-8">
            <a href="https://twitter.com/kerusu_1984">
              <FaTwitter size={30} color={"#00acee"} />
            </a>
            <a href="https://github.com/Kerusu-1984">
              <FaGithub size={30} color={"#000"} />
            </a>
            <div className="tooltip" data-tip="kerusu #3301">
              <FaDiscord size={30} color={"#7289da"} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
