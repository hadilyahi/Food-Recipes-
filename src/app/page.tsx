"use client";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

import Page from "./home/page";
import { useRouter } from "next/router";

export default function Home() {



  useEffect(() => {
    document.title = "Food Recipes";
  }, []);
  return (
    <>
      <Helmet>
        <link rel="icon" href="/RF.svg" />
        <meta property="og:image" content="/RF.svg" />
      </Helmet>

      <div className="flex flex-col ">
        <Page />
      </div>
    </>
  );
}
