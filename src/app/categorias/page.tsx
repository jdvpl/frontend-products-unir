'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import ProtectedLayout from '@/components/layout/ProtectedLayout';
import useProtectedRoutes from '@/hooks/useProtectedRoutes';
import Category from '@/components/categories/category';
import { SessionStorageKeys } from '@/session';

interface ProductData {
  name: string;
  price: number;
  description: string;
}

interface CategoryData {
  name: string;
  description: string;
  status: boolean;
  createProduct: boolean;
  products: ProductData[];
  newProductName: string;
  newProductPrice: number;
  newProductDescription: string;
}

const CategoryPage = () => {
  useProtectedRoutes();

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
      const token = sessionStorage.getItem(SessionStorageKeys.login.key);

      if (!token) {
        throw new Error('Token not found in sessionStorage');
      }

      const sendData = {
        name: CategoryData.name,
        description: CategoryData.description,
        status: CategoryData.status,
        products: CategoryData.products,
      };

      console.log('Enviar datos al servidor:', sendData);

      const response = await fetch('https://whale-app-xj8xk.ondigitalocean.app/category/admin/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(sendData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Respuesta del servidor:', data);
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
    <Category>
      <ProtectedLayout>
        <h3>Crear nueva categoría</h3>
        <form onSubmit={handleSubmit} className=''>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={CategoryData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Descripción:</label>
            <textarea
              id="description"
              name="description"
              value={CategoryData.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>
              Estado:
              <input
                type="checkbox"
                name="status"
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
            <div>
              <div>
                <label htmlFor="newProductName">Nombre del producto:</label>
                <input
                  type="text"
                  id="newProductName"
                  name="newProductName"
                  value={CategoryData.newProductName}
                  onChange={handleProductInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="newProductPrice">Precio del producto:</label>
                <input
                  type="number"
                  id="newProductPrice"
                  name="newProductPrice"
                  value={CategoryData.newProductPrice}
                  onChange={handleProductInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="newProductDescription">Descripción del producto:</label>
                <textarea
                  id="newProductDescription"
                  name="newProductDescription"
                  value={CategoryData.newProductDescription}
                  onChange={handleProductInputChange}
                  required
                />
              </div>
              <button type="button" onClick={handleAddProduct}>Agregar Producto</button>
              <ul>
                {CategoryData.products.map((product, index) => (
                  <li key={index}>
                    {product.name} - {product.price} - {product.description}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button type="submit">Crear Categoría</button>
        </form>
      </ProtectedLayout>
    </Category>
  );
};

export default CategoryPage;