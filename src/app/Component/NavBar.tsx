import Image from "next/image";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between p-4 mx-6">
        <div>
          <Image src="/RF.svg" alt="شعار" width={50} height={50} />
        </div>
        <div className="flex gap-20 relative">
          <a href="" className="font-itim text-xl">Home</a>
          <div className="group relative">
            <a href="" className="font-itim text-xl">Recipes</a>
            <div className="absolute left-1/2 w-[407px] h-[212px] transform -translate-x-1/2 mt-2  bg-white border border-gray-300 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center ">

                <h3 className="text-lg font-acme ">Choose your category !</h3>
              
                <a href="#" className="block mt-2 text-black-500 text-lg font-acme">Recipe 1</a>
                <a href="#" className="block mt-2 text-blue-500 hover:underline">Recipe 2</a>
                <a href="#" className="block mt-2 text-blue-500 hover:underline">Recipe 3</a>
              </div>
            </div>
          </div>
          <a href="" className="font-itim text-xl">Review</a>
          <a href="" className="font-itim text-xl">About</a>
        </div>
        <div className="relative flex items-center">
          <Input
            type="search"
            placeholder="Find a recipe"
            className="mr-8 border-2 border-black pl-10"
          />
          <MagnifyingGlassIcon className="w-6 h-6 absolute left-2 text-gray-500" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
