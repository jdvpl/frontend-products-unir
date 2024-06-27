import useCategory from '@/hooks/useCategory'
import React, { useState } from 'react'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import Modal from '../modal/Modal'

import { SessionStorageKeys } from '@/session'
import { useSessionStorage } from '@/hooks/useSessionStorage'
import Swal from 'sweetalert2'
import useProduct from '@/hooks/useProduct'
import ImageLoader from '../ImageLoader'
import { deleteProductService } from '@/services/product'
import AddProducts from '../AddProduct/AddProducts'
import { Product } from '../ProductCard/Product'



const TableProducts = () => {
    const { categories } = useCategory()
    const { productsGet, setStoredProducts, storedProducts } = useProduct()
    const [token] = useSessionStorage<any>(SessionStorageKeys.login.key, "");
    const [showCategory, setshowCategory] = useState(false);
    const [isUpdating, setisUpdating] = useState(false)
    const [CategoryData, setCategoryData] = useState<Product>({
        id: '',
        name: '',
        description: '',
        status: true,
        categoryId: 0,
        picture: '',
        price: 0,
        quantity: 0,
        categoryName: ''
    });

    const getCategoryName=(id)=>{
        const category = categories.find(item => item.id === id)
        return category?.name
    }
    const handleModal = () => {
        setshowCategory(!showCategory)
        setisUpdating(false)
        setCategoryData({
            id: '',
            name: '',
            description: '',
            status: true,
            categoryId: 0,
            picture: '',
            price: 0,
            quantity: 0,
            categoryName:''
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

    const updateCategory = (product) => {
        const categoryName = getCategoryName(product.categoryId)
        const updateProduct = {...product,categoryName}        
        setisUpdating(true)
        setshowCategory(!showCategory)
        setCategoryData(updateProduct)
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
                            Categoria
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productsGet().map(product => (
                            <tr className="bg-white border border-complementario-70 text-center " key={product.id}>
                                <td className="px-6 py-4 font-medium text-gray-900 border ">
                                    {product.name}
                                </td>
                                <td className='border'>
                                    {product.description}
                                </td>
                                <td className='border'>
                                    {product.price}
                                </td>
                                <td className='border'>
                                    <ImageLoader src={product.picture} className='w-10 h-10 m-auto' />
                                </td>
                                <td className='border'>
                                    {product.status ? 'activo' : 'inactivo'}
                                </td>
                                <td className='border'>
                                    {getCategoryName(product.categoryId)}
                                </td>
                                <td className='border'>
                                    <div className='flex gap-x-2 justify-center'>
                                        <button onClick={() => updateCategory(product)} className='text-verde-100'><FaEdit /></button>
                                        <button onClick={() => deleteCategory(product.id)} className='text-rojo-100'><FaTrash /></button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {
                showCategory && (
                    <Modal onclose={handleModal}>
                        <AddProducts handleModal={handleModal} product={CategoryData} updating={isUpdating} />
                    </Modal>
                )
            }
        </div>

    )
}

export default TableProducts
