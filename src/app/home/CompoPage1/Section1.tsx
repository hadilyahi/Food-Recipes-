import React from "react";
import Image from "next/image";

const Section = () => {
  return (
    <div
      className="flex items-center justify-center p-20"
      style={{
        backgroundImage: "url('/bgphoto.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-20 flex flex-col gap-10 bg-black bg-opacity-60 rounded-xl">
        <div className="flex justify-center items-center ">
          <h1 className="font-portLligatSla flex flex-col gap-4 text-5xl text-shadow-lg text-center text-white">
            Welcome To <br />
            <span className="text-[#306DC7] font-bold">
              Food <span className="text-[#469753] font-bold">Recipes</span>
            </span>
          </h1>
        </div>
        <div>
          <p className="font-sahitya text-xl text-white">
            It is a website that shows you delicious and healthy <br />
            food recipes. You can search for the recipe you want
          </p>
        </div>
        <button className="flex justify-center font-acme text-[#006FEE] text-2xl  bg-white bg-opacity-80 px-4 py-2 rounded-md">
          Try now
        </button>
      </div>
      
    </div>
  );
};

export default Section;
