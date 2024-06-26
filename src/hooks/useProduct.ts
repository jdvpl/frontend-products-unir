import { SessionStorageKeys } from "@/session";
import { useSessionStorage } from "./useSessionStorage";
import { useEffect, useState } from "react";
import { productService } from "@/services/product";
import { Product } from "@/components/ProductCard/Product";

const useProduct=() =>{
const [token] = useSessionStorage<any>(SessionStorageKeys.login.key, "");
  const [storedProducts, setStoredProducts] = useSessionStorage<any>(SessionStorageKeys.products.key, []);
  const [currentCategory, setcurrentCategory] = useState(0);
  const [products, setProducts] = useState<Product[]>(storedProducts || []);

  const getProduct = async (): Promise<void> => {
    const { response, error } = await productService(token);
    if (!error) {
      setStoredProducts(response);
      setProducts(response);
    }
  };

  const productsGet = () => {
    const filteredProducts = products.filter((item: Product) => item.categoryId === currentCategory);
    return currentCategory === 0 ? products : filteredProducts;
  };

  useEffect(() => {
    if (!storedProducts || storedProducts.length === 0) {
      getProduct();
    }
  }, [storedProducts]);

  return {setcurrentCategory,productsGet,setStoredProducts,storedProducts}
}

export default useProduct;