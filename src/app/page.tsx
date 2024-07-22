"use client";
import Image from "next/image";
import NavBar from "./CompoPage1/NavBar";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Section from "./CompoPage1/Section1";
import Section2 from "./CompoPage1/Section2";
import Fotter from "./CompoPage1/Fotter";

export default function Home() {
  useEffect(() => {
    document.title = "Food Recipes";
  }, []);
  return (
    <>
      <Helmet>
        <title>اسم الموقع</title>
        <link rel="icon" href="/RF.svg" />
        <meta property="og:image" content="/RF.svg" />
      </Helmet>
      <div className="flex flex-col ">
        <NavBar  />
        <Section/>
        <hr className="mb-8 border-2"/>
        <Section2/>
        <Fotter/>
      </div>
    </>
  );
}
