import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    }
    finally {
      sheet.seal()
    }
  }
  componentDidMount(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-164007764-1');
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <link href="https://fonts.googleapis.com/css?family=Spartan&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Archivo|Archivo+Black&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet"></link>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-24324707-1"></script>
          <script dangerouslySetInnerHTML={{__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2C95CEMJM7');
          `}}>
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
