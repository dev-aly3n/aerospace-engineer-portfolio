import Head from "next/head";
import { Fragment } from "react";
import Home from "../components/homePage/Home";

export default function home() {
  return (
    <Fragment>
      <Head>
        <link rel="preload" as="image" href="/media/uni/unifirst.png" />
      </Head>
      <Home />
    </Fragment>
  );
}
