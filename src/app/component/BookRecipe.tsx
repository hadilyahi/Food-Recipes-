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
    <div className="flex items-center justify-center p-4 md:p-8 lg:p-16">
      <div className="w-full max-w-3xl p-6 md:p-8 lg:p-10 bg-white rounded-lg shadow-sm shadow-red-500 rtl text-right">
        <div className=" ">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">{title}</h1>
          <h2 className="text-xl md:text-2xl lg:text-2xl font-semibold mt-6">المكونات</h2>
          <ul className="list-disc pl-5 rtl text-right">
            {ingredients.map((ingredient, index) => (
              <ol key={index} className="text-right">
                {ingredient}
              </ol>
            ))}
          </ul>
          <h2 className="text-xl md:text-2xl lg:text-2xl font-semibold mt-6">طريقة التحضير</h2>
          <p className="text-base md:text-lg lg:text-lg">{instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeBook;
