import Image from "next/image";
import { ReactNode } from "react";

interface JanelaProps {
  label?: string;
  titulo?: string;
  imagem?: string;
  background?: string;
  children: ReactNode;
}

export default function Janela({
  children,
  background,
  imagem,
  label,
  titulo,
}: JanelaProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-zinc-800">
      <Image
        src={
          background
            ? background
            : "https://www.nuvent.com.br/wp-content/uploads/2019/12/EVP_0141-scaled.jpg"
        }
        alt="Imagem de background"
        className="-z-30 object-cover"
        fill
      />
      <div className="bg-black/80">
        <div className="flex items-center gap-7 p-6">
          <div className="relative h-28 w-28">
            <Image
              src={
                imagem
                  ? imagem
                  : "https://t3.ftcdn.net/jpg/08/12/70/12/360_F_812701281_qDF1YDwHrQgs2BbUCIrgqzkdkNhokjwp.jpg"
              }
              alt="Imagem do evento"
              className="rounded-full object-cover"
              fill
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-zinc-300">
              {label ?? "Detalhes do Evento:"}
            </span>
            <span className="text-4xl font-bold">
              {titulo ?? "Título do Evento"}
            </span>
          </div>
          <div className="flex-1"></div>
          <Image
            src="/elementos.png"
            alt="Elementos decorativos"
            width={140}
            height={140}
          />
        </div>
        <div className="rounded-b-xl border-t-4 border-zinc-800 bg-black/70 p-7">
          {children}
        </div>
      </div>
    </div>
  );
}
