'use client'
import ProtectedLayout from '@/components/layout/ProtectedLayout'
import useProtectedRoutes from '@/hooks/useProtectedRoutes'
import React from 'react'

const ProductPage = () => {
  useProtectedRoutes()
  return (
    <div>
      <ProtectedLayout>
        <h3>categorias</h3>
      </ProtectedLayout>
    </div>
  )
}

export default ProductPage
