'use client'
import Product from '@/components/Products/Product'
import ProtectedLayout from '@/components/layout/ProtectedLayout'
import React from 'react'

const ProductPage = () => {
  return (
    <div>
      <ProtectedLayout>
        <Product/>
      </ProtectedLayout>
    </div>
  )
}

export default ProductPage
