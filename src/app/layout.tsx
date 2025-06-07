import { Montserrat } from "next/font/google";

import Template from "../template";

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <Template>
          {children}
        </Template>
      </body>
    </html>
  );
};

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-montserrat",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});