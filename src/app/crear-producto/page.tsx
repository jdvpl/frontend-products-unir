import ProtectedLayout from '@/components/layout/ProtectedLayout'
import React from 'react'

const CreateProduct = () => {
  return (
    <div>
      <ProtectedLayout>
        <h3>Crear producto</h3>
      </ProtectedLayout>
    </div>
  )
}

export default CreateProduct
