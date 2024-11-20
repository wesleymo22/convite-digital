import { eventos } from "core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import QRCode from "react-qr-code";

export default function PaginaEventos() {
  return (
    <div className="grid grid-cols-3 gap-5">
      {eventos.map((evento) => {
        return (
          <div
            key={evento.id}
            className="flex w-full flex-col overflow-hidden rounded-lg bg-zinc-800 text-center"
          >
            <div className="relative h-52 w-full">
              <Image
                src={evento.imagem}
                fill
                alt={evento.nome}
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col items-center gap-2 px-7 py-5">
              <span className="text-lg font-black">{evento.nome}</span>
              <p className="flex-1 text-center text-sm text-zinc-400">
                {evento.descricao}
              </p>
              <QRCode
                value={JSON.stringify({ id: evento.id, senha: evento.senha })}
                className="h-44 w-44"
              />
            </div>
            <div className="flex flex-1 items-center gap-5 p-2">
              <Link
                href={`/evento/admin/${evento.id}/${evento.senha}`}
                className="botao vermelho flex flex-1"
              >
                Admin
              </Link>
              <Link
                href={`/convite/${evento.alias}`}
                className="botao verde flex flex-1"
              >
                Convite
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
