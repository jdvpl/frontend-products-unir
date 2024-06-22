
import React from 'react'
import ImageLoader from '../ImageLoader'

export interface Product {
  id: number
  name: string
  price: number
  description: string
  quantity: number
  picture: string
  status: boolean
  categoryId: number
}
const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <div className="w-full max-w-sm bg-white border border-complementario-60 rounded-lg shadow md:h-[370px] ">
        <ImageLoader className="w-[350px] h-[220px] object-contain flex justify-center m-auto p-2" src={product.picture} alt="product image" />
        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-primario-900 ">{product.name}</h5>
          <p className="mb-3 font-normal text-gray-700">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-primario-900 ">${product.price}</span>
            <button className="text-white bg-rojo-40 hover:bg-rojo-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 ">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
