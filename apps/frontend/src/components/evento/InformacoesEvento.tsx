import { Evento } from "core";
import Informacoes from "../shared/Informacoes";

interface InformacoesEventoProps {
  evento: Evento;
  classname?: string;
  esconderNome?: boolean;
}

export default function InformacoesEvento({
  evento,
  classname,
  esconderNome,
}: InformacoesEventoProps) {
  return (
    <div className={`flex flex-col gap-2 ${classname}`}>
      {esconderNome ? null : (
        <div className="flex flex-1 items-center gap-4 rounded-lg border border-zinc-800 px-6 py-3">
          <span className="text-2xl font-black">{evento.alias}</span>
          <span className="text-xl text-zinc-300">{evento.nome}</span>
        </div>
      )}

      <div className="flex gap-2">
        <Informacoes label="Data: ">
          <span>
            {new Date(evento.data!).toLocaleDateString()}
            {" às "}
            {new Date(evento.data!).toLocaleTimeString()}
          </span>
        </Informacoes>
        <Informacoes label="Local: ">{evento.local}</Informacoes>
      </div>
      <Informacoes label="Descrição: ">{evento.descricao}</Informacoes>
    </div>
  );
}
