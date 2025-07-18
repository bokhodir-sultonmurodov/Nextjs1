"use client";
import Image from "next/image";
import React from "react";
import { Star, Clock, ChefHat } from "lucide-react";

const Food = ({ data }: { data: any }) => {
  return (
    <>
      <div className="mt-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Recipes
        </h1>
      </div>

      <div className="max-w-6xl mx-auto p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 bg-gray-100">
        {data?.recipes?.map((item: any) => (
          <div
            key={item.id}
            className="relative bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm"
          >
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 pb-10 space-y-1">
              <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
              <p className="text-sm text-gray-600">{item.cuisine}</p>

              <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
                <Clock className="w-4 h-4" />
                <span>{item.cookTimeMinutes} min</span>
              </div>
            </div>

            <span className="absolute bottom-2 right-2 flex items-center gap-1 text-sm bg-white px-2 py-1 rounded shadow">
              <Star className="w-4 h-4 text-yellow-500" />
              {item.rating}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Food;
