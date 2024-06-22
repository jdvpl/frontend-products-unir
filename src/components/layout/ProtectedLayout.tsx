import React from 'react'
import Footer from '../Footer/Footer'
import PrivateHeader from '../Header/PrivateHeader'
import useProtectedRoutes from '@/hooks/useProtectedRoutes'

const ProtectedLayout = ({children}) => {
  useProtectedRoutes()
  
  return (
    <div className="flex flex-col min-h-screen">
    <PrivateHeader />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
  
  )
}

export default ProtectedLayout
