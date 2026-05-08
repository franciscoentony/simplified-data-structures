"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Skeleton } from "@heroui/react";

export default function CardComponent({ image, title, link }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link href={link} className="w-full duration-300 ease-in-out p-2 group">
      <div className="w-full border-2 duration-300 ease-in-out shadow-none hover:shadow-[0_0_0_.3rem_#0841ab7a] hover:border-[#0665e1] border-stone-600 rounded-3xl relative bottom-0 group-hover:bottom-2">
        <div
          className="w-full h-70 rounded-3xl overflow-hidden bg-stone-900
                hover:bg-stone-700 duration-200"
        >
          <div className="w-full h-80/100 overflow-hidden dark bg-black">
            {isLoading && <Skeleton className="h-full z-10" />}
            <Image
              src={image}
              draggable="false"
              alt="Imagem-Estrutura"
              width={500}
              height={500}
              onLoad={() => setIsLoading(false)}
              className={`duration-300 scale-110 ${!isLoading ? "opacity-100" : "opacity-0"}`}
            />
          </div>
          <div className="h-20/100 px-3 flex items-center">
            <p className="text-xl font-semibold select-none">{title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
