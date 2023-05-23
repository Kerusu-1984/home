import Document, {
  DocumentContext,
  Html,
  Main,
  Head,
  NextScript,
} from "next/document";
import { DefaultSeo } from "next-seo";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
          />
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
