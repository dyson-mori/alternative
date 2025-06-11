"use client"

import React, { ButtonHTMLAttributes, forwardRef } from 'react';

import { Container, Loading } from './styles';

export type Variant = 'primary' | 'error' | 'squad';

type ButtonProps = {
  $variant?: Variant;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const loading_css = (
  <Loading>
    <div className="lds-dual-ring"></div>
  </Loading>
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ $variant = 'primary', loading, children, ...rest }, ref) => (
    <Container
      ref={ref}
      data-variant={$variant}
      $variant={$variant}
      disabled={loading ?? rest.disabled}
      {...rest}
    >
      {loading ? loading_css : children}
    </Container>
  )
);

Button.displayName = 'Button';
