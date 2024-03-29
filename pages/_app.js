import { Fragment } from "react";
import Main from "../components/layout/Main";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../styles/tailwind.css";
import { config as fontawesomeConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import { LayoutGroup } from "framer-motion";
import { useRouter } from "next/router";

fontawesomeConfig.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <meta
          name="google-site-verification"
          content="5z3DtPrg7_UbLzmf1_uk1gn-RAY7NRuzf6Z0G9m4KSk"
        />
      </Head>
      <LayoutGroup>
      <div className={`${router.pathname === "/art"? "bg-blue-50":"bg-black"}`}
>

      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
      </div>
      </LayoutGroup>
    </Fragment>
  );
}

export default MyApp;
