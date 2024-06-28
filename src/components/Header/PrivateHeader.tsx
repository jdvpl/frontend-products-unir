'use client'
import React, { useState } from 'react'
import { routes } from '@/routes';
import { MenuItem } from './MenuItems';
import UnirLogo from '../svg/UnirLogo';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { clearSessionStorages, decodeJwt } from '@/utils';
import MenuButton from './MenuButton';
import { SessionStorageKeys } from '@/session';
import { useSessionStorage } from '@/hooks/useSessionStorage';

const PrivateHeader = () => {
    const router = useRouter()
    const getOut = () => {
        clearSessionStorages();
        router.push(routes.home)
    }
    const menuItemsCLient = [
        {
            id: 2,
            name: 'Productos',
            href: routes.products,
        },
    ];


    const menuItemsAdmin = [
        {
            id: 4,
            name: 'Categorias',
            href: routes.categories,
        },
        {
            id: 5,
            name: 'Crear producto',
            href: routes.createProduct,
        }
        
    ]
    const menuAdmin = [...menuItemsCLient, ...menuItemsAdmin]
    const [token] = useSessionStorage<any>(SessionStorageKeys.login.key, "");
    const  data = decodeJwt(token);

    const role=data?.role;
    const menuItems=role==='ROLE_ADMINISTRATOR'?menuAdmin:menuItemsCLient;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setTimeout(() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
        }, 300);
    };

    return (
        <header className='w-full border-b-[1px] border-complementario-70  rounded-br-sm overflow-x-hidden'>
            <nav>
                <ul className="flex items-center md:justify-evenly justify-between">
                    <Link href={routes.products} className='cursor-pointer'>
                        <UnirLogo />
                    </Link>
                    <div className='flex'>
                        <div className="md:flex justify-end hidden gap-x-2">
                            <p className='flex items-center'>Hola <span className='text-primario-100 font-semibold ml-2'>{data?.name} {data?.lastName}</span></p>
                            {menuItems.map((item, inn) => (
                                <MenuItem
                                    key={`${item.id}nav`}
                                    href={item.href}
                                >
                                    {item.name}
                                </MenuItem>
                            ))}
                            <button onClick={getOut} className='hover:text-primario-100 font-medium '>
                                Salir
                            </button>
                        </div>

                        {isMobileMenuOpen && (
                            <div className="flex transition-all duration-300 ease-in-out">
                                <div className="lgsm:hidden fixed top-0 left-0 h-screen w-1/2 bg-gris-20/90 z-50 transform transition-transform duration-300 ease-in-out" />
                                <nav className="lgsm:hidden fixed top-0 right-0 h-screen md:w-[60%] w-[90%] bg-white z-50 transform transition-transform duration-300 ease-in-out">
                                    <nav className="flex justify-end mt-4 mx-5">
                                        <button
                                            onClick={toggleMobileMenu}
                                            className="lgsm:hidden  text-white rounded-full p-2 bg-rojo-50"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-8 w-8"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>

                                        </button>
                                    </nav>
                                    <ul className="flex flex-col items-start mx-5 mt-2 h-full">
                                        <p className='flex items-center'>Hola <span className='text-primario-100 font-semibold ml-2'>{data?.name} {data?.lastName}</span></p>
                                        <hr className="border-gris-60 w-full py-2 mt-3" />
                                        {menuItems.map((item, index) => (
                                            <div
                                                key={item.id}
                                                className="w-full flex flex-col justify-start items-start"
                                            >
                                                <MenuItem
                                                    key={`${item.id}mobile`}
                                                    href={item.href}
                                                    className=""
                                                >
                                                    {item.name}
                                                </MenuItem>
                                                <hr className="border-gris-60 w-full py-3 mt-1" />
                                            </div>
                                        ))}
                                        <button onClick={getOut} className='hover:text-primario-100 font-medium '>
                                            Salir
                                        </button>
                                        <hr className="border-gris-60 w-full py-3 mt-3" />

                                    </ul>
                                </nav>
                            </div>
                        )}

                        <button
                            onClick={toggleMobileMenu}
                            data-testid="btntoggleMobileMenu"
                            className={`md:hidden p-2 text-primario-100 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'transform rotate-[-90deg]' : ''}`}
                        >
                            <MenuButton />
                        </button>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default PrivateHeader
