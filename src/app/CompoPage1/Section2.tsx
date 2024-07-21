"use client"
import React, { useState } from "react";
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

  const handleNext = () => {
    setIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 4));
  };

  const handlePrev = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="flex flex-col gap-16">
      <div className="flex items-center justify-center">
        <h1 className="font-acme text-5xl">Highlights</h1>
      </div>
      <div className="flex items-center justify-between">
        <Image
          src="/Vector 1.svg"
          alt="Previous"
          width={40}
          height={40}
          className="mr-8 cursor-pointer"
          onClick={handlePrev}
        />
        <div className="relative flex items-center flex-grow overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * (100 / 4)}%)` }}
          >
            {images.map((image, i) => (
              <div key={i} className="flex-shrink-0 w-[25%] h-[300px] p-4 flex flex-col items-center cursor-pointer">
                <Image src={image.src} alt={image.title} width={235} height={235} />
                <p className="mt-4 text-center text-lg font-semibold">{image.title}</p>
              </div>
            ))}
          </div>
        </div>
        <Image
          src="/Vector 2.svg"
          alt="Next"
          width={40}
          height={40}
          className="ml-8 cursor-pointer"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default Section2;
