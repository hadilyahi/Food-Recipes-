"use client";
import Card from "@/app/component/Card";
import React, { useEffect, useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <h1
        className="text-6xl font-bold flex
      justify-center items-center p-20"
      >
        الأكلات المفضلة
      </h1>
      <div className="flex flex-wrap">
        {favorites.length > 0 ? (
          favorites.map((favorite: any) => (
            <div key={favorite.id} className="m-4">
              <Card
                id={favorite.id}
                imageSrc={favorite.imageSrc}
                title={favorite.title}
                time={favorite.time}
                type={favorite.type}
              />
            </div>
          ))
        ) : (
          <h1 className="ml-96 text-4xl text-blue-700 font-itim"> No favourites </h1>
        )}
      </div>
    </div>
  );
};

export default Favorites;
