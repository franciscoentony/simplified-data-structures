import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IndiceComponent({ ...props }) {
  return (
    <div className="w-30 p-2 rounded-xl flex items-center bg-stone-500/30">
      <FontAwesomeIcon icon={faCaretLeft} />
      <p>Índice {props.indice}</p>
    </div>
  );
}