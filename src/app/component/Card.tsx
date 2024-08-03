"use client"
import React, { useState } from 'react';
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  time: string;
  type: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, time, type }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className='w-96 h-96 rounded-2xl bg-slate-100 flex justify-center items-center'>
      <div className='w-[350px] h-[350px] rounded-2xl bg-blue-100 p-4'>
        <div className='w-full flex '>
          <Image src={imageSrc} alt={title} width={800} height={400} className='rounded-2xl' />
          
        </div>
        <div className='flex justify-between items-center'>
          <h1 className='p-5 font-itim text-4xl'>{title}</h1>
          <button 
            onClick={handleLike} 
            className={`p-2 rounded-full ${liked ? 'bg-red-500' : 'bg-gray-300'}`}
            aria-label={liked ? 'Dislike' : 'Like'}
          >
            {liked ? '❤️' : '🤍'}
          </button>
        </div>
        <div className='flex justify-around'>
          <div className='flex gap-2'>
            <Image src={'/clock.svg'} alt='Time' width={25} height={25} />
            <p>{time}</p>
          </div>
          <div className='flex gap-2'>
            <Image src={'/type.svg'} alt='Type' width={25} height={25} />
            <p>{type}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
