"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import BgUniverse from "../components/BgUniverse";
import CardComponent from "../components/CardComponent";
import Footer from "../components/Footer";

const prefix =
  process.env.NODE_ENV === "production" ? "/simplified-data-structures" : "";

export default function Estruturas() {
  return (
    <BgUniverse>
      <div className="w-full flex flex-col min-h-screen items-center justify-center text-white relative overflow-hidden">
        <div className="relative z-10 w-full flex flex-col items-center">
          <Header />
          <main className="w-full max-w-7xl px-4 md:px-10 min-h-250 flex flex-1 flex-col items-center py-20 md:py-32 pb-50">
            <h1 className="w-full text-3xl md:text-4xl font-semibold mb-10 text-center md:text-left">
              Estruturas de Dados:
            </h1>

            <div className="w-full p-6 md:p-10 rounded-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-stone-950 gap-4">
              <CardComponent
                image={`${prefix}/banner-cards/Fila-Circular.png`}
                title={"Fila Circular / Queue"}
                link={"/fila"}
              />
              <CardComponent
                image={`${prefix}/banner-cards/Fila-Circular.png`}
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
