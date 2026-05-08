import { useEffect, useState } from 'react'

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ErrorAlert({ onFechar, ...props }) {
    const [visivel, setVisivel] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisivel(false)
        }, 4000)

        return () => clearTimeout(timer)
    }, [])

  return (
    <div>
        {visivel &&
    
            <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50 bg-purple-700 text-white font-normal px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-4">
            <span>A {props.estrutura} está cheia. Remova um item para adicionar.</span>
            <button
                onClick={onFechar}
                className="bg-black/20 hover:bg-black/40 w-10 h-10 p-2 rounded-full cursor-pointer"
            >
                <FontAwesomeIcon icon={faXmark}/>
            </button>
            </div>
        }
    </div>
  );
}
