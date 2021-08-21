import { Fragment } from "react";
import Main from "../components/layout/Main";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../styles/tailwind.css";

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
