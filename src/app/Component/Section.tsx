import React from "react";
import Image from "next/image";

const Section = () => {
  return (
    <div className="flex justify-between p-20">
      <div className="p-20 flex flex-col gap-10" >
        <div className="flex justify-center items-center ">
          
          <h1 className="font-portLligatSla flex flex-col gap-4 text-5xl text-shadow-5xl text-center">
            Welcome To <br />
            <span className="text-[#306DC7] font-bold">
              Food <span className="text-[#469753] font-bold">Recipes</span>
            </span>
          </h1>
        </div>
        <div className="">
          <p className="font-sahitya text-xl">
            It is a website that shows you delicious and healthy <br />food recipes.
            You can search for the recipe you want
          </p>
        </div>
        <button className="flex justify-start font-acme text-[#006FEE] text-2xl">Try now</button>
      </div>
      <div>
        <Image
          src="/photo.svg"
          alt=""
          width={600}
          height={600}
          className=" mr-40"
        />
      </div>
    </div>
  );
};

export default Section;
