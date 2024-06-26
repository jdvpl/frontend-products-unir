import React from 'react'

const Presentation = () => {
    return (
        <div className=' flex flex-col  gap-3 p-5 overflow-y-auto h-[60vh] mt-[10vh] text-primario-900'>
            <p className='text-primario-800 font-bold text-xl'> Estimado Profesor Javier Díaz,</p>

            <p>Me complace presentarle nuestro proyecto desarrollado utilizando tecnologías de vanguardia. En el backend, hemos implementado una robusta API en Java, mientras que el frontend ha sido creado con la moderna plataforma Next.js. Este sistema ofrece una experiencia de usuario optimizada y funciones específicas para administradores y usuarios.</p>

            <p className='text-primario-900 font-bold text-xl text-center'>Funcionalidades del Sistema</p>
            <p className='font-bold'>Registro y Autenticación:</p>
            <p>Los usuarios pueden registrarse y autenticarse en nuestra plataforma de manera segura y eficiente. Al registrarse, obtienen acceso a un conjunto de funcionalidades diseñadas para mejorar su experiencia de compra.</p>

            <p className='font-bold'>Roles y Permisos:</p>
            <p>Hemos implementado un sistema de roles que distingue entre usuarios comunes y administradores:</p>

            <p><span className='font-bold'>Usuarios Administradores:</span>  Tienen permisos especiales para crear y gestionar categorías de productos, así como para añadir nuevos productos a la tienda.</p>
            <p><span className='font-bold'> Usuarios Comunes: </span> Pueden explorar el catálogo de productos, filtrar por categoría, y añadir productos a su carrito de compras para facilitar su proceso de adquisición.
            </p>
            <p className='font-bold text-center'>Descripción Promocional del Sistema</p>
            <p >Descubre nuestra plataforma, donde la tecnología y la comodidad se unen para brindarte una experiencia de compra sin igual. Navega a través de una amplia gama de productos diseñados para satisfacer todas tus necesidades, con la garantía de calidad y precios competitivos que nos distingue.</p>

            <p>Calidad garantizada y precios competitivos. <br /> ¡Regístrate hoy y disfruta de grandes beneficios! Haz tu compra de manera fácil y rápida, con la seguridad de estar adquiriendo productos seleccionados con los más altos estándares. Ya seas un usuario regular en busca de las mejores ofertas o un administrador gestionando tu inventario, nuestra plataforma está diseñada para facilitar cada paso de tu experiencia de compra.</p>
        </div>
    )
}

export default Presentation
