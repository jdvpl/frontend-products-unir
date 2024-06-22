import React from 'react'
import ImageLoader from '../ImageLoader'
import { routes } from '@/routes';
import { MenuItem } from './MenuItems';
import UnirLogo from '../svg/UnirLogo';
import Link from 'next/link';

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
    return (
        <header className='w-full border-b-[1px] border-complementario-70  rounded-br-sm overflow-x-hidden'>
            <nav>
                <ul className="flex items-center justify-evenly">
                    <Link href={routes.home} className='cursor-pointer'>
                        <UnirLogo />
                    </Link>
                    <div className='flex'>
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

                </ul>
            </nav>
        </header>
    )
}

export default Header
