import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Redes() {
  return (
    <div className="flex gap-2">
      <Link
        href={"https://github.com/franciscoentony"}
        target="blank"
        className="hover:text-purple-500 duration-200 ease-in- hover:scale-110"
      >
        <FontAwesomeIcon icon={faGithub} size="2xl" />
      </Link>
      <Link
        href={"https://instagram.com/franciscoentony"}
        className="hover:text-yellow-500 duration-200 ease-in- hover:scale-110"
      >
        <FontAwesomeIcon icon={faInstagram} size="2xl" />
      </Link>
      <Link
        href={"https://linkedin.com/in/franciscoentony/"}
        className="hover:text-indigo-400 duration-200 ease-in- hover:scale-110"
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="2xl" />
      </Link>
    </div>
  );
}
