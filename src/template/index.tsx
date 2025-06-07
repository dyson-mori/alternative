"use client"

import React, { ReactNode } from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from '@global/styles';

import themes from "@global/theme";

type TemplateProps = {
  children: ReactNode;
};

export default function Template({ children }: TemplateProps) {
  return (
    <ThemeProvider theme={themes}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  )
}