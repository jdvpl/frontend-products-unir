import { useSessionStorage } from '@/hooks/useSessionStorage';
import { productService } from '@/services/product';
import { SessionStorageKeys } from '@/session';
import React, { useEffect } from 'react'
import ProductCard, { Product as ProductP } from '../ProductCard/Product';

const Product = () => {

    const [token] = useSessionStorage<any>(SessionStorageKeys.login.key, "");
    const [product,setProducts] = useSessionStorage<any>(SessionStorageKeys.products.key, "");
    
    const getProduct=async (): Promise<void> => {    
        const {response,error}=await productService(token);
        if(!error){
            setProducts(response)
        }
    }
    const products=()=>{
      return product||[]
    }
    useEffect(() => {
        if(!product){
            getProduct()
        }
    }, [])
    
  return (
    <div className='container mx-auto my-5 flex justify-center'>
      <div className="grid grid-cols-1 md:grid-cols-2 lgsm:grid-cols-3 gap-6 mx-4 items-center">

      {products()?.map((item:ProductP) => (
        <ProductCard key={item.id} product={item}/>
      ))}
      </div>
    </div>
  )
}

export default Product
