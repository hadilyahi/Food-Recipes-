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
          <a href="" className="font-itim text-xl hover:text-red-600">Home</a>
          <div className="group relative">
            <a href="" className="font-itim text-xl hover:text-red-600">Recipes</a>
            <div className="absolute left-1/2 w-[407px] h-[212px] transform -translate-x-1/2 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center">
           
              <h3 className="text-lg font-acme mt-4">Choose your category!</h3>
              <div className="flex flex-wrap justify-around mt-4 w-full px-4">
                <div className="w-1/2 flex items-center text-black text-lg font-acme text-center py-2 hover:bg-gray-100">
                  <Image src="/icon.jpg" alt="Main Food" width={24} height={24} className="mr-2" />
                  <a href="#">Main Food</a>
                </div>
                <div className="w-1/2 flex items-center text-black text-lg font-acme text-center py-2 hover:bg-gray-100">
                  <Image src="/icon.jpg" alt="Sweets" width={24} height={24} className="mr-2" />
                  <a href="#">Sweets</a>
                </div>
                <div className="w-1/2 flex items-center text-black text-lg font-acme text-center py-2 hover:bg-gray-100">
                  <Image src="/icon.jpg" alt="Side Food" width={24} height={24} className="mr-2" />
                  <a href="#">Side Food</a>
                </div>
                <div className="w-1/2 flex items-center text-black text-lg font-acme text-center py-2 hover:bg-gray-100">
                  <Image src="/icon.jpg" alt="Drinks" width={24} height={24} className="mr-2" />
                  <a href="#">Drinks</a>
                </div>
                <div className="w-1/2 flex items-center text-black text-lg font-acme text-center py-2 hover:bg-gray-100">
                  <Image src="/icon.jpg" alt="Healthy foods" width={24} height={24} className="mr-2" />
                  <a href="#">Healthy foods</a>
                </div>
              </div>
            </div>
          </div>
          <a href="" className="font-itim text-xl hover:text-red-600">Review</a>
          <a href="" className="font-itim text-xl hover:text-red-600">About</a>
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
