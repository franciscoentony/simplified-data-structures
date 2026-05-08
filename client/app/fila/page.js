"use client";
"use strict";

import { useState } from "react";
import { useRouter } from 'next/navigation'

import { FilaCircular } from "../classes/fila.mjs";

import Header from "../components/Header"
import FilaCheia from "../components/ErrorAlert";
import TituloDesc from "../components/TituloDesc";
import IndiceComponent from "../components/IndiceComponent";

import BgUniverse2 from "../components/BgUniverse2";

import { Breadcrumbs } from "@heroui/react";

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
    <div className="flex flex-col flex-1 items-center justify-center text-white relative overflow-hidden">
      <BgUniverse2 />
      <Header />
      {/* ALERTA CONDICIONAL */}
      {mostrarErro && (
        <FilaCheia onFechar={() => setMostrarErro(false)} estrutura="Fila" />
      )}

      <main className="flex flex-1 justify-start py-10 px-4 md:px-10 items-center w-full max-w-4xl flex-col">
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
        <div className="w-full h-auto flex flex-col items-center gap-5 mt-10 overflow-x-auto pb-4">
          <div className="flex flex-col gap-3 min-w-fit">
            {Array.from({ length: MAX_SLOTS }).map((_, i) => {
              const index = (head + i) % MAX_SLOTS;
              const item = fila[index];
              const isFront = index === head && count > 0;
              const isRear =
                index === filaLogica.posicaoRear(tail) && count > 0;

              return (
                <div
                  key={`logical-slot-${index}`}
                  className="flex items-center gap-3 md:gap-5"
                >
                  <div className="w-24 md:w-40 text-right font-medium text-xs md:text-base">
                    {isFront && (
                      <span className="text-emerald-400">
                        Primeiro Elemento
                      </span>
                    )}
                    {isRear && !isFront && (
                      <span className="text-purple-300">Último Elemento</span>
                    )}
                  </div>

                  <div
                    className={`p-[0.05rem] rounded-2xl transition-all duration-300 w-40 md:w-60 ${item ? "bg-linear-to-t from-stone-900 to-stone-300 shadow-lg" : "bg-stone-700/20"}`}
                  >
                    <div
                      className={`rounded-2xl w-full flex justify-center items-center h-12 md:h-15 p-2 font-semibold ${item ? "bg-stone-900 text-white" : "bg-stone-900/40 text-stone-700 italic text-sm"}`}
                    >
                      {item ? item.nome : "Vazio"}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="w-16 md:w-20 text-[10px] md:text-xs font-bold">
                      {isFront && (
                        <span className="text-cyan-400 font-bold animate-pulse">FRONT ➔</span>
                      )}
                      {isRear && (
                        <span className="text-purple-400 font-bold animate-pulse">REAR ➔</span>
                      )}
                    </div>
                    <IndiceComponent indice={index} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 mt-10 w-full sm:w-auto">
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
