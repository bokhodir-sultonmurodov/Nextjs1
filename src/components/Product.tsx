  "use client"
  import { Star } from 'lucide-react'
  import { useRouter } from 'next/navigation'
  import React from 'react'

  const Product = ({product}:{product:any}) => {
    const router = useRouter()
    const handleClick = (id:any)=>{
      router.push(`/product/${id}`)
    }
    return (
      <div>
              <div className="max-w-7xl mx-auto p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {product?.products?.map((product: any) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm p-4"
                  >
                    <img
                      onClick={() => handleClick(product.id)}
                      src={product.thumbnail}
                      alt={product.title}
                      className="cursor-pointer w-full h-40 object-cover rounded-md mb-3"
                    />
          
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
          
                    <div className="flex items-center justify-between text-sm text-gray-700">
                      <span className="flex items-center gap-1">
                        Price:  ${product.price}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {product.rating}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
      </div>
    )
  }

  export default Product