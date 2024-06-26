import { useSessionStorage } from '@/hooks/useSessionStorage';
import { CategoryData } from '@/interface/Category';
import { categoryService } from '@/services/category';
import { SessionStorageKeys } from '@/session';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Swal from 'sweetalert2';
import { TextArea } from '../TextArea/TextArea';
import Button from '../Button/Button';
import Input from '../Input/Input';
import useCategory from '@/hooks/useCategory';

const AddCategory = ({handleModal, updating=false, category}) => {
  const { categories,setCategories } = useCategory()
    const [token] = useSessionStorage<any>(SessionStorageKeys.login.key, "");
  const [CategoryData, setCategoryData] = useState<CategoryData>({
    id:category.id,
    name: category.name,
    description: category.description,
    status: category.status,
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const sendData = {
        name: CategoryData.name,
        description: CategoryData.description,
        status: CategoryData.status,
      };
      if(updating){
        sendData['id'] = category.id
      }

      const { response, error } = await categoryService(token, sendData);
      if (!error) {
        if(updating){
          const updatedArray = categories.map(item => {
            if (item.id === category.id) {
              return response; 
            }
            return item;
          });
          setCategories(updatedArray);
        }else{
          setCategories([...categories, response])
        }
        Swal.fire({
          title: updating ? 'Categoría actualizada' : 'Categoria agregada',
          text: updating?'Categoria actualizada exitosamente':'Categoria creada exitosamente! ',
          icon: updating?'info':'success',
          confirmButtonText: 'Aceptar',
          
        }).then(() => {
          handleModal()
        })
      } 
      setCategoryData({
        id:'',
        name: '',
        description: '',
        status: true,
      });
    } catch (error) {
      console.error('Error al crear la categoría:', error);
      Swal.fire({
        title:'Error al crear la categoría',
        text: 'Error al crear la categoría',
        icon: 'error',
        confirmButtonText: 'Cancelar'
      });
    }
  };
  return (
    <div className='flex justify-center flex-col  w-full  m-auto  bg-white   mt-10'>
    <h3 className='text-2xl text-center mt-10'>{updating ? 'Actualizar categoría' : 'Crear nueva categoría'} </h3>
    <form onSubmit={handleSubmit} className=' m-auto flex justify-center  flex-col  ≈ border-complementario-60 p-5 gap-y-3'>
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
          <input
            type="checkbox"
            name="status"
            className='border'
            checked={CategoryData.status}
            onChange={handleInputChange}
          />
          <span> Habilitada</span>
        </label>
      </div>

      <Button type="submit" className={`m-auto ${updating&&'bg-verde-200'}`}>{updating?'Actualizar Categoría':'Crear Categoría'}</Button>
    </form>
    </div>
  )
}

export default AddCategory
