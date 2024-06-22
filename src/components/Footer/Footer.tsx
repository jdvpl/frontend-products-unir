import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    

<footer className="bg-gradient-to-r from-complementario-20 to-complementario-700  shadow   absolute bottom-0 w-full overflow-x-hidden">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-white sm:text-center ">© 2024 <a href="https://flowbite.com/" className="hover:underline">UNIR</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link href="#" className="hover:underline me-4 md:me-6 text-white">About</Link>
        </li>
        <li>
            <Link href="#" className="hover:underline me-4 md:me-6 text-white">Privacy Policy</Link>
        </li>
        <li>
            <Link href="#" className="hover:underline me-4 md:me-6 text-white">Licensing</Link>
        </li>
        <li>
            <Link href="#" className="hover:underline text-white">Contact</Link>
        </li>
    </ul>
    </div>
</footer>

  )
}

export default Footer
