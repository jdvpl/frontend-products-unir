
import useCategory from '@/hooks/useCategory';
import React from 'react';
import { FaLaptop, FaBars } from 'react-icons/fa';

const Aside = ({ setcurrentCategory,isOpen,setIsOpen }) => {
  const {filteredCategories}=useCategory();
  return (
    <>
      <div className={`fixed top-0 left-0 h-full ${isOpen ? 'w-64' : 'w-16'} bg-white border-r border-complementario-60 transition-width duration-300`}>
        <div className="flex items-center justify-center h-[49px] border-b border-complementario-60">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <FaBars />
          </button>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <div key={0}>
              <button onClick={() => setcurrentCategory(0)} className={`relative flex flex-row gap-x-3 items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 ${isOpen ? 'border-l-4 ' : 'm-auto'}  border-transparent hover:border-indigo-500 pr-6`}>
                <FaLaptop key="beer" />
                {
                  isOpen &&
                  <span className="ml-2 text-sm tracking-wide truncate">Todos</span>
                }
              </button>
            </div>
            {isOpen ? (
              filteredCategories.map((category: any) => (
                <div key={category._id}>
                  <button onClick={() => setcurrentCategory(category.id)} className="relative flex flex-row gap-x-3 items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                    <FaLaptop key="beer" />
                    <span className="ml-2 text-sm tracking-wide truncate">{category.name}</span>
                  </button>
                </div>
              ))
            ) : (
              filteredCategories.map((category: any) => (
                <div key={category._id}>
                  <button onClick={() => setcurrentCategory(category.id)} className="relative flex flex-row m-auto items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800  border-transparent hover:border-indigo-500 pr-6">
                    <FaLaptop key="beer" />
                  </button>
                </div>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Aside;
