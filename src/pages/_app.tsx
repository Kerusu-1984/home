import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>kerusu HomePage</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:domain" content="kerusu.xyz" />
        <meta property="og:image" content="kerusu.xyz/img/rowlet.jpg" />
        <meta property="og:title" content="kerusu HomePage" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
