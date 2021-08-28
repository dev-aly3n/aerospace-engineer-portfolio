import Biography from "../../components/biographyPage/Biography";
import Head from "next/head";
import { Fragment } from "react";

export default function biography() {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rampart+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Biography />
    </Fragment>
  );
}
