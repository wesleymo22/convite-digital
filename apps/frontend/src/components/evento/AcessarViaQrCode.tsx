import { Evento } from "@/core";
import QRCode from "react-qr-code";

interface AcessarViaQrCodeProps {
  evento: Evento;
}

export default function AcessarViaQrCode({ evento }: AcessarViaQrCodeProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border border-zinc-800 px-10">
      <span className="text-sm font-light text-zinc-400">
        Acesse Via Mobile
      </span>
      <QRCode
        value={JSON.stringify({ id: evento.id, senha: evento.senha })}
        className="w-43 h-32"
      />
    </div>
  );
}
