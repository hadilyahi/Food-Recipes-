"use client";
import React from 'react';
import Image from 'next/image';

interface CardProps {
  imageSrc: string;
  title: string;
  text: string;
}

const CardRev: React.FC<CardProps> = ({ imageSrc, title, text }) => {
  return (
    <div className='relative w-full max-w-md rounded-2xl bg-stone-200 flex flex-col p-4'>
      <div className='flex flex-col md:flex-row items-center'>
        <Image 
          src={imageSrc} 
          alt={title} 
          width={100} 
          height={100} 
          className='rounded-lg mb-4 md:mb-0 md:mr-4'
        />
        <h1 className='text-2xl md:text-3xl font-bold text-center md:text-left'>
          {title}
        </h1>
      </div>

      <div className='p-3'>
        <p className='font-sahitya text-base md:text-lg'>
          {text}
        </p>
      </div>
    </div>
  );
};

export default CardRev;
