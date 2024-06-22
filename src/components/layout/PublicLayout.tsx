import React from 'react'
import useProtectedRoutes from '@/hooks/useProtectedRoutes'
import Header from '../Header/header'

const PublicLayout = ({children}) => {
  useProtectedRoutes()
  return (
    <div>
    <Header/>
      {children}    
    </div>
  )
}

export default PublicLayout
