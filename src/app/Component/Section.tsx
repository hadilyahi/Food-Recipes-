import React from "react";
import Image from "next/image";

const Section = () => {
  return (
    <div className="flex justify-between p-20">
      <div className="p-20">
        <h1>Welcome To Food <span className="">Recipes</span></h1>
        <p>
          It is a website that shows you delicious and healthy food recipes. You
          can search for the recipe you wan
        </p>
        <button>Try now</button>
      </div>
      <div>
      <Image src="/Photo1.png" alt="" width={500} height={500} className="p-20" />
      </div>
    </div>
  );
};

export default Section;
