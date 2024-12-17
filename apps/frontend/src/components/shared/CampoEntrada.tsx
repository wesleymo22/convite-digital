import React from "react";

export interface CampoEntradaProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  value: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (event: any) => void;
  descricao?: string;
  observacao?: string;
  erro?: string;
  outterClassName?: string;
}

export default function CampoEntrada({
  label,
  descricao,
  observacao,
  erro,
  outterClassName,
  ...inputProps
}: CampoEntradaProps) {
  return (
    <div className={`flex flex-col gap-2 ${outterClassName ?? ""}`}>
      <div className="flex flex-col">
        {label && (
          <label className="text-lg font-black text-white">{label}</label>
        )}
        {descricao && (
          <p className="-mt-1 text-sm font-light text-zinc-400">{descricao}</p>
        )}
      </div>
      <input
        {...inputProps}
        type={inputProps.type ?? "text"}
        className="w-full rounded-md border border-white/20 bg-black/50 px-3 py-2 focus:border-white/50"
      />
      {erro && <span className="pl-2 text-sm text-red-500">{erro}</span>}
      {!erro && observacao && (
        <span className="pl-2 text-xs text-yellow-300">{observacao}</span>
      )}
    </div>
  );
}
