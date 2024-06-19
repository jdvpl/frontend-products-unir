import React,{ FC, ReactNode } from "react"
import Link from "next/link"

interface MenuLinkProps {
  children: ReactNode
  href: string
  className?: string;
}

export const MenuItem: FC<MenuLinkProps> = ({ children, href, className }) => {
  return(
    <li className="lgsm:px-[18px] lg:px-6 xxl:px-6">
      <Link href={ href} passHref className={`flex items-center justify-center h-[48px] cursor-pointer text-primario-900 font-medium hover:text-primario-100 ${className} whitespace-nowrap`}>
          <p >
            {children}
          </p>
      </Link>

  </li>
  )
}
    
  
