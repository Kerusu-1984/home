import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* <title>kerusu HomePage</title>
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:site" content="@kerusu_1984" />
        <meta property="og:image" content="https://kerusu.xyz/img/rowlet.jpg" />
        <meta property="og:title" content="kerusu HomePage" />
        <meta property="og:description" content="kerusuのすべてがわかる(?)" />
        <meta property="og:url" content="https://kerusu.xyz/" /> */}
      </Head>
      <DefaultSeo
        defaultTitle="kerusu HomePage"
        description="kerusuのすべてがわかる(?)"
        openGraph={{
          type: "website",
          title: "kerusu HomePage",
          description: "kerusuのすべてがわかる(?)",
          url: "https://kerusu.xyz/",
          images: [
            {
              url: "https://kerusu.xyz/img/rowlet.jpg",
              alt: "モクロー",
            },
          ],
        }}
        twitter={{
          handle: "@kerusu_1984",
          site: "@kerusu_1984",
          cardType: "summary",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
