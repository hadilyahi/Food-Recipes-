"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
 
  imageSrc: string;
  title: string;
 
  text: string;
}

const CardRev: React.FC<CardProps> = ({  imageSrc, title, text }) => {


  return (
    <div className='relative w-96 rounded-2xl bg-stone-200 flex flex-col p-4'>
      <div className='w-full flex justify-around '>
        <Image src={imageSrc} alt={title} width={100} height={100} className='rounded-lg'/>
        <h1 className='text-3xl font-bold flex items-center justify-center'>{title}</h1>
      </div>
      
     
     <div className='p-3'>
        <p className='font-sahitya'>{text}</p>
     </div>
   
    </div>
  );
};

export default CardRev;
