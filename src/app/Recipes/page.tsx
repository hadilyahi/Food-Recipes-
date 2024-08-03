"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  instructions: string;
  image: string;
  category: string;
}

const RecipesList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/recipes`)
      .then(response => {
        console.log('API Response:', response.data); 
        if (Array.isArray(response.data)) {
          setRecipes(response.data);
        } else {
          setError('Unexpected data format');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the recipes!', error);
        setError('There was an error fetching the recipes');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.length > 0 ? (
          recipes.map(recipe => (
            <li key={recipe.id}>
              <h2>{recipe.title}</h2>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <p>{recipe.instructions}</p>
            </li>
          ))
        ) : (
          <li>No recipes available</li>
        )}
      </ul>
    </div>
  );
};

export default RecipesList;
