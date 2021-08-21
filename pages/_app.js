import { Fragment } from "react";
import Main from "../components/layout/Main";
import Header from "../components/layout/Header";
import "../styles/tailwind.css";
import Footer from "../components/layout/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </Fragment>
  );
}

export default MyApp;
