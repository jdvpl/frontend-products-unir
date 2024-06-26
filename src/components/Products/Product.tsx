import { useSessionStorage } from '@/hooks/useSessionStorage';
import { productService } from '@/services/product';
import { SessionStorageKeys } from '@/session';
import React, { useEffect, useState } from 'react';
import ProductCard, { Product as ProductP } from '../ProductCard/Product';
import Aside from '../Aside/Aside';
import useProduct from '@/hooks/useProduct';

const Product = () => {

  const {setcurrentCategory,productsGet}=useProduct();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='container mx-auto my-5 flex justify-center'>
      <div className={isOpen?'w-1/5':'w-[10%]'} >   
      <Aside setcurrentCategory={setcurrentCategory} isOpen={isOpen}
setIsOpen={setIsOpen} />
      </div>
      <div className={`${isOpen ? 'w-4/5' : 'w-full'} grid grid-cols-1 md:grid-cols-2 lgsm:grid-cols-3 gap-6 mx-4 items-center`}>
        {productsGet()?.map((item: ProductP) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Product;
