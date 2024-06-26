import { useSessionStorage } from '@/hooks/useSessionStorage';
import { productService } from '@/services/product';
import { SessionStorageKeys } from '@/session';
import React, { useEffect, useState } from 'react';
import ProductCard, { Product as ProductP } from '../ProductCard/Product';
import Aside from '../Aside/Aside';

const Product = () => {
  const [token] = useSessionStorage<any>(SessionStorageKeys.login.key, "");
  const [storedProducts, setStoredProducts] = useSessionStorage<any>(SessionStorageKeys.products.key, []);
  const [currentCategory, setcurrentCategory] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<ProductP[]>(storedProducts || []);

  const getProduct = async (): Promise<void> => {
    const { response, error } = await productService(token);
    if (!error) {
      setStoredProducts(response);
      setProducts(response);
    }
  };

  const productsGet = () => {
    const filteredProducts = products.filter((item: ProductP) => item.categoryId === currentCategory);
    return currentCategory === 0 ? products : filteredProducts;
  };

  useEffect(() => {
    if (!storedProducts || storedProducts.length === 0) {
      getProduct();
    }
  }, [storedProducts]);

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
