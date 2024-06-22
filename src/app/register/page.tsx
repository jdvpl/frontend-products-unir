'use client'
import ImageLoader from '@/components/ImageLoader'
import RegisterForm from '@/components/RegisterForm/RegisterForm';
import PublicLayout from '@/components/layout/PublicLayout';
import React from 'react'

const RegisterPage = () => {
  return (
    <PublicLayout>
    <div className='container'>
      <div className='flex md:flex-row flex-col w-full justify-center'>
        <div className='m-auto w-full flex items-center mt-20 justify-center'>
          <ImageLoader src="/images/register.jpeg" className="md:w-[400px] md:h-[400px] " />
        </div>
        <div className='w-full'>
          <RegisterForm />
        </div>
      </div>
    </div>
    </PublicLayout>
  )
}

export default RegisterPage
