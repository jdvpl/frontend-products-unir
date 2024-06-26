import React from 'react'

interface TextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  description?: string|JSX.Element;
}
export function TextArea({ description, ...props }: TextAreaProps) {
  return <>
      <textarea
        {...props}
        className=" font-montserratRegular w-[100%] font-normal border r-none rounded-lg border-complementario-60 mt-[22px] p-3 h-[199px] max-h-[77px]"
        />
      <p className="text-xs font-normal leading-4 !text-complementario-40 text-left w-full">
        {description}
      </p>
    </>
}
