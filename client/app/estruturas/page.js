"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import BgUniverse from "../components/BgUniverse";
import CardComponent from "../components/CardComponent";
import Image from "next/image";
import { Skeleton } from "@heroui/react";
import Footer from "../components/Footer";
import CardPrice from "../components/CardPrice";
import Redes from "../components/RedesComponent";

export function ButtonLink({ children, ...rest }) {
  return (
    <Link
      className="bg-indigo-900/50 backdrop-blur-sm p-3 rounded-xl text-xl min-w-30 text-center shadow-none duration-200 focus:shadow-[0_0_0_.3rem_#00b3ffae] hover:bg-indigo-800 relative z-10"
      {...rest}
    >
      {children}
    </Link>
  );
}

export default function Estruturas() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BgUniverse>
      <div className="w-full flex flex-col min-h-screen items-center justify-center text-white relative overflow-hidden">
        <div className="relative z-10 w-full flex flex-col items-center">
          <Header />
          <main className="w-full max-w-5xl px-4 md:px-10 min-h-230 flex flex-1 flex-col items-center py-20 md:py-32 pb-50">
            <h1 className="w-full text-3xl md:text-4xl font-semibold mb-10 text-center md:text-left">Estruturas de Dados:</h1>

            <div className="w-full p-6 md:p-10 rounded-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-stone-950 gap-6 md:gap-10">
              <CardComponent
                image={"/banner-cards/Fila-Circular.png"}
                title={"Fila Circular / Queue"}
                link={"/fila"}
              />
              <CardComponent
                image={"/banner-cards/Pilha.png"}
                title={"Pilha / Stack"}
                link={"/pilha"}
              />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </BgUniverse>
  );
}
