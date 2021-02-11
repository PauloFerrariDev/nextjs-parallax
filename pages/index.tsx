import React from "react";
import ParallaxScene from "../components/ParallaxScene";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Parallax Effects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ParallaxScene />;
    </>
  );
};

export default Home;
