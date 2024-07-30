"use client"
import React, { useEffect, useState } from 'react';
interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  steps: string[];
  time: string;
}




function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/Recipes')
      .then(response => response.json())
      .then(data => {
        console.log(data); // تحقق من البيانات في وحدة التحكم
        setRecipes(data);
      })
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);
  

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.time}</p>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

export default Recipes;
