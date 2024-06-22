'use client'
import ImageLoader from '@/components/ImageLoader'
import LoginForm from '@/components/LoginForm/LoginForm';
import PublicLayout from '@/components/layout/PublicLayout';

const LoginPage = () => {
  return (
    <PublicLayout>
    <div className='container '>
      <div className='flex md:flex-row flex-col w-full justify-evenly bg-gradient-to-r from-white to-[#F1F4FC] h-screen'>
      <div className='w-full flex justify-center md:mt-[130px] mt-16'>
          <LoginForm/>
        </div>
        <div className=' w-full flex flex-col items-start   justify-start'>
          <ImageLoader src="/images/login.jpeg" className="md:w-[500px] md:h-[550px] " />
        </div>
      </div>
    </div>
    </PublicLayout>
  )
}

export default LoginPage
