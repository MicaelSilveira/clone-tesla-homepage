import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../src/Components/Layout/Header";
import Footer from "../src/Components/Layout/Footer";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
