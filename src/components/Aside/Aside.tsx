import { useSessionStorage } from '@/hooks/useSessionStorage';
import { categoryService } from '@/services/product';
import { SessionStorageKeys } from '@/session';
import React, { useEffect } from 'react'

const Aside = () => {
    const [product,setProducts] = useSessionStorage<any>(SessionStorageKeys.category.key, "");
    const [token] = useSessionStorage<any>(SessionStorageKeys.login.key, "");

    const getCategories=async (): Promise<void> => {    
        const {response,error}=await categoryService(token);
        if(!error){
            setProducts(response)
        }
    }

    useEffect(() => {
        if(!product){
            getCategories()
        }
    }, [])
  return (
    <div className='w-[200px] h-[100vh] bg-white'>
      <h1>Aside</h1>
    </div>
  )
}

export default Aside
