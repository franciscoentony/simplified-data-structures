import Image from 'next/image'
import Link from 'next/link'

export default function CardComponent({image, title, link}) {
    return (
        <Link href={link} className="border-2 duration-300 ease-in-out shadow-none hover:shadow-[0_0_0_.3rem_#0841ab7a] hover:border-[#0665e1] border-stone-600 rounded-3xl relative bottom-0 hover:bottom-2">
            <div className="w-70 h-70 rounded-3xl overflow-hidden bg-stone-900
            hover:bg-stone-700 duration-200">
                <div className="w-full h-80/100 overflow-hidden">
                    <Image src={'/banner-cards/Fila-Circular.png'} alt="Imagem-Estrutura" width={500} height={500}/>
                </div>
                <div className="h-20/100 px-3 flex items-center">
                    <p className="text-xl font-semibold">{title}</p>
                </div>
            </div>
        </Link>
    )
}