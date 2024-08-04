import Image from "next/image";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between p-4 mx-6">
        <div>
          <Image src="/RF.svg" alt="شعار" width={50} height={50} />
        </div>
        <div className="flex gap-20 relative">
          <Link href={"/home"}>
            <button className="font-itim text-xl hover:text-red-600">
              Home
            </button>
          </Link>
          <div className="group relative  z-40">
            
              <button className="font-itim text-xl hover:text-red-600">
                Recipes
              </button>
           

            <div className="absolute left-1/2 w-[407px] h-[212px] transform -translate-x-1/2 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center">
              <h3 className="text-lg font-acme mt-4">Choose your category!</h3>
              <div className="flex flex-wrap justify-around mt-4 w-full px-4">
                <div className="w-1/2 flex items-center text-black text-lg font-acme text-center py-2 hover:bg-gray-100">
                  <Image
                    src="/icon.jpg"
                    alt="Main Food"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <Link href={"/MainFood"}>
                    <h1>Main Food</h1>
                  </Link>
                </div>

                <div className="w-1/2 flex items-center text-black text-lg font-acme text-center py-2 hover:bg-gray-100">
                  <Image
                    src="/icon.jpg"
                    alt="Sweets"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <Link href={"/Sweets"}>
                  <h1 >Sweets</h1>
                  </Link>
                </div>
                <div className="w-1/2 flex items-center text-black text-lg font-acme text-center py-2 hover:bg-gray-100">
                  <Image
                    src="/icon.jpg"
                    alt="Side Food"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <Link href={"/Side"}>
                  <h1>Side Food</h1>
                  </Link>
                </div>
                <div className="w-1/2 flex items-center text-black text-lg font-acme text-center py-2 hover:bg-gray-100">
                  <Image
                    src="/icon.jpg"
                    alt="Drinks"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <Link href={"/Drinks"}>
                  <h1>Drinks</h1>
                  </Link>
                </div>
                <div className="w-1/2 flex items-center text-black text-lg font-acme text-center py-2 hover:bg-gray-100">
                  <Image
                    src="/icon.jpg"
                    alt="Healthy foods"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <a href="#">Healthy foods</a>
                </div>
              </div>
            </div>
          </div>
          <Link href={"/Recipes"}>
            <button className="font-itim text-xl hover:text-red-600">
              Review
            </button>
          </Link>

          <Link href={"/About"}>
            <button className="font-itim text-xl hover:text-red-600">
              About
            </button>
          </Link>
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
