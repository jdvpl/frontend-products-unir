'use client'
import Header from '@/components/Header/header'
import ImageLoader from '@/components/ImageLoader'
import LoginForm from '@/components/LoginForm/LoginForm';
const LoginPage = () => {
  return (
    <div className='container '>
      <Header />
      <div className='flex w-full justify-evenly bg-gradient-to-r from-white to-[#F1F4FC] h-screen'>
      <div className='w-full flex justify-center mt-[130px]'>
          <LoginForm/>
        </div>
        <div className='m-auto w-full flex flex-col items-start   justify-start'>
          <ImageLoader src="/images/login.jpeg" className="w-[500px] h-[550px] " />
        </div>
        
      </div>
    </div>
  )
}

export default LoginPage
