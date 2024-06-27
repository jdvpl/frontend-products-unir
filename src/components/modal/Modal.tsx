import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Modal = ({onclose, children}) => {
  return (
    <div className='z-[100] bg-complementario-100/90 w-[100vw] h-[100hv] fixed inset-0'>
        <div className='bg-white md:w-1/2 m-auto flex  justify-center items-center py-5 relative min-h-[50vh]  rounded-lg overflow-auto'>
       <button onClick={onclose}>
        <FaTimes className='text-3xl absolute top-5 right-5 text-rojo-40'/>
       </button>
      {children}
        </div>
    </div>
  )
}

export default Modal
