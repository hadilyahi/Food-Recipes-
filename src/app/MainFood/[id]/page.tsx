import React from 'react';
import axios from 'axios';
import RecipeBook from '@/app/component/BookRecipe';
import Link from 'next/link';

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
    return <p className='text-center text-red-500'>An error occurred while fetching data or the recipe was not found.</p>;
  }

  return (
    <div className='p-4 md:p-8'>
      <RecipeBook
        title={recipe.title}
        ingredients={recipe.ingredients}
        instructions={recipe.instructions}
      />
      <div className='flex flex-col items-center mt-8'>
        <h1 className='font-arabicTypesetting font-bold text-2xl md:text-4xl mb-4 text-center'>
          Do you want to return to the food page?
        </h1>
        <Link href="/MainFood">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
            Back To Food Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecipePage;
