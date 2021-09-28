import Sport from "../../components/sportPage/Sport";
import Head from "next/head";
import { Fragment } from "react";

export default function sport() {
  return (
    <Fragment>
      <Head>
      <title>Atefeh Hasani - Sport</title>
        <meta
          name="description"
          content="Atefeh Hasani is an aerospace engineer and a pro taekwondo athlete who is also good in playing Daf."
        />
        <meta name="keywords" content="Atefeh Hasani , عاطفه حسنی" />
        <meta name="author" content="Atefeh Hasani" />
      </Head>
  <Sport />
    </Fragment>
  );
}
