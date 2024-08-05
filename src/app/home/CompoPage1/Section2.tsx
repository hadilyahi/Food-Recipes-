"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Section2 = () => {
  const [index, setIndex] = useState(0);

  const images = [
    { src: "/image 1.svg", title: "Salads" },
    { src: "/image 2.svg", title: "Dessert" },
    { src: "/image 3.svg", title: "Pasta" },
    { src: "/image 4.svg", title: "Lentil Soup" },
    { src: "/image 5.svg", title: "Cheese pies" },
    { src: "/image 6.svg", title: "Sushi with vegetables" },
    { src: "/image 7.svg", title: "Chocolate cake" },
  ];

  const maxVisibleItems = 3;
  const maxVisibleItemsMobile = 1;
  const [visibleItems, setVisibleItems] = useState(maxVisibleItems);

  const maxIndex = Math.ceil(images.length / visibleItems) - 1;

  const handleNext = () => {
    setIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const handlePrev = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  useEffect(() => {
    const updateVisibleItems = () => {
      setVisibleItems(
        window.innerWidth < 640 ? maxVisibleItemsMobile : maxVisibleItems
      );
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);

    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  return (
    <div className="flex flex-col gap-8 sm:gap-16">
      <div className="flex items-center justify-center">
        <h1 className="font-acme text-3xl sm:text-5xl">Highlights</h1>
      </div>
      <div className="relative flex items-center justify-between overflow-hidden">
        <Image
          src="/Vector 1.svg"
          alt="Previous"
          width={30}
          height={30}
          className={`mr-4 sm:mr-8 cursor-pointer ${
            index === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={index > 0 ? handlePrev : () => {}}
        />
        <div className="relative flex items-center flex-grow overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / visibleItems)}%)`,
            }}
          >
            {images.map((image, i) => (
              <div
                key={i}
                className={`flex-shrink-0 ${
                  visibleItems === 1 ? "w-full" : `w-${100 / visibleItems}%`
                } p-2 sm:p-4 flex flex-col items-center`}
                style={{
                  flexBasis: `${100 / visibleItems}%`,
                  maxWidth: `${100 / visibleItems}%`,
                }}
              >
                <div className="w-full h-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.title}
                    layout="responsive"
                    width={visibleItems === 1 ? 100 : 150}
                    height={visibleItems === 1 ? 100 : 150}
                    className="object-cover max-w-[200px] sm:max-w-[300px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image
          src="/Vector 2.svg"
          alt="Next"
          width={30}
          height={30}
          className={`ml-4 sm:ml-8 cursor-pointer ${
            index === maxIndex ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={index < maxIndex ? handleNext : () => {}}
        />
      </div>
    </div>
  );
};

export default Section2;
