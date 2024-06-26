import React from 'react';
import { HelperText } from '../HelperText/HelperText';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  labelColor?: string;
  helperText?: string | any;
  label?: string;
  classNameInput?: string;
  containerClassName?: string;
  error?: true | false;
  autofocus?: true | false;
  dataTestId?: string;
  helperTextOption?: boolean;
  onFocus?: () => void;
  disabled?: any;
  onChange?: any;
}

function Input({
  label,
  classNameInput,
  containerClassName,
  error = false,
  helperText,
  dataTestId,
  helperTextOption = false,
  ...props
}: InputProps) {
  const labelStyles = `z-[-10] text-complementario-100 left-3
  absolute top-[50%] translate-y-[-50%] text-[14px] leading-[16px] font-montserratRegular transition-all duration-300 ease-in-out 
  ${props?.value ? 'peer-valid:left-2 peer-valid:top-0 peer-valid:text-[10px] peer-valid:leading-[12px] peer-valid:bg-white peer-valid:px-1 peer-valid:z-10' : ''}
  ${props?.readOnly && props?.value ? 'left-[6px] !top-[-1px] !text-[11px] leading-[12px] px-1 z-[90]' : ''}
  ${props?.readOnly ? 'left-2 text-[14px] !text-complementario-70 leading-[12px] bg-white px-1 z-[120]' : 'peer-focus:left-2 peer-focus:top-0 peer-focus:text-[10px] peer-focus:leading-[12px] peer-focus:bg-white peer-focus:px-1 peer-focus:z-10'}`;

  const inputStyles = `pl-3 pr-3 peer appearance-none font-montserratRegular text-[14px] leading-[16px] 
  h-[48px] bg-transparent border-[1px] rounded-[8px] bg-[transparent] w-full
  ${props?.readOnly ? '!border-complementario-70 bg-white text-complementario-70' : ''}
  ${error ? 'border-rojo-20 hover:border-rojo-20 focus:border-rojo-20 ' : `${props?.readOnly && props?.value ? 'border-complementario-70 bg-white !cursor-pointer' : 'border-complementario-50 valid:text-primario-900 hover:border-primario-20 focus:border-primario-20 '}  `}
  peer-focus:border focus:outline-none`;

  return (
    <div className={`${containerClassName} justify-center flex flex-col w-full relative`}>
      <div className="relative z-0 w-full">
        <input
          type="text"
          id="floating_text"
          data-testid={dataTestId}
          {...props}
          disabled={false}
          onChange={props.disabled ? null : props.onChange}
          className={`${inputStyles} ${classNameInput} cursor-text`}
          placeholder=""
          aria-label={label}
          onWheelCapture={(e) => {
            const target = e.target as HTMLInputElement;
            if (target.hasAttribute('type') && target.getAttribute('type') === 'number') {
              target.blur();
            }
          }}
        />
        <label htmlFor="floating_text" className={`${labelStyles}`}>
          {label}
        </label>
      </div>
      {helperText && error && <HelperText error={error} text={helperText} readonly={props.readOnly} />}
      {helperText && helperTextOption && !error && (
        <HelperText error={false} text={helperText} readonly={props.readOnly} />
      )}
    </div>
  );
}

export default Input;
