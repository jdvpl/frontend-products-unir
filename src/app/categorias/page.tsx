'use client'
import React from 'react';
import ProtectedLayout from '@/components/layout/ProtectedLayout';
import TableCategory from '@/components/TableCategory/TableCategory';

const CategoryPage = () => {
  

  return (

    <ProtectedLayout>

      <TableCategory/>
     
    </ProtectedLayout>
  );
};

export default CategoryPage;