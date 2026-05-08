export default function TituloDesc({ titulo, descricao }) {
    return (
        <div className="w-full mb-20 text-start">
          <h1 className="text-4xl font-semibold">{titulo}</h1>
          <p className="text-stone-400 mt-2">{descricao}</p>
        </div>
    )
}