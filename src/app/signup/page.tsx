import type { Metadata } from "next";

import RegisterScreen from "./screen";

export const metadata: Metadata = {
  title: 'Registro | Teste Técnico Pleno II',
  description: 'Teste Técnico – Fullstack Developer Pleno (Next.js 15 + Ruby on Rails 7.2)'
};

export default function Register() {
  return <RegisterScreen />;
};
