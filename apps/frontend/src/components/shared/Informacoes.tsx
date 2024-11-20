import { ReactNode } from "react";

interface InformacoesProps {
  label: string;
  children: ReactNode;
}

export default function Informacoes({ label, children }: InformacoesProps) {
  return (
    <div className="flex flex-1 flex-col items-start rounded-lg border border-zinc-800 px-6 py-3">
      <span className="font-bold text-zinc-400">{label}</span>
      <div className="text-xl">{children}</div>
    </div>
  );
}
