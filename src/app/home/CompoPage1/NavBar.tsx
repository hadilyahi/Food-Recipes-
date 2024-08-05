"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRecipesMenuOpen, setIsRecipesMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleRecipesMenu = () => setIsRecipesMenuOpen(!isRecipesMenuOpen);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleRecipeItemClick = () => {
    setIsRecipesMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex justify-between items-center p-4 mx-6 relative w-full max-w-screen-2xl">
      <div className="flex items-center">
        <Image src="/RF.svg" alt="شعار" width={50} height={50} />
      </div>

      <div className="hidden md:flex flex-1 justify-center items-center">
        <div className="flex gap-10 items-center">
          <Link href={"/home"}>
            <button className="font-itim text-lg md:text-xl hover:text-red-600">Home</button>
          </Link>
          <div className="relative">
            <button onClick={toggleRecipesMenu} className="font-itim text-lg md:text-xl">Recipes</button>
            {isRecipesMenuOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-max grid grid-cols-2 gap-4 p-4 z-40">
                <h3 className="text-base md:text-lg font-acme mt-4 px-4 col-span-2">Choose your category!</h3>
                {[
                  { href: "/MainFood", alt: "Main Food", title: "Main Food" },
                  { href: "/Sweets", alt: "Sweets", title: "Sweets" },
                  { href: "/Side", alt: "Side Food", title: "Side Food" },
                  { href: "/Drinks", alt: "Drinks", title: "Drinks" },
                  { href: "/Healthy", alt: "Healthy foods", title: "Healthy foods" }
                ].map((item, index) => (
                  <div key={index} className="w-full flex items-center text-black text-sm md:text-lg font-acme text-center py-2 hover:bg-gray-100">
                    <Image src="/icon.jpg" alt={item.alt} width={24} height={24} className="mr-2" />
                    <Link href={item.href}>
                      <h1 onClick={handleRecipeItemClick}>{item.title}</h1>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link href={"/Review"}>
            <button className="font-itim text-lg md:text-xl hover:text-red-600">Review</button>
          </Link>
          <Link href={"/About"}>
            <button className="font-itim text-lg md:text-xl hover:text-red-600">About</button>
          </Link>
        </div>
      </div>

      <div className="hidden md:flex">
        <Link href={"/Favorite"}>
          <button className="font-itim text-lg md:text-xl bg-slate-500 rounded-xl p-2 text-white">Favorite food</button>
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-gray-700">
          {isMobileMenuOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
        </button>
      </div>

      <div className={`fixed inset-0 bg-white transition-transform transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden z-50`}>
        <div className="flex flex-col items-center p-4 relative w-full min-w-[300px] max-w-full">
          <button onClick={toggleMobileMenu} className="text-gray-700 absolute top-4 right-4 z-60">
            <XMarkIcon className="h-8 w-8" />
          </button>
          <Link href={"/home"}>
            <button onClick={handleLinkClick} className="font-itim text-lg md:text-xl py-2 hover:text-red-600">Home</button>
          </Link>
          <div className="relative">
            <button onClick={toggleRecipesMenu} className="font-itim text-lg md:text-xl py-2 hover:text-red-600">Recipes</button>
            {isRecipesMenuOpen && (
              <div className="absolute left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg transition-opacity duration-300 opacity-100 grid grid-cols-1 gap-4 p-4 z-40 min-w-[300px]">
                <h3 className="text-base md:text-lg font-acme mt-4 px-4">Choose your category!</h3>
                {[
                  { href: "/MainFood", alt: "Main Food", title: "Main Food" },
                  { href: "/Sweets", alt: "Sweets", title: "Sweets" },
                  { href: "/Side", alt: "Side Food", title: "Side Food" },
                  { href: "/Drinks", alt: "Drinks", title: "Drinks" },
                  { href: "/Healthy", alt: "Healthy foods", title: "Healthy foods" }
                ].map((item, index) => (
                  <div key={index} className="w-full flex items-center text-black text-sm md:text-lg font-acme text-center py-2 hover:bg-gray-100">
                    <Image src="/icon.jpg" alt={item.alt} width={24} height={24} className="mr-2" />
                    <Link href={item.href}>
                      <h1 onClick={handleRecipeItemClick}>{item.title}</h1>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link href={"/Review"}>
            <button onClick={handleLinkClick} className="font-itim text-lg md:text-xl py-2 hover:text-red-600">Review</button>
          </Link>
          <Link href={"/About"}>
            <button onClick={handleLinkClick} className="font-itim text-lg md:text-xl py-2 hover:text-red-600">About</button>
          </Link>
          <Link href={"/Favorite"}>
            <button type="button" onClick={handleLinkClick} className="font-itim text-lg md:text-xl bg-slate-500 rounded-xl p-2 text-white mt-4">
              Favorite food
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
