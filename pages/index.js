import Head from "next/head";
import { Fragment } from "react";
import Home from "../components/homePage/Home";

export default function home() {
  return (
    <Fragment>
      <Head>
      <title>Atefeh Hasani - University</title>
        <meta
          name="description"
          content="Atefeh Hasani is an aerospace engineer and a pro taekwondo athlete who is also good in music."
        />
        <meta name="keywords" content="Atefeh Hasani , عاطفه حسنی" />
        <meta name="author" content="Atefeh Hasani" />
        <link rel="preload" as="image" href="/media/uni/unifirst.png" />
        <link rel="preload" as="image" href="/media/art/artfirst.jpg" />
        <link rel="preload" as="image" href="/media/sport/sportfirst.png" />
        <meta name="google-site-verification" content="5z3DtPrg7_UbLzmf1_uk1gn-RAY7NRuzf6Z0G9m4KSk" />
      </Head>
  <Home />
    </Fragment>
  );
}
