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
      <div className="w-full flex flex-col min-h-screen items-center justify-center font-sans text-white relative overflow-hidden">
        <div className="relative z-10 w-full flex flex-col items-center">
          <Header />
          <main className="w-63/100 min-h-230 flex flex-1 flex-col items-center py-32 pb-50 sm:items-center">
            <h1 className="w-full text-4xl font-semibold mb-10">Estruturas de Dados:</h1>

            <div className="w-full p-5 rounded-4xl grid grid-cols-4 bg-stone-950">
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
