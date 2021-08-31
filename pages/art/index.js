import Art from "../../components/artPage/Art";
import Head from "next/head";
import { Fragment } from "react";

export default function art() {
  return (
    <Fragment>
      <Head>
        <link rel="preload" as="image" href="/media/uni/unifirst.png" />
        <link rel="preload" as="image" href="/media/art/artfirst.jpg" />
        <link rel="preload" as="image" href="/media/sport/sportfirst.png" />
      </Head>
      <Art />
    </Fragment>
  );
}
