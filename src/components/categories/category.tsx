import React, { useEffect } from 'react';
import { SessionStorageKeys } from '@/session';
import { useSessionStorage } from '@/hooks/useSessionStorage';
import { categoryService } from '@/services/category';

const Category = ({ children }: { children: React.ReactNode }) => {
  const [token] = useSessionStorage<any>(SessionStorageKeys.login.key, "");
  const [categories, setCategories] = useSessionStorage<any>(SessionStorageKeys.products.key, "");

  const fetchCategories = async () => {
    const { response, error } = await categoryService(token);
    if (!error) {
        setCategories(response);
    }
  };

  useEffect(() => {
    if (!categories) {
      fetchCategories();
    }
  }, []);

  return <>{children}</>;
};

export default Category;