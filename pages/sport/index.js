import Sport from "../../components/sportPage/Sport";
import Head from "next/head";
import { Fragment } from "react";

export default function sport() {
  return (
    <Fragment>
      <Head>
        <link rel="preload" as="image" href="/media/uni/unifirst.png" />
        <link rel="preload" as="image" href="/media/art/artfirst.jpg" />
        <link rel="preload" as="image" href="/media/sport/sportfirst.png" />
        <link rel="preload" as="image" href="/media/sport/sportfirst2.png" />
      </Head>
  <Sport />
    </Fragment>
  );
}
