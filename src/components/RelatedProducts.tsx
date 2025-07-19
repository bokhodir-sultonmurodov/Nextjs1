"use client";

import { Star } from "lucide-react";
import { useRouter } from "next/navigation";

const RelatedProducts = ({ related }: { related: any }) => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/product/${id}`)
    
  }
  

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {related.map((product: any) => (
        <div
          key={product.id}
          className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 cursor-pointer hover:shadow-md transition"
          onClick={() => handleClick(product.id)}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-40 object-cover rounded-md mb-3"
          />
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
            {product.title}
          </h3>
          <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
          <div className="flex items-center justify-between text-sm text-gray-700">
            <span> ${product.price} </span>
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500" />
              {product.rating}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedProducts;
