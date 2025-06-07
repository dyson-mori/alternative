"use client"

import React, { forwardRef, InputHTMLAttributes } from 'react';

import { InputWrapper } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...rest }, ref) => {
    const id = label.toLowerCase().replace(/\s+/g, '-');

    return (
      <InputWrapper>
        <div className='entryarea'>
          <input id={id} ref={ref} required {...rest} />
          <label htmlFor={id} className='labelline'>{label}</label>
        </div>
        {/* {ButtonIcon && (
        <button>
          <ButtonIcon width={21} height={21} strokeWidth={2} />
        </button>
      )} */}
      </InputWrapper>
    )
  }
);

Input.displayName = "Input"