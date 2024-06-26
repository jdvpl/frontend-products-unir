'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import ProtectedLayout from '@/components/layout/ProtectedLayout';
import { SessionStorageKeys } from '@/session';
import { useSessionStorage } from '@/hooks/useSessionStorage';
import { CategoryData, ProductData } from '@/interface/Category';
import { categoryService } from '@/services/category';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import { TextArea } from '@/components/TextArea/TextArea';


const CategoryPage = () => {
  const [token] = useSessionStorage<any>(SessionStorageKeys.login.key, "");
  const [CategoryData, setCategoryData] = useState<CategoryData>({
    name: '',
    description: '',
    status: true,
    createProduct: false,
    products: [],
    newProductName: '',
    newProductPrice: 0,
    newProductDescription: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const isChecked = (e.target as HTMLInputElement).checked;
      setCategoryData({
        ...CategoryData,
        [name]: isChecked
      });
    } else {
      setCategoryData({
        ...CategoryData,
        [name]: value
      });
    }
  };

  const handleProductInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCategoryData({
      ...CategoryData,
      [name]: value
    });
  };

  const handleAddProduct = () => {
    const { newProductName, newProductPrice, newProductDescription } = CategoryData;
    const newProduct: ProductData = {
      name: newProductName,
      price: newProductPrice,
      description: newProductDescription,
    };
    setCategoryData({
      ...CategoryData,
      products: [...CategoryData.products, newProduct],
      newProductName: '',
      newProductPrice: 0,
      newProductDescription: '',
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {


      const sendData = {
        name: CategoryData.name,
        description: CategoryData.description,
        status: CategoryData.status,
        products: CategoryData.products,
      };

      console.log('Enviar datos al servidor:', sendData);

      const { response, error } = await categoryService(token, sendData);

      if (!error) {
        console.log('Respuesta del servidor:', response);
        alert('Categoría creada correctamente');
      } else {
        throw new Error('Error al crear la categoría');
      }

      setCategoryData({
        name: '',
        description: '',
        status: true,
        createProduct: false,
        products: [],
        newProductName: '',
        newProductPrice: 0,
        newProductDescription: '',
      });
    } catch (error) {
      console.error('Error al crear la categoría:', error);
      alert('Error al crear la categoría');
    }
  };

  return (

    <ProtectedLayout>
      <div className='flex justify-center flex-col border w-full md:w-1/2 m-auto rounded-md bg-white border-complementario-90 shadow-md mt-10'>
      <h3 className='text-2xl text-center mt-10'>Crear nueva categoría</h3>
      <form onSubmit={handleSubmit} className=' m-auto flex justify-center  flex-col  rounded-md border-complementario-60 p-5 gap-y-3'>
        <Input
          type="text"
          id="name"
          name="name"
          label='Nombre'
          placeholder='Ingresa el nombre de la categoría'
          className='w-full'
          value={CategoryData.name}
          onChange={handleInputChange}
          required
        />
        <TextArea
          id="description"
          name="description"
          description="Descripción"
          value={CategoryData.description}
          onChange={handleInputChange}
          required
        />
        <div className='flex justify-start text-start'>
          <label>
            Estado:
            <input
              type="checkbox"
              name="status"
              className='border'
              checked={CategoryData.status}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            ¿Agregar producto?
            <input
              type="checkbox"
              name="createProduct"
              checked={CategoryData.createProduct}
              onChange={handleInputChange}
            />
          </label>
        </div>
        {CategoryData.createProduct && (
          <div className='grid gap-3'>
            <Input
              type="text"
              id="newProductName"
              name="newProductName"
              label='Nombre del producto:'
              value={CategoryData.newProductName}
              onChange={handleProductInputChange}
              required
            />

            <Input
              type="number"
              label='Precio del producto'
              id="newProductPrice"
              name="newProductPrice"
              className='mt-10'
              value={CategoryData.newProductPrice}
              onChange={handleProductInputChange}
              required
            />


            <TextArea
              id="newProductDescription"
              name="newProductDescription"
              value={CategoryData.newProductDescription}
              onChange={handleProductInputChange}
              required
              description="Descripción del producto"
            />
   
            <Button type="button" className='m-auto bg-complementario-20' onClick={handleAddProduct}>Agregar Producto</Button>
            <ul>
              {CategoryData.products.map((product, index) => (
                <li key={index}>
                  {product.name} - {product.price} - {product.description}
                </li>
              ))}
            </ul>
          </div>
        )}
        <Button type="submit" className='m-auto'>Crear Categoría</Button>
      </form>
      </div>
    </ProtectedLayout>
  );
};

export default CategoryPage;