import React, { useState } from 'react'
import ImageLoader from '../ImageLoader'
import Modal from '../modal/Modal'
import LoginForm from '../LoginForm/LoginForm'
import Presentation from '../commons/Presentation'

const BannerHome = () => {
    const [showModal, setshowModal] = useState(false);
    const [showInformation, setshowInformation] = useState(false)

    const handleModal = () => {
        setshowModal(!showModal)
    }
    const handleModalInformation = () => {
        setshowInformation(!showInformation)
    }
    return (
        <>
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-white to-[#F1F4FC]">
            <ImageLoader
                src="/images/bannerLogo.jpeg"
                alt="Productos Unir"
                className="w-40 h-40 mb-6 rounded-md shadow-md object-cover"
            />
            <div
                className="text-center"
            >

                <h1 className="text-4xl font-bold text-primario-100 mb-4">Unir <span className='text-rojo-30'>Shopping</span></h1>
                <p className="text-lg text-primario-900 mb-2">
                    Descubre nuestra amplia gama de productos diseñados para satisfacer todas tus necesidades.
                </p>
                <p className="text-lg text-primario-700 mb-6">
                    Calidad garantizada y precios competitivos. ¡Haz tu compra hoy y disfruta de grandes beneficios!
                </p>
                <div className="flex md:flex-row flex-col  gap-4 justify-center  mx-4">
                    <button onClick={handleModal} className=" py-2 px-5 bg-primario-300 text-white rounded-md shadow-md hover:bg-primario-200 transition duration-300">
                        Comprar Ahora
                    </button>
                    <button onClick={handleModalInformation} className=" px-5 py-2 bg-rojo-100 text-white rounded-md shadow-md hover:bg-rojo-30 transition duration-300">
                        Más Información
                    </button>
                </div>
            </div>

        </div>

        {
            showModal && <Modal onclose={handleModal}>
                <LoginForm />
            </Modal>
        }
    
        {
            showInformation && <Modal onclose={handleModalInformation}>
                <Presentation />
            </Modal>
        }
    




        </>
    )
}

export default BannerHome




