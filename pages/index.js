import Head from "next/head";
import { Fragment } from "react";
import Home from "../components/homePage/Home";

export default function home() {
  return (
    <Fragment>
      <Head>
        <link rel="preload" as="image" href="/media/uni/unifirst.png" />
        <link rel="preload" as="image" href="/media/art/artfirst.jpg" />
        <link rel="preload" as="image" href="/media/sport/sportfirst.png" />
      </Head>
  <Home />
    </Fragment>
  );
}
