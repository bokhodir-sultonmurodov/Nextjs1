"use client";
import Image from "next/image";
import React from "react";
import { Star, Clock, ChefHat } from "lucide-react";
import { useRouter } from "next/navigation";

const Food = ({ data }: { data: any }) => {
  const router = useRouter();
  const handleClick = (id: any) => {
    router.push(`/recipe/${id}`);
  };

  return (
    <>
      <div className="mt-10">
        <h1 className="text-4xl font-bold text-center text-black mb-10 tracking-wide">
           Recipes
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.recipes?.map((item: any) => (
          <div
            key={item.id}
            onClick={() => handleClick(item.id)}
            className="cursor-pointer bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="relative h-52 w-full overflow-hidden rounded-t-xl">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
                <span className="text-xs text-gray-500 border border-gray-300 px-2 py-0.5 rounded-full">
                  {item.mealType?.[0] }
                </span>
              </div>

              <p className="text-sm text-gray-500">{item.cuisine}</p>

              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Clock className="w-4 h-4 text-gray-600" />
                <span>{item.cookTimeMinutes} min</span>
              </div>
            </div>

            {/* <span className="absolute bottom-3 right-3 flex items-center gap-1 text-sm bg-white px-2 py-1 rounded-full border border-gray-200 shadow-sm text-gray-800">
              <Star className="w-4 h-4 text-yellow-400" />
              {item.rating}
            </span> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Food;
