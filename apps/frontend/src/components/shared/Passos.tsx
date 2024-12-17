"use client";
import { useState } from "react";

export interface PassosProps {
  labels: string[];
  labelAcao: string;
  permiteProximoPasso?: boolean[];
  acao: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

export default function Passos({
  labels,
  labelAcao,
  acao,
  children,
  permiteProximoPasso,
}: PassosProps) {
  const [passoAtual, setPassoAtual] = useState(0);

  function semPassoAnterior() {
    return passoAtual === 0;
  }

  function semProximoPasso() {
    return passoAtual === labels.length - 1;
  }

  function passoAnterior() {
    if (semPassoAnterior()) return;
    setPassoAtual(passoAtual - 1);
  }

  function proximoPasso() {
    if (semProximoPasso()) return;
    setPassoAtual(passoAtual + 1);
  }

  function renderizarLabels() {
    return (
      <div className="flex select-none gap-4">
        {labels.map((label, i) => {
          const selecionado = passoAtual === i;
          return (
            <div key={i} className="flex items-center gap-2">
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full ${selecionado ? "bg-white text-black" : "bg-zinc-700 text-zinc-400"} `}
              >
                {i + 1}
              </span>
              <span className={selecionado ? "text-white" : "text-zinc-600"}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  const permitirProximoPasso = permiteProximoPasso?.[passoAtual] ?? true;

  return (
    <div className="flex w-full flex-1 flex-col gap-10">
      <div className="self-center">{renderizarLabels()}</div>
      <div>{children[passoAtual]}</div>
      <div className="flex justify-between">
        <button
          onClick={passoAnterior}
          className={`botao ${
            semPassoAnterior()
              ? "cursor-not-allowed bg-zinc-400 opacity-50"
              : "bg-zinc-700 text-white hover:bg-zinc-600"
          } `}
          disabled={semPassoAnterior()}
        >
          <span>Anterior</span>
        </button>
        {semProximoPasso() ? (
          <button
            onClick={acao}
            disabled={!permitirProximoPasso}
            className={`botao ${
              !permitirProximoPasso
                ? "cursor-not-allowed bg-zinc-400 opacity-50"
                : "bg-green-700 text-white hover:bg-green-600"
            } `}
          >
            <span>{labelAcao}</span>
          </button>
        ) : (
          <button
            onClick={proximoPasso}
            disabled={!permitirProximoPasso || semProximoPasso()}
            className={`botao ${
              !permitirProximoPasso || semProximoPasso()
                ? "cursor-not-allowed bg-zinc-400 opacity-50"
                : "bg-green-700 text-white hover:bg-green-600"
            } `}
          >
            <span>Próximo</span>
          </button>
        )}
      </div>
    </div>
  );
}
