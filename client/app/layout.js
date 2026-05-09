import { Providers } from './providers'
import { Outfit } from "next/font/google";
import StyledComponentsRegistry from './registry'
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});


export const metadata = {
  title: {
    default: "Estruturas de Dados Simplificadas", 
    template: "%s | Estruturas de Dados Simplificadas",
  },
  icons: {
    icon: "/favicon-structure.png",
  }
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-br"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className={`${outfit.className} min-h-full flex flex-col dark bg-stone-950`}>
        <StyledComponentsRegistry>
          <Providers>
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

