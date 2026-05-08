"use client";

import { useState } from "react";
import { Pilha } from "../classes/pilha.mjs";
import Header from "../components/Header";
import FilaCheia from "../components/ErrorAlert";
import TituloDesc from "../components/TituloDesc";
import IndiceComponent from "../components/IndiceComponent";
import { Breadcrumbs } from "@heroui/react";
import BgUniverse2 from "../components/BgUniverse2";

const pilhaInstancia = new Pilha(6);

export default function PagePilha() {
  const MAX_SLOTS = 6;
  const [itens, setItens] = useState([]);
  const [count, setCount] = useState(0);
  const [mostrarErro, setMostrarErro] = useState(false);

  const adicionar = () => {
    if (itens.length < MAX_SLOTS) {
      const novoItem = {
        nome: `Item ${count + 1}`,
      };
      pilhaInstancia.push(novoItem);
      setItens(pilhaInstancia.getDados());
      setCount((prev) => prev + 1);
      setMostrarErro(false);
    } else {
      setMostrarErro(true);
    }
  };

  const remover = () => {
    if (itens.length > 0) {
      pilhaInstancia.pop();
      setItens(pilhaInstancia.getDados());
      setMostrarErro(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center text-white relative overflow-hidden min-h-screen px-4">
      <BgUniverse2 />
      <Header />
        
        {mostrarErro && (
          <div className="fixed top-20 z-50 w-full max-w-md px-4">
            <FilaCheia onFechar={() => setMostrarErro(false)} estrutura="Pilha" />
          </div>
        )}

        <main className="flex flex-1 justify-start py-10 md:py-20 px-4 md:px-10 items-center w-full max-w-6xl flex-col">
          <div className="w-full">
            <Breadcrumbs className="dark mb-3">
              <Breadcrumbs.Item href="/">
                <span className="text-lg md:text-xl">Início</span>
              </Breadcrumbs.Item>
              <Breadcrumbs.Item>
                <span className="text-lg md:text-xl">Pilha</span>
              </Breadcrumbs.Item>
            </Breadcrumbs>
            <TituloDesc
              titulo={"Pilha (Stack)"}
              descricao={
                "A pilha segue o princípio LIFO (Last-In, First-Out): O último elemento a entrar é o primeiro a sair."
              }
            />
          </div>

          <div className="w-full h-auto flex flex-col items-center gap-2 md:gap-4 mt-10 pb-4">
            <div className="flex flex-col-reverse gap-1 md:gap-2 w-full">
              {Array.from({ length: MAX_SLOTS }).map((_, i) => {
                const item = itens[i];
                const isTop = i === itens.length - 1 && itens.length > 0;

                return (
                  <div
                    key={`stack-slot-${i}`}
                    className="flex items-center justify-center w-full relative h-14 md:h-16"
                  >
                    {/* Container de Referência do Slot */}
                    <div className="relative w-[85%] max-w-[320px] md:w-60">
                      
                      {/* Labels (TOPO) - Sobreposto no Mobile, Lado a Lado no Desktop */}
                      <div className="absolute -left-2 md:-left-2 top-1/2 -translate-y-1/2 md:-translate-x-full md:pr-2 text-left md:text-right font-bold text-[11px] md:text-lg leading-tight z-30 drop-shadow-md whitespace-nowrap">
                        {isTop && (
                          <span className="text-emerald-400 font-bold animate-pulse bg-black/60 px-2 py-0.5 rounded-md border border-white/10 md:border-none">
                            TOPO <span className="hidden sm:inline">(TOP)</span> ➔
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
                        <IndiceComponent indice={i} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 mt-10 relative z-10 w-full sm:w-auto">
            <button
              className="px-6 py-3 cursor-pointer bg-stone-800 border border-stone-600 rounded-xl hover:bg-stone-700 transition-all active:scale-95 font-semibold"
              onClick={adicionar}
            >
              Push (Adicionar)
            </button>
            <button
              className="px-6 py-3 cursor-pointer bg-stone-800 border border-stone-600 rounded-xl hover:bg-stone-700 transition-all active:scale-95 font-semibold"
              onClick={remover}
            >
              Pop (Remover)
            </button>
          </div>
        </main>
      </div>
  );
}
