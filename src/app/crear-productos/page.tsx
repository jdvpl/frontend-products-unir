'use client'
import React from 'react';
import ProtectedLayout from '@/components/layout/ProtectedLayout';
import TableProducts from '@/components/TableProduct/TableProducts';

const CategoryPage = () => {
  return (
    <ProtectedLayout>
      <TableProducts/>
    </ProtectedLayout>
  );
};

export default CategoryPage;