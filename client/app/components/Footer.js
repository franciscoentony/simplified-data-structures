import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-stone-950 w-full h-30 p-5 flex items-center justify-center gap-5">
      <p className="text-md">Feito com ❤️ por <strong>Francisco Entony</strong></p>
      <div className="flex gap-2">
        <Link href={''} className="hover:text-purple-500 duration-200 ease-in- hover:scale-110">
            <FontAwesomeIcon icon={faGithub} size="xl"/>
        </Link>
        <Link href={''} className="hover:text-yellow-500 duration-200 ease-in- hover:scale-110">
            <FontAwesomeIcon icon={faInstagram} size="xl"/>
        </Link>
        <Link href={''} className="hover:text-indigo-400 duration-200 ease-in- hover:scale-110">
            <FontAwesomeIcon icon={faLinkedinIn} size="xl"/>
        </Link>
      </div>
    </footer>
  )
}