import { useSessionStorage } from '@/hooks/useSessionStorage';
import { SessionStorageKeys } from '@/session';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Swal from 'sweetalert2';
import { TextArea } from '../TextArea/TextArea';
import Button from '../Button/Button';
import Input from '../Input/Input';
import useCategory from '@/hooks/useCategory';
import { Product } from '../ProductCard/Product';
import Select from 'react-select'
import ImageLoader from '../ImageLoader';
import { createProductService } from '@/services/product';
import useProduct from '@/hooks/useProduct';

const AddProducts = ({handleModal, updating=false, product}) => {
  const { categories } = useCategory()
  const { storedProducts,setStoredProducts } = useProduct()
    const [token] = useSessionStorage<any>(SessionStorageKeys.login.key, "");

    const categoriesSelect=categories?.map((item)=>{
        return {value:item.id,label:item.name}
    })
  const [productData, setproductData] = useState<Partial<Product>>({
    name: product.name,
    categoryId: product.categoryId,
    description: product.description,
    status: product.status,
    picture: product.picture,
    price: product.price,
    quantity: product.quantity,
    id: product.id
  });

  const defaultValueSelect={value:product.categoryId,label:product.categoryName}

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const isChecked = (e.target as HTMLInputElement).checked;
      setproductData({
        ...productData,
        [name]: isChecked
      });
    } else {
      setproductData({
        ...productData,
        [name]: value
      });
    }
  };
  const handleSelect = (e: any) => {
    const id = e.value;
    if (id) {
      setproductData({
        ...productData,
        categoryId: id
      });
    }
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      const sendData = {
        name: productData.name,
        price: productData.price,
        description: productData.description,
        status: productData.status,
        quantity: productData.quantity,
        picture: productData.picture,
        categoryId: productData.categoryId
      };
      if(updating){
        sendData['id'] = productData.id
      }

      const { response, error } = await createProductService(token, sendData);
      if (!error) {
        if(updating){
          const updatedArray = storedProducts.map(item => {
            if (item.id === productData.id) {
              return response; 
            }
            return item;
          });
          setStoredProducts(updatedArray);
        }else{
          setStoredProducts([...storedProducts, response])
        }
        Swal.fire({
          title: updating ? 'Producto actualizado' : 'Producto agregado',
          text: updating?'Producto actualizado exitosamente':'Producto creado exitosamente! ',
          icon: updating?'info':'success',
          confirmButtonText: 'Aceptar',
          
        }).then(() => {
          handleModal()
        })
      }else{
        Swal.fire({
          title:'Error al crear la Producto',
          text: `Error al crear la Producto ${response.message}`,
          icon: 'error',
          confirmButtonText: 'Cancelar'
        });
      } 
      setproductData({
        
        name: '',
        description: '',
        status: true,
      });
      
    
  };
  return (
    <div className='flex justify-center flex-col  w-full  m-auto  bg-white   h-full mb-10'>
    <h3 className='text-2xl text-center mt-10'>{updating ? 'Actualizar producto' : 'Crear nuevo producto'} </h3>
    <form onSubmit={handleSubmit} className=' m-auto flex justify-center  flex-col  ≈ border-complementario-60 p-5 gap-y-3'>
    <div className='grid gap-3'>
      <Input
        type="text"
        id="newProductName"
        name="name"
        label='Nombre del producto:'
        value={productData.name}
        onChange={handleInputChange}
        required
      />

      <Input
        type="number"
        label='Precio del producto'
        id="newProductPrice"
        name="price"
        className='mt-10'
        value={productData.price}
        onChange={handleInputChange}
        required
      />
      <Input
        type="number"
        label='Cantidad disponible'
        id="quantity"
        name="quantity"
        className='mt-10'
        value={productData.quantity}
        onChange={handleInputChange}
        required
      />


      <Input
        type="url"
        label='Url del producto'
        id=""
        name="picture"
        className='mt-10'
        value={productData.picture}
        onChange={handleInputChange}
        required
      />
      {productData.picture&&(

    <ImageLoader
    className='w-20 h-20 m-auto'
      src={productData.picture}
    />
      )}
      <TextArea
        id="newProductDescription"
        name="description"
        value={productData.description}
        onChange={handleInputChange}
        required
        description="Descripción del producto"
      />


<Select name='categoryId' onChange={handleSelect} options={categoriesSelect} defaultValue={defaultValueSelect} />
<div className='flex justify-start text-start'>
        <label>
          <input
            type="checkbox"
            name="status"
            className='border'
            checked={productData.status}
            onChange={handleInputChange}
          />
          <span> Habilitada</span>
        </label>
      </div>
    </div>

      <Button type="submit" className={`m-auto ${updating&&'bg-verde-200'}`}>{updating?'Actualizar producto':'Crear producto'}</Button>
    </form>
    </div>
  )
}

export default AddProducts
