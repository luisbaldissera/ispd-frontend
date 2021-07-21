import Document, { Html, Head, Main, NextScript } from "next/document";

import { CssBaseline } from "@material-ui/core";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <CssBaseline />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
