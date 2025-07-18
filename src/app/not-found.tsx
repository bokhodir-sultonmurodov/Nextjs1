"use client";

import React from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-6xl md:text-9xl font-bold text-gray-800">404</h1>
      <p className="text-lg md:text-xl text-gray-600 mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => router.push("/")}
          className="px-5 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition"
        >
          Go Home
        </button>
        <button
          onClick={() => router.back()}
          className="px-5 py-2 rounded-md border border-gray-400 text-gray-800 hover:bg-gray-100 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
