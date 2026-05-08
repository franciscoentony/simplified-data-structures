"use client";
"use strict";

import { useState } from "react";
import { useRouter } from 'next/navigation'

import { FilaCircular } from "../classes/fila.mjs";

import Header from "../components/Header"
import FilaCheia from "../components/ErrorAlert";
import TituloDesc from "../components/TituloDesc";
import IndiceComponent from "../components/IndiceComponent";
import { Breadcrumbs } from "@heroui/react";
import BgUniverse2 from "../components/BgUniverse2";

// Componente para o índice lateral

const filaLogica = new FilaCircular(6);

export default function PageFila() {
  const MAX_SLOTS = 6;

  const router = useRouter();

  // Estados que o React observa para desenhar a tela
  const [fila, setFila] = useState(new Array(MAX_SLOTS).fill(null));
  const [head, setHead] = useState(0);
  const [tail, setTail] = useState(0);
  const [count, setCount] = useState(0);
  const [contadorGlobal, setContadorGlobal] = useState(1);
  const [mostrarErro, setMostrarErro] = useState(false);

  const adicionar = () => {
    if (count < MAX_SLOTS) {
      const novaFila = [...fila];
      novaFila[tail] = {
        nome: `Pessoa ${contadorGlobal}`,
        id: contadorGlobal,
      };

      setFila(novaFila);
      setTail(filaLogica.proximaPosicao(tail)); // Usa a lógica da classe
      setCount(count + 1);
      setContadorGlobal(contadorGlobal + 1);
      setMostrarErro(false);
    } else {
      console.log("Cheio");
      setMostrarErro(true); // Ativa o estado de erro para o React mostrar o componente
    }
  };

  const remover = () => {
    if (count > 0) {
      const novaFila = [...fila];
      novaFila[head] = null;

      setFila(novaFila);
      setHead(filaLogica.proximaPosicao(head)); // Usa a lógica da classe
      setCount(count - 1);
      setMostrarErro(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center text-white relative overflow-hidden min-h-screen">
      <BgUniverse2 />
      <Header />
      {/* ALERTA CONDICIONAL */}
      {mostrarErro && (
        <FilaCheia onFechar={() => setMostrarErro(false)} estrutura="Fila" />
      )}

      <main className="flex flex-1 justify-start py-10 px-4 md:px-10 items-center w-full max-w-6xl flex-col">
        <div className="w-full">
          <Breadcrumbs className="dark mb-3">
            <Breadcrumbs.Item href="/">
              <span className="text-lg md:text-xl">Início</span>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <span className="text-lg md:text-xl">Fila</span>
            </Breadcrumbs.Item>
          </Breadcrumbs>
          <TituloDesc
            titulo={"Fila Circular"}
            descricao={
              "A fila segue o princípio FIFO (First-In, First-Out): O primeiro elemento a ser adicionado será o primeiro a sair."
            }
          />
        </div>
        <div className="w-full h-auto flex flex-col items-center gap-2 md:gap-4 mt-10 pb-4">
          <div className="flex flex-col gap-1 md:gap-2 w-full">
            {Array.from({ length: MAX_SLOTS }).map((_, i) => {
              const index = (head + i) % MAX_SLOTS;
              const item = fila[index];
              const isFront = index === head && count > 0;
              const isRear =
                index === filaLogica.posicaoRear(tail) && count > 0;

              return (
                <div
                  key={`logical-slot-${index}`}
                  className="flex items-center justify-center w-full relative h-14 md:h-16"
                >
                  {/* Container de Referência do Slot */}
                  <div className="relative w-[85%] max-w-[320px] md:w-60">
                    
                    {/* Labels (Primeiro/Último) - Sobreposto no Mobile, Lado a Lado no Desktop */}
                    <div className="absolute -left-2 md:-left-2 top-1/2 -translate-y-1/2 md:-translate-x-full md:pr-2 text-left md:text-right font-bold text-[11px] md:text-lg leading-tight z-30 drop-shadow-lg whitespace-nowrap">
                      {isFront && (
                        <span className="text-emerald-400 bg-black/60 px-2 py-0.5 rounded-md border border-white/10 md:border-none">
                          <span className="hidden sm:inline">Primeiro Elemento</span>
                          <span className="sm:hidden">1º Elem.</span>
                        </span>
                      )}
                      {isRear && !isFront && (
                        <span className="text-purple-300 bg-black/60 px-2 py-0.5 rounded-md border border-white/10 md:border-none">
                          <span className="hidden sm:inline">Último Elemento</span>
                          <span className="sm:hidden">Últ. Elem.</span>
                        </span>
                      )}
                    </div>

                    <div
                      className={`p-[0.05rem] rounded-2xl transition-all duration-300 w-full flex-shrink-0 ${item ? "bg-linear-to-t from-stone-900 to-stone-300 shadow-lg" : "bg-stone-700/20"}`}
                    >
                      <div
                        className={`rounded-2xl w-full flex justify-center items-center h-12 md:h-14 p-2 font-semibold text-base md:text-lg ${item ? "bg-stone-900 text-white" : "bg-stone-900/40 text-stone-700 italic text-[12px] md:text-sm"}`}
                      >
                        {item ? item.nome : "Vazio"}
                      </div>
                    </div>

                    {/* Índice - Sobreposto no Mobile (Mais à direita), Lado a Lado no Desktop */}
                    <div className="absolute -right-4 md:-right-2 top-1/2 -translate-y-1/2 md:translate-x-full md:pl-2 scale-75 md:scale-100 z-30">
                      <IndiceComponent indice={index} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto">
          <button
            className="px-6 py-3 cursor-pointer bg-stone-800 border border-stone-600 rounded-xl hover:bg-stone-700 transition-all active:scale-95 font-semibold"
            onClick={adicionar}
          >
            Adicionar Item
          </button>
          <button
            className="px-6 py-3 cursor-pointer bg-stone-800 border border-stone-600 rounded-xl hover:bg-stone-700 transition-all active:scale-95 font-semibold"
            onClick={remover}
          >
            Remover Item
          </button>
        </div>
      </main>
    </div>
  );
}
