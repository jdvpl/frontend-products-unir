import useCategory from '@/hooks/useCategory'
import React, { useState } from 'react'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import Modal from '../modal/Modal'
import AddCategory from '../AddCategory/AddCategory'
import { deletecategoryService } from '@/services/category'
import { SessionStorageKeys } from '@/session'
import { useSessionStorage } from '@/hooks/useSessionStorage'
import Swal from 'sweetalert2'
import { CategoryData } from '@/interface/Category'
import useProduct from '@/hooks/useProduct'
import ImageLoader from '../ImageLoader'
import { deleteProductService } from '@/services/product'



const TableProducts = () => {
    const { categories, setCategories } = useCategory()
    const { productsGet, setStoredProducts, storedProducts } = useProduct()
    const [token] = useSessionStorage<any>(SessionStorageKeys.login.key, "");
    const [showCategory, setshowCategory] = useState(false);
    const [isUpdating, setisUpdating] = useState(false)
    const [CategoryData, setCategoryData] = useState<CategoryData>({
        id: '',
        name: '',
        description: '',
        status: true,
    });
    const handleModal = () => {
        setshowCategory(!showCategory)
        setisUpdating(false)
        setCategoryData({
            id: '',
            name: '',
            description: '',
            status: true,
        })
    }
    const deleteCategory = async (id) => {
        const { error, response } = await deleteProductService(token, id);
        if (!error) {
            const filteredArray = storedProducts.filter(item => item.id !== id);
            setStoredProducts(filteredArray);
            Swal.fire({
                title: 'Producto eliminado',
                text: 'Producto eliminado exitosamente! ',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            })
        } else {
            Swal.fire({
                title: 'Producto eliminado',
                text: `${response.message}`,
                icon: 'error',
                confirmButtonText: 'Cancelar'
            })
        }

    }

    const updateCategory = (category) => {
        setisUpdating(true)
        setshowCategory(!showCategory)
        setCategoryData(category)
    }
    return (
        <div className="relative overflow-x-auto w-max m-auto my-10">
            <div className='flex justify-end mb-3'><button onClick={handleModal} className='bg-primario-40 text-white p-3 rounded-full'><FaPlus /></button></div>
            <table className=" text-sm text-left rtl:text-right text-complementario-500 overflow-x-auto w-full ">
                <thead className="text-xs text-gray-700 uppercase bg-complementario-50 border">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Descripcion
                        </th>
                        <th scope="col" className="px-6 py-3">
                            precio
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Imagen
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Estado
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productsGet().map(category => (
                            <tr className="bg-white border border-complementario-70 text-center " key={category.id}>
                                <td className="px-6 py-4 font-medium text-gray-900 border ">
                                    {category.name}
                                </td>
                                <td className='border'>
                                    {category.description}
                                </td>
                                <td className='border'>
                                    {category.price}
                                </td>
                                <td className='border'>
                                    <ImageLoader src={category.picture} className='w-10 h-10 m-auto' />
                                </td>
                                <td className='border'>
                                    {category.status ? 'activo' : 'inactivo'}
                                </td>
                                <td className='border'>
                                    <div className='flex gap-x-2 justify-center'>
                                        <button onClick={() => updateCategory(category)} className='text-verde-100'><FaEdit /></button>
                                        <button onClick={() => deleteCategory(category.id)} className='text-rojo-100'><FaTrash /></button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {/* {
                showCategory && (
                    <Modal onclose={handleModal}>
                        <AddCategory handleModal={handleModal} category={CategoryData} updating={isUpdating} />
                    </Modal>
                )
            } */}
        </div>

    )
}

export default TableProducts
