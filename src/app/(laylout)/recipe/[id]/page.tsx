import Image from "next/image";
import React from "react";
import { Clock, Star, Flame } from "lucide-react";

const RecipeDetail = async ({ params }: { params: any }) => {
  const id = params.id;
  const res = await fetch(`https://dummyjson.com/recipes/${id}`, {
    cache: "force-cache",
  });
  const recipe = await res.json();

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <div className="relative w-full h-[450px] rounded-lg overflow-hidden">
        <Image
          src={recipe.image}
          alt={recipe.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">{recipe.name}</h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {recipe.cookTimeMinutes} min
          </span>
          <span className="flex items-center gap-2">
            <Flame className="w-4 h-4" />
            {recipe.caloriesPerServing} kcal
          </span>
          <span className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" />
            {recipe.rating}
          </span>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            {recipe.ingredients?.map((ingredient: string, i: number) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Instructions</h2>
          <ol className="list-inside text-gray-700 text-sm space-y-1">
            {recipe.instructions?.map((step: string, i: number) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
