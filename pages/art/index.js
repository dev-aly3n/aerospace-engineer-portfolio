import Art from "../../components/artPage/Art";
import Head from "next/head";
import { Fragment } from "react";

export default function art() {
  return (
    <Fragment>
      <Head>
        <link rel="preload" as="image" href="/media/art/artfirst.jpg" />
      </Head>
      <Art />
    </Fragment>
  );
}
