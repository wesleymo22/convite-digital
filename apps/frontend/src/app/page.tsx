import LogoGrande from "@/components/template/LogoGrande";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10 bg-black bg-[url('/background-inicio.svg')] bg-cover">
      <div className="flex flex-col items-center gap-4">
        <LogoGrande />
        <p className="w-96 select-none text-center font-light leading-6 text-zinc-500">
          Crie e gerencie o convite do seu evento de forma fácil, rápida e sem
          complicações
        </p>
      </div>
      <Link href={"/evento"} className="botao azul text-lg uppercase">
        Crie o seu Evento
      </Link>
    </div>
  );
}
