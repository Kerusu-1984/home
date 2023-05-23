import "../styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        /> */}
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
