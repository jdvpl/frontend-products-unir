import React from 'react'

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactChild;
  isLoading?: boolean;
  disabled?: boolean;
  transition?: string;
  primary?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
  isLanding?: string;
  border?: string;
  title?: string;
  textClasess?: string;
}
const Button = ({
  children,
  variant = 'primary',
  disabled: buttonDisabled,
  transition,
  className,
  isLoading,
  isLanding,
  title,
  border = '0',
  textClasess='',
  ...rest
}: ButtonProps) => {
  const disabled = isLoading || buttonDisabled;

  return (
    <button
    type="button"
    disabled={disabled}
    className={`
    rounded  transition-all duration-500  hover:shadow-media-300   
    ${
      isLanding ||
      'w-[288px] sm:w-full sm:px-4 md:w-[343px] lg:w-[375px] lg:max-w-[375px] '
    }
      ${
        variant === 'primary'
          ? 'py-[8px] text-white bg-primario-100  hover:bg-primario-400  focus:text-secundario-200 focus:shadow-none disabled:text-complementario-40 disabled:bg-gris-80 disabled:shadow-none'
          : ''
      }  
    ${
      variant === 'secondary'
        ? `valid:text-primario-100  py-[8px]  hover:shadow-none border-primario-100  hover:border-primario-100  border-[${border}px] focus:text-primario-100 focus:shadow-none disabled:text-azul_gris-70 disabled:bg-gris-80 disabled:border-0`
        : ''
    }
    ${className || ''}
    ${transition || ''}`}
    {...rest}
    aria-label={children.toString()}
    title={title || children.toString()}
  >

      {children}
  </button>
  )
}

export default Button
