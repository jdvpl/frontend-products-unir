'use client'
import ProtectedLayout from '@/components/layout/ProtectedLayout'
import React from 'react'

const ShoppingCart = () => {
    
  return (
    <div>
    <ProtectedLayout>
      <h3>Carrito</h3>
    </ProtectedLayout>
  </div>
  )
}

export default ShoppingCart
