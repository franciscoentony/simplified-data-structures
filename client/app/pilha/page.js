"use client";

import { useState } from "react";
import { Pilha } from "../classes/pilha.mjs";
import Header from "../components/Header";
import FilaCheia from "../components/ErrorAlert";
import TituloDesc from "../components/TituloDesc";
import IndiceComponent from "../components/IndiceComponent";
import { Breadcrumbs } from "@heroui/react";
import BgUniverse from "../components/BgUniverse";

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
    <BgUniverse>
      <div className="flex flex-col flex-1 items-center justify-center font-sans text-white relative overflow-hidden px-4">
        <Header />
        
        {mostrarErro && (
          <div className="fixed top-20 z-50 w-full max-w-md px-4">
            <FilaCheia onFechar={() => setMostrarErro(false)} estrutura="Pilha" />
          </div>
        )}

        <main className="flex flex-1 justify-start py-10 md:py-20 px-4 md:px-10 items-center w-full max-w-4xl flex-col">
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

          <div className="w-full h-auto flex flex-col items-center gap-5 mt-10 overflow-x-auto pb-4">
            <div className="flex flex-col-reverse gap-3 min-w-fit">
              {Array.from({ length: MAX_SLOTS }).map((_, i) => {
                const item = itens[i];
                const isTop = i === itens.length - 1 && itens.length > 0;

                return (
                  <div key={`stack-slot-${i}`} className="flex items-center gap-3 md:gap-5">
                    <div className="w-24 md:w-40 text-right font-medium text-xs md:text-base">
                      {isTop && (
                        <span className="text-emerald-400 font-bold animate-pulse">
                          TOPO <span className="hidden md:inline">(TOP)</span> ➔
                        </span>
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
                      <IndiceComponent indice={i} />
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
    </BgUniverse>
  );
}
