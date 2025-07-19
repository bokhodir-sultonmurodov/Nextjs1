import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";
import RelatedProducts from "@/components/RelatedProducts"; 
import { log } from "console";

const ProductDetail = async ({ params }: { params: any }) => {
  const id = params.id;

  const res = await fetch(`https://dummyjson.com/products/${id}`, {cache: "force-cache",});
  const product = await res.json();

  const relatedProduct = await fetch(
    `https://dummyjson.com/products/category/${product.category}`,{ cache: "force-cache" }
  );
  const relatedData = await relatedProduct.json();
  
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="relative w-full h-[400px] bg-gray-100 rounded-xl overflow-hidden shadow-md">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-4 text-gray-800">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600 text-sm">{product.description}</p>

          <div className="flex items-center gap-2 text-xl font-semibold text-black">
            ${product.price}
            <span className="ml-2 text-sm text-green-600">
              {product.discountPercentage}% off
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium">
            Brand: {product.brand}
          </div>

          <div className="flex items-center gap-2 text-sm font-medium">
            <Star className="w-4 h-4 text-yellow-500" />
            Rating: {product.rating}
          </div>

          <div className="text-sm font-medium">Stock: {product.stock}</div>
          <div className="text-sm font-medium">Category: {product.category}</div>
          <div className="text-sm font-medium">Warranty: {product.warrantyInformation}</div>

          <button className="mt-4 px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Related Products</h2>
        <RelatedProducts related={relatedData.products} />
      </div>
    </div>
  );
};

export default ProductDetail;
