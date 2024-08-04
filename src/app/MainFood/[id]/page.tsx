import Image from 'next/image';
import React from 'react';
import axios from 'axios';

interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  instructions: string;
  image: string;
}

interface RecipePageProps {
  params: {
    id: string;
  };
}

const RecipePage = async ({ params }: RecipePageProps) => {
  const { id } = params;

  let recipe: Recipe | null = null;

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/recipes/${id}`);
    recipe = res.data;
  } catch (error) {
    console.error('Error fetching recipe:', error);
    
  }

  if (!recipe) {
    return <p>An error occurred while fetching data or the recipe was not found.</p>}

  return (
    <div className='p-8'>
      <h1 className='text-4xl font-bold'>{recipe.title}</h1>
      
      <h2 className='text-2xl mt-4'>المكونات:</h2>
      <ul className='list-disc pl-5'>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className='text-2xl mt-4'>طريقة التحضير:</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipePage;
