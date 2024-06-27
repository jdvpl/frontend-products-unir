import { routes } from '@/routes'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import ImageLoader from '../ImageLoader'

const ModalCart = ({handleCart,carts}) => {
    const roter=useRouter()
    const [width, setWidth] = useState(0);
    const gotoShoppingCart=()=>{
        roter.push(routes.shoppingCart)
    }

    useEffect(() => {
        const interval = setInterval(() => {
          setWidth(prevWidth => prevWidth +2); // Incrementa el ancho por 10 cada 5 segundos
        }, 50);
        return () => clearInterval(interval);
      }, []);

    useEffect(() => {
      setTimeout(() => {
        handleCart()
      }, 5000);
    }, [])
    
  return (
    <div>
      <div className=" z-10 fixed top-0 right-1 " >
  
  <div className="fixed top-0 right-0 bg-gray-500 bg-opacity-75 transition-opacity" ></div>

  <div className="absolute top-0 right-0 z-10  overflow-y-auto w-[320px]">
    <div className="flex  items-end justify-center p-4 text-center sm:items-center sm:p-0">

      <div className="relative transform overflow-hidden rounded-lg bg-white text-left  transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <FaShoppingCart/>
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Carrito</h3>
              <div className="mt-2 flex-col" >
                {carts.map((item)=>(
                    <div key={item.id} className='flex justify-between'>
                        <ImageLoader src={item.picture} className='w-10 h-10 m-auto' />
                        <p>{item.name}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3 pb-5">
          <button type="button" className="inline-flex w-full justify-center rounded-md bg-rojo-60 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rojo-50 sm:ml-3 sm:w-auto" onClick={gotoShoppingCart}>Ver</button>
          <button type="button" onClick={handleCart} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cerrar</button>
        </div>
        <div className='flex bg-verde-100 w-1/2 h-3 transition-all ease-linear' style={{width:`${width}%`}}></div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ModalCart
