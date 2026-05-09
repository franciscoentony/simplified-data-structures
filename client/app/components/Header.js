"use client"
import { useState } from "react";
import { SearchField } from "@heroui/react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image"

const prefix = process.env.NODE_ENV === 'production' ? '/simplified-data-structures' : '';;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-[.1rem] w-[95%] md:w-60/100 mt-5 bg-linear-to-t from-[#151e2f] to-stone-700 rounded-3xl mx-auto z-50 relative">
      <header className="flex flex-col md:flex-row justify-between items-center bg-[#151e2f] p-4 md:p-5 rounded-3xl dark gap-4">
        <div className="flex w-full md:w-auto justify-between items-center">
          <Link href={'/'} className="">
            <Image src={`${prefix}/logo.png`} alt="" width={50} height={50}/>
          </Link>
          
          <button 
            className="md:hidden text-white text-2xl p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="w-6 h-6" />
          </button>
        </div>

        <nav className={`${isOpen ? "flex" : "hidden"} md:flex w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row gap-2 w-full md:w-auto text-center md:text-left mt-2 md:mt-0">
            <li>
              <Link
                href="/"
                className="block font-medium p-3 duration-300 ease-in-out hover:bg-indigo-900 rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                href="/estruturas"
                className="block font-medium p-3 duration-300 ease-in-out hover:bg-indigo-900 rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                Estruturas
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block font-medium p-3 duration-300 ease-in-out hover:bg-indigo-900 rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <div className={`dark w-full md:w-auto ${isOpen ? "block" : "hidden"} md:block pb-2 md:pb-0`}>
          <SearchField name="search" className="w-full">
            <SearchField.Group className="w-full">
              <SearchField.SearchIcon />
              <SearchField.Input className="w-full md:w-50" placeholder="Buscar..." />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
        </div>
      </header>
    </div>
  );
}
