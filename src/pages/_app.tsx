import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/globals";
import Theme from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
