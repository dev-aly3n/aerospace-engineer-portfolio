import Head from "next/head";
import { Fragment } from "react";
import Home from "../components/homePage/Home";

export default function home() {
  return (
    <Fragment>
      <Head>
      <title>Atefeh Hasani - Aerospace engineer</title>
        <meta
          name="description"
          content="Atefeh Hasani is an aerospace engineer and a pro taekwondo athlete who is also good in playing Daf."
        />
        <meta name="keywords" content="Atefeh Hasani , عاطفه حسنی هوافضا, عاطفه حسنی, aerospace, aerospace engineer, هوافضا, مهندسی هوافضا" />
        <meta name="author" content="Atefeh Hasani" />
      </Head>
  <Home />
    </Fragment>
  );
}
