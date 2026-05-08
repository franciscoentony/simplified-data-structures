import { useState, useEffect } from 'react'
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IndiceComponent({ ...props }) {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
    }, 500)

  }, [])

  return (
    <div className={`w-auto px-3 py-1.5 rounded-xl flex items-center select-none bg-stone-500/30 duration-300 ${isLoading ? "opacity-100" : "opacity-0" }`} >
      <FontAwesomeIcon icon={faCaretLeft} className="text-base md:text-lg mr-1"/>
      <p className="text-sm md:text-lg whitespace-nowrap font-bold">Índice {props.indice}</p>
    </div>
  );
}