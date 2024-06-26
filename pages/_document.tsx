import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="See Vegeta's Photos."
          />
          <meta property="og:site_name" content="nextjsconf-pics.vercel.app" />
          <meta
            property="og:description"
            content="See Vegeta's Photos."
          />
          <meta property="og:title" content="Vegeta the Cat Photos" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Vegeta the Cat Photos" />
          <meta
            name="twitter:description"
            content="See Vegeta's Photos."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
