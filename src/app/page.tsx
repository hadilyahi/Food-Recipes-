"use client";
import Image from "next/image";
import NavBar from "./Component/NavBar";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Section from "./Component/Section";

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
        <NavBar />
        <Section/>
      </div>
    </>
  );
}
