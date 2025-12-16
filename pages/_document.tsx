import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#0c1027" />
          <script src="https://cdn.jsdelivr.net/npm/zone.js@0.14.4/bundles/zone.umd.min.js" defer></script>
          <script src="https://cdn.jsdelivr.net/npm/rxjs@7.8.1/dist/bundles/rxjs.umd.min.js" defer></script>
          <script src="https://cdn.jsdelivr.net/npm/@angular/core@17.1.2/bundles/core.umd.min.js" defer></script>
          <script src="https://cdn.jsdelivr.net/npm/@angular/common@17.1.2/bundles/common.umd.min.js" defer></script>
          <script src="https://cdn.jsdelivr.net/npm/@angular/platform-browser@17.1.2/bundles/platform-browser.umd.min.js" defer></script>
          <script src="https://cdn.jsdelivr.net/npm/@angular/platform-browser-dynamic@17.1.2/bundles/platform-browser-dynamic.umd.min.js" defer></script>
          <script src="/angular/profile-app.js" defer></script>
        </Head>
        <body className="bg-midnight text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
