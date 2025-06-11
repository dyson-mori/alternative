import { Montserrat } from "next/font/google";

// import { api } from "@services/api";

import Template from "../template";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-montserrat",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const dynamic = 'force-dynamic';

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // const header = await api.header.list();

  const header = [
    {
      "title": "Perfil",
      "param": "/profile",
      "enable": true
    }
  ];

  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <Template header={header}>
          {children}
        </Template>
      </body>
    </html>
  );
};
