"use client"

import React, { ReactNode } from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from '@global/styles';

import themes from "@global/theme";
import Header from "./header";

type TemplateProps = {
  header: HeaderProps[];
  children: ReactNode;
};

export default function Template({ header, children }: TemplateProps) {
  return (
    <ThemeProvider theme={themes}>
      <Header data={header} />
      {children}
      <GlobalStyle />
    </ThemeProvider>
  )
};