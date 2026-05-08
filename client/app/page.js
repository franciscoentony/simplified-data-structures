"use client"
import { useState } from 'react'
import Link from "next/link";
import { Avatar, Label, SearchField, Link as LinkHero } from "@heroui/react";
import Header from "./components/Header";
import GlowButton from "./components/GlowButton";
import GitHubButton from "./components/GitHubButton";
import BgUniverse from "./components/BgUniverse";
import CardComponent from "./components/CardComponent";
import Image from "next/image";
import { Skeleton } from "@heroui/react";
import Footer from "./components/Footer";

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

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <BgUniverse>
      <div className="w-full flex flex-col min-h-screen items-center justify-center font-sans text-white relative overflow-hidden">
        <div className="relative z-10 w-full flex flex-col items-center">
          <Header />
          <main className="flex flex-1 w-full flex-col items-center justify-center py-10 md:py-32 px-4 md:px-0 sm:items-center">
            <section className="w-full min-h-80 md:min-h-100 text-center items-center flex flex-col pt-10">
              <div className="px-4">
                <h1 className="font-bold text-3xl md:text-4xl">
                  O que acha de aprender Estrutura de Dados
                </h1>
                <h2 className="font-medium text-xl md:text-2xl text-stone-400 mt-2">
                  de uma maneira muito mais clara?
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row mt-10 gap-5 md:gap-10">
                <GlowButton>Ver Estruturas</GlowButton>
                <GitHubButton>GitHub</GitHubButton>
              </div>
            </section>

            <section className="w-full flex items-center justify-center mb-20 px-4">
              <div className="w-full max-w-5xl flex flex-col lg:flex-row bg-stone-950 p-6 md:p-10 rounded-4xl shadow-2xl gap-10">
                <div className="w-full lg:w-100 h-80 md:h-120 overflow-hidden rounded-3xl dark flex-shrink-0">
                  {isLoading && <Skeleton className={"h-full z-10"} />}
                  <Image
                    src={"/art-data-structure.png"}
                    alt="Imagem"
                    width={500}
                    height={500} draggable="false"
                    className={`w-full h-full object-cover scale-110 duration-300 ${!isLoading ? "opacity-100" : "opacity-0"}`}
                    onLoad={() => setIsLoading(false)}
                  />
                </div>
                <div className="w-full lg:w-auto flex-1">
                  <h3 className="font-bold text-2xl md:text-3xl pb-6 text-center lg:text-left">O que são Estruturas de Dados?</h3>
                  <p className="font-medium text-stone-400 text-base md:text-lg pb-5 text-justify lg:text-left">Estruturas de dados são formas especializadas de armazenar, organizar e manipular dados no computador para uso eficiente. Elas funcionam como &quot;contêineres&quot; que facilitam o acesso, a modificação e a gestão de informações, otimizando o desempenho de algoritmos. A escolha da estrutura ideal depende do problema, influenciando diretamente a velocidade e o uso de memória do sistema.</p>
                  <p className="font-medium text-stone-400 text-base md:text-lg text-justify lg:text-left">As mais fundamentais incluem <strong>arrays, listas ligadas, pilhas, filas, tabelas hash, árvores e grafos</strong> , divididas entre <strong>lineares</strong> e <strong>não-lineares</strong>. </p>
                </div>
              </div>
            </section>

            <section className="w-full flex-1 max-w-5xl px-4 pb-20">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold mb-10 text-center md:text-left">
                  Selecione a Estrutura de Dados:
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10">
                  <CardComponent image={'/banner-cards/Fila-Circular.png'} title={"Fila Circular / Queue"} link={'/fila'} />
                  <CardComponent image={'/banner-cards/Pilha.png'} title={"Pilha / Stack"} link={'/pilha'} />
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </BgUniverse>
  );
}
