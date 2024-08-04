"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  id: number;
  imageSrc: string;
  title: string;
  time: string;
  type: string;
}

const Card: React.FC<CardProps> = ({ id, imageSrc, title, time, type }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const isLiked = favorites.some((item: any) => item.id === id);
    setLiked(isLiked);
  }, [id]);

  const handleLike = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const alreadyLiked = favorites.some((item: any) => item.id === id);

    if (liked && alreadyLiked) {
      const updatedFavorites = favorites.filter((item: any) => item.id !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else if (!liked && !alreadyLiked) {
      const newFavorite = { id, imageSrc, title, time, type };
      localStorage.setItem('favorites', JSON.stringify([...favorites, newFavorite]));
    }

    setLiked(!liked);
  };

  return (
    <div className='relative w-96 rounded-2xl bg-slate-100 flex flex-col p-4'>
      <div className='w-full flex justify-center'>
        <Image src={imageSrc} alt={title} width={400} height={200} className='rounded-lg'/>
      </div>
      <div className='absolute top-4 right-4 flex items-center'>
        <button 
          onClick={handleLike} 
          className={`p-2 rounded-full ${liked ? 'bg-red-500 text-white' : 'bg-gray-300 text-black'}`}
          aria-label={liked ? 'Dislike' : 'Like'}
        >
          {liked ? '❤️' : '🤍'}
        </button>
      </div>
      <div className='flex justify-start p-4'>
        <h1 className='text-3xl font-bold'>{title}</h1>
      </div>
      <div className='flex justify-around w-full'>
        <div className='flex gap-2 items-center'>
          <Image src='/clock.svg' alt='Time' width={25} height={25} />
          <p>{time}</p>
        </div>
        <div className='flex gap-2 items-center'>
          <Image src='/type.svg' alt='Type' width={25} height={25} />
          <p>{type}</p>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mt-2 w-full'>
        <Link href={`/MainFood/${id}`}>
          <button className="p-2 bg-blue-400 w-72 mb-2 text-white rounded">عرض التفاصيل</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
