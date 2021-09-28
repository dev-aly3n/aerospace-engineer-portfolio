import Biography from "../../components/biographyPage/Biography";
import Head from "next/head";
import { Fragment } from "react";

export default function biography() {
  return (
    <Fragment>
      <Head>
      <title>Atefeh Hasani - Biography</title>
        <meta
          name="description"
          content="Atefeh Hasani is an aerospace engineer and a pro taekwondo athlete who is also good in playing Daf."
        />
        <meta name="keywords" content="Atefeh Hasani , عاطفه حسنی" />
        <meta name="author" content="Atefeh Hasani" />
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
