import React from "react";


const Section = () => {
  return (
    <div
      className="flex items-center justify-center p-6 sm:p-8 md:p-20"
      style={{
        backgroundImage: "url('/bgphoto.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-4 sm:p-6 md:p-20 flex flex-col gap-4 sm:gap-6 md:gap-10 bg-black bg-opacity-60 rounded-xl w-full max-w-4xl">
        <div className="flex justify-center items-center text-center">
          <h1 className="font-portLligatSla flex flex-col gap-2 text-2xl sm:text-3xl md:text-5xl text-shadow-lg text-white">
            Welcome To <br />
            <span className="text-[#306DC7] font-bold">
              Food <span className="text-[#469753] font-bold">Recipes</span>
            </span>
          </h1>
        </div>
        <div className="text-center">
          <p className="font-sahitya text-sm sm:text-base md:text-xl text-white">
            It is a website that shows you delicious and healthy <br className="hidden md:block" />
            food recipes. You can search for the recipe you want
          </p>
        </div>
        <div className="flex justify-center">
          <button className="font-acme text-sm sm:text-lg md:text-2xl bg-white bg-opacity-80 px-3 sm:px-4 py-2 rounded-md">
            Try now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;
