import Link from "next/link";
import { Avatar, Label, SearchField, Link as LinkHero } from "@heroui/react";
import Header from "./components/Header";
import GlowButton from "./components/GlowButton";
import GitHubButton from "./components/GitHubButton";
import BgUniverse from "./components/BgUniverse";
import CardComponent from "./components/CardComponent";
import Image from "next/image";

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
  return (
    <BgUniverse>
      <div className="w-full flex flex-col min-h-screen items-center justify-center font-sans text-white relative overflow-hidden">
        <div className="relative z-10 w-full flex flex-col items-center">
          <Header />
          <main className="flex flex-1 w-full flex-col items-center justify-center py-32 sm:items-center">
            <section className="w-full min-h-100 text-center items-center flex flex-col pt-10">
              <div>
                <h1 className="font-bold text-4xl">
                  O que acha de aprender Estrutura de Dados
                </h1>
                <h2 className="font-medium text-2xl text-stone-400">
                  de uma maneira muito mais clara?
                </h2>
              </div>
              <div className="flex mt-10 gap-10">
                <GlowButton>Ver Estruturas</GlowButton>
                <GitHubButton>GitHub</GitHubButton>
              </div>
            </section>

            <section className="w-full flex items-center justify-center mb-20">
              <div className="w-250 flex bg-stone-950 p-10 rounded-4xl shadow-2xl">
                <div className="w-100 h-120 overflow-hidden rounded-3xl">
                  <Image
                    src={"/art-data-structure.png"}
                    alt="Imagem"
                    width={500}
                    height={500}
                    className="scale-110"
                  />
                </div>
                <div className="w-55/100 px-5">
                  <h3 className="font-bold text-3xl pb-6">O que são Estruturas de Dados?</h3>
                  <p className="font-medium text-stone-400 text-lg pb-5">Estruturas de dados são formas especializadas de armazenar, organizar e manipular dados no computador para uso eficiente. Elas funcionam como &quot;contêineres&quot; que facilitam o acesso, a modificação e a gestão de informações, otimizando o desempenho de algoritmos. A escolha da estrutura ideal depende do problema, influenciando diretamente a velocidade e o uso de memória do sistema.</p>
                  <p className="font-medium text-stone-400 text-lg">As mais fundamentais incluem <strong>arrays, listas ligadas, pilhas, filas, tabelas hash, árvores e grafos</strong> , divididas entre <strong>lineares</strong> e <strong>não-lineares</strong>. </p>
                </div>
              </div>
            </section>

            <section className="w-full flex-1 max-w-5xl">
              <div>
                <h1 className="text-3xl font-semibold mb-10">
                  Selecione a Estrutura de Dados:
                </h1>
                <div className="w-full flex gap-5">
                  <CardComponent title={"Fila Circular / Queue"} link={'/fila'}/>
                  <CardComponent title={"Pilha / Stack"} link={'/pilha'}/>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </BgUniverse>
  );
}
