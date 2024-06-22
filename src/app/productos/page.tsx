'use client'
import MainLayout from '@/components/layout/MainLayout'
import useProtectedRoutes from '@/hooks/useProtectedRoutes'
import React from 'react'

const ProductPage = () => {
  useProtectedRoutes()
  return (
    <div>
      <MainLayout>
        <h3>Kisama</h3>
      </MainLayout>
    </div>
  )
}

export default ProductPage
