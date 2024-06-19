'use client'
import Header from '@/components/Header/header'
import ImageLoader from '@/components/ImageLoader'
import RegisterForm from '@/components/RegisterForm/RegisterForm';
import React from 'react'

const RegisterPage = () => {

  return (
    <div className='container'>
      <Header />
      <div className='flex w-full justify-evenly'>
        <div className='m-auto w-full flex items-center h-[80vh] justify-center'>
          <ImageLoader src="/images/register.jpeg" className="w-[400px] h-[400px] " />
        </div>
        <div className='w-full'>
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
