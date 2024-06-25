import { routes } from '@/routes'
import Link from 'next/link'
import React from 'react'

const UnAthorize = () => {
  return (
    <section className="bg-white">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-primario-200 md:text-4xl ">Pagina no autorizada.</p>
            <p className="mb-4 text-lg font-light text-secundario-500">Lo sentimos, pero no tienes permisos para ingresar a esta pagina. </p>
            <Link href={routes.home} className="inline-flex text-white bg-primario-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primario-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</Link>
        </div>   
    </div>
</section>
  )
}

export default UnAthorize
