import React from "react";
import { Star, Tag } from "lucide-react";
import Product from "@/components/Product";

const About = async () => {
  const res = await fetch("https://dummyjson.com/products?skip=42", {
    cache: "force-cache",
  });
  const products = await res.json();

  return (
    <>
         <div className="mt-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Products
        </h1>
      </div>
        <Product product={products}/>
    </>
  );
};

export default About;
