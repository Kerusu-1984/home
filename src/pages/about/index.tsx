import type { NextPage } from "next";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
import React, { ChangeEvent, useState } from "react";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="h-screen md:py-12 px-12 py-24">
      <main className="md:flex h-full">
        <div className="avatar md:my-auto min-w-64 md:w-1/2 w-full">
          <div className="max-w-64 max-h-64 mx-auto rounded-full">
            <Link href="/">
              <img src="/img/rowlet.jpg" alt="rowlet" />
            </Link>
          </div>
        </div>
        <div className="profile md:w-1/2 pb-4">
          <h1 className="text-5xl font-semibold my-6 md:text-left text-center">
            Kerusu
          </h1>
          <h2 className="text-2xl md:text-left text-center">Who is Kerusu</h2>
          <div className="divider my-0"></div>
          <p>
            Kerusuとは、パソコンをカタカタしてよくわからないものを作ることが好きな人間です。筑波大学のcoinsラウンジに出没したりしなかったり。惰性でManjaro
            Linuxを使っています。
          </p>

          <h2 className="text-2xl md:text-left text-center mt-4">
            やっていること
          </h2>
          <div className="divider my-0"></div>
          <ul className="list-disc list-inside">
            <li>
              Webサイト・アプリケーションの開発: <br />
              このサイトはReact(Next.js)で作られています。他に作ったものは
              <Link href="/programming" className="link">
                Programming
              </Link>
              へ
            </li>
            <li>
              自作Cコンパイラ: <br />
              自作Cコンパイラ「
              <a href="https://github.com/yskitf21/Kaede" className="link">
                Kaede
              </a>
              」。現在数値型の演算ができます。
            </li>
            <li>
              X(旧Twitter): <br />
              いわゆるツイ廃
            </li>
            <li>
              ポケモン: <br />
              ゲームはDPt〜SVまで、カードはXYシリーズ終盤〜SMシリーズのDレギュまでやっていました。最近はポケモンスリープをやっています。
            </li>
            <li>
              その他ゲーム: <br />
              MHXX、Civ6、ファンタジーライフ、黒い砂漠、Shadowverseなど
            </li>
          </ul>

          <h2 className="text-2xl md:text-left text-center mt-4">経歴</h2>
          <div className="divider my-0"></div>
          <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical mb-2">
            <li>
              <div className="timeline-middle">
                <div className="w-5 h-5 rounded-full bg-base-300 border border-base-200"></div>
              </div>
              <div className="timeline-end">
                <time className="font-mono">2021年</time>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-2">
                <time className="font-mono">4月~</time>
                <div className="text-lg font-black ml-2">
                  筑波大学 情報学群情報科学類
                </div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="w-5 h-5 rounded-full bg-base-300 border border-base-200"></div>
              </div>
              <div className="timeline-end">
                <time className="font-mono">2022年</time>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-2">
                <time className="font-mono">2月~12月</time>
                <div className="text-lg font-black ml-2">
                  JPYC株式会社 エンジニアインターン
                </div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="w-5 h-5 rounded-full bg-base-300 border border-base-200"></div>
              </div>
              <div className="timeline-end">
                <time className="font-mono">2023年</time>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-2">
                <time className="font-mono">8月~9月</time>
                <div className="text-lg font-black ml-2">
                  株式会社トラストハブ サマーインターン
                </div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-2">
                <time className="font-mono">12月~</time>
                <div className="text-lg font-black  ml-2">
                  筑波大学 HPCS研究室 システムソフトウェアチーム
                </div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="w-5 h-5 rounded-full bg-base-300 border border-base-200"></div>
              </div>
              <div className="timeline-end">
                <time className="font-mono">2024年</time>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-2">
                <time className="font-mono">1月~</time>
                <div className="text-lg font-black ml-2">
                  株式会社トラストハブ エンジニアインターン
                </div>
              </div>
              <hr />
            </li>
          </ul>

          <h2 className="text-2xl md:text-left text-center mt-4">資格</h2>
          <div className="divider my-0"></div>
          <ul className="list-disc list-inside pb-4">
            <li>応用情報技術者</li>
            <li>データベーススペシャリスト試験</li>
            <li>普通自動車免許 (なおペーパードライバー)</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
