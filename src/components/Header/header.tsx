import React, { useState } from 'react'
import { routes } from '@/routes';
import { MenuItem } from './MenuItems';
import UnirLogo from '../svg/UnirLogo';
import Link from 'next/link';
import MenuButton from './MenuButton';

const Header = () => {
    
    const menuItems = [
        {
            id: 2,
            name: 'Registro',
            href: routes.register,
        },
        {
            id: 3,
            name: 'Login',
            href: routes.login,
        },
        
    ];
    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setTimeout(() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
        }, 300);
    };
    return (
        <header className='w-full border-b-[1px] border-complementario-70  rounded-br-sm overflow-x-hidden'>
            <nav>
                <ul className="flex items-center md:justify-around justify-between">
                    <Link href={routes.home} className='cursor-pointer'>
                        <UnirLogo />
                    </Link>
                    <div className='md:flex justify-end hidden gap-x-4'>
                        {menuItems.map((item, inn) => (
                            <div key={item.id} className="flex justify-start items-center">
                                <MenuItem
                                    key={`${item.id}nav`}
                                    href={item.href}
                                >
                                    {item.name}
                                </MenuItem>
                            </div>
                        ))}
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
                                    {menuItems.map((item, index) => (
                                        <div
                                            key={item.id}
                                            className="w-full flex flex-col justify-start items-start"
                                        >
                                            {index !== 0 && <hr className="border-gris-60 w-full py-3 mt-3" />}
                                            <MenuItem
                                                key={`${item.id}mobile`}
                                                href={item.href}
                                                className=""
                                            >
                                                {item.name}
                                            </MenuItem>
                                        </div>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    )}

                    <button
                        onClick={toggleMobileMenu}
                        data-testid="btntoggleMobileMenu"
                        className={`md:hidden p-2 text-primario-100  transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'transform rotate-[-90deg]' : ''}`}
                    >
                        <MenuButton />
                    </button>

                </ul>
            </nav>
        </header>
    )
}

export default Header
