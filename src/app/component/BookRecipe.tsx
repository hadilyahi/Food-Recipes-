import React from "react";

interface RecipeProps {
  title: string;
  ingredients: string[];
  instructions: string;
}

const RecipeBook: React.FC<RecipeProps> = ({
  title,
  ingredients,
  instructions,
}) => {
  return (
    <div
      className="
    flex items-center justify-center p-16 "
    >
      <div className=" w-full max-w-3xl p-10 bg-white rounded-lg shadow-red-800 shadow-sm rtl text-right">
        <div className=" "></div>
        <div className="">
          <h1 className="text-4xl font-bold text-center mb-4">{title}</h1>
          <h2 className="text-2xl font-semibold mt-6">المكونات</h2>
          <ul className="list-disc pl-5 rtl text-right">
            {ingredients.map((ingredient, index) => (
              <ol key={index} className="text-right">
              {ingredient}
            </ol>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mt-6">طريقة التحضير</h2>
          <p>{instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeBook;
