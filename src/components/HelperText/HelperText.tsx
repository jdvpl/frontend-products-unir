/* eslint-disable no-nested-ternary */
import React from 'react';

interface HelperTextProps {
  text: string;
  error: boolean;
  className?: string;
  readonly?: boolean;
  modal?: boolean;
  showIcon?: boolean;
}

export function HelperText({
  text,
  error,
  className = '',
  readonly = false,
  modal = false,
}: HelperTextProps) {
  return (
    <div className={`flex items-center help pl-2 pt-1 ${className}`}>
      <p
        className={`font-montserratRegular font-light text-[10px] pt-[1px] m-0 leading-[12px] ${
          error
            ? 'text-rojo-20'
            : readonly
              ? 'text-complementario-70'
              : modal
                ? 'text-primario-20'
                : 'text-gris-40'
        } float-left`}
      >
        <span>{text}</span>
      </p>
    </div>
  );
}
