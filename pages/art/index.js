import Art from "../../components/artPage/Art";
import Head from "next/head";
import { Fragment } from "react";

export default function art() {
  return (
    <Fragment>
      <Head>
        <title>Atefeh Hasani - Art</title>
        <meta
          name="description"
          content="Atefeh Hasani is an aerospace engineer and a pro taekwondo athlete who is also good in playing Daf."
        />
        <meta name="keywords" content="Atefeh Hasani , عاطفه حسنی" />
        <meta name="author" content="Atefeh Hasani" />
        <link rel="preload" as="image" href="/media/uni/unifirst.png" />
        <link rel="preload" as="image" href="/media/art/artfirst.jpg" />
        <link rel="preload" as="image" href="/media/sport/sportfirst.png" />
      </Head>
      <Art />
    </Fragment>
  );
}
