import Image from "next/image";

interface EstatisticaProps {
  texto: string;
  valor: number;
  imagem: string;
}

export default function Estatistica({
  texto,
  valor,
  imagem,
}: EstatisticaProps) {
  return (
    <div className="flex items-center gap-5 rounded-lg bg-zinc-900 px-6 py-2.5">
      <div className="flex flex-1 flex-col">
        <span className="font-light text-zinc-400">{texto}</span>
        <span className="text-xl font-black">{valor}</span>
      </div>
      <Image src={imagem} alt="icone" width={80} height={80} />
    </div>
  );
}
