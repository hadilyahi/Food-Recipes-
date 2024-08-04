import React from "react";
import axios from "axios";
import RecipeBook from "@/app/component/BookRecipe";
import Link from "next/link";

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
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/recipes/${id}`
    );
    recipe = res.data;
  } catch (error) {
    console.error("Error fetching recipe:", error);
  }

  if (!recipe) {
    return (
      <p>An error occurred while fetching data or the recipe was not found.</p>
    );
  }

  return (
    <div className="p-8">
      <RecipeBook
        title={recipe.title}
        ingredients={recipe.ingredients}
        instructions={recipe.instructions}
      />
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h1 className="font-arabicTypesetting font-bold text-4xl">
            Do you want to return to the food page?
          </h1>
          <Link href={"/"}>
            <button className="p-2 bg-blue-500 w-40 mb-2  text-white rounded">
              Back To{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
