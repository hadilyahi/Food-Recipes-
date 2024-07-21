import Image from "next/image";
import { Input } from "@/components/ui/input";
import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between p-4 mx-6">
        <div>
          <Image src="/RF.svg" alt="شعار" width={50} height={50} />
        </div>
        <div className="flex  gap-20">
          <a href="" className="font-extralight">Home</a>
          <a href="">Recipes</a>
          <a href="">Review</a>
          <a href="">About</a>
        </div>
        <div>
          <Input type="search" placeholder="Find a recipe" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
