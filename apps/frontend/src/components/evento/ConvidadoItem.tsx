import { Convidado } from "@/core";

interface ConvidadoItemProps {
  convidado: Convidado;
}

export default function ConvidadoItem({ convidado }: ConvidadoItemProps) {
  return (
    <li className="flex justify-between rounded-md border border-zinc-800 bg-black/40 px-6 py-3">
      <div className="flex flex-col">
        <span className="text-xl font-bold">{convidado.nome}</span>
        <span className="text-sm text-zinc-400">{convidado.email}</span>
      </div>

      <div className="flex flex-col items-end">
        <span className="text-sm text-zinc-400">Acompanhantes</span>
        <span className="text-xl font-bold">
          {" "}
          {convidado.qtdeAcompanhantes}
        </span>
      </div>
    </li>
  );
}
