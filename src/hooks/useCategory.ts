import { SessionStorageKeys } from "@/session";
import { useSessionStorage } from "./useSessionStorage";
import { useEffect, useState } from "react";
import { categoryService } from "@/services/product";

const useCategory = () => {
    const [categories, setCategories] = useSessionStorage<any>(SessionStorageKeys.category.key, []);
    const [token] = useSessionStorage<any>(SessionStorageKeys.login.key, "");
    const [filteredCategories, setFilteredCategories] = useState(categories);
    
    const getCategories = async (): Promise<void> => {
      const { response, error } = await categoryService(token);
      if (!error) {
        setCategories(response);
        setFilteredCategories(response.filter((item: any) => item.products.length > 0));
      }
    };
  
    useEffect(() => {
      if (!categories || categories.length === 0) {
        getCategories();
      } else {
        setFilteredCategories(categories.filter((item: any) => item.products.length > 0));
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categories]);

    return {  filteredCategories, categories,setCategories};
}
export default useCategory