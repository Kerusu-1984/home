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
        <meta property="twitter:site" content="@kerusu_1984" />
        <meta property="og:image" content="https://kerusu.xyz/img/rowlet.jpg" />
        <meta property="og:title" content="kerusu HomePage" />
        <meta property="og:description" content="kerusuのすべてがわかる(?)" />
        <meta property="og:url" content="https://kerusu.xyz/" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
