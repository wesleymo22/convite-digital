import { Convidado, Evento } from "core";
import InformacoesEvento from "./InformacoesEvento";
import AcessarViaQrCode from "./AcessarViaQrCode";
import Estatistica from "../shared/Estatistica";
import ListaConvidados from "./ListaConvidados";

interface DashboardEventoProps {
  evento: Evento;
  presentes: Convidado[];
  ausentes: Convidado[];
  totalGeral: number;
}

export default function DashboardEvento({
  evento,
  presentes,
  totalGeral,
  ausentes,
}: DashboardEventoProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <InformacoesEvento evento={evento} classname="flex-1" />
        <AcessarViaQrCode evento={evento} />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-6">
        <Estatistica
          texto="Espectativa de convidados"
          valor={evento.publicoEsperado}
          imagem="/icones/convidados.svg"
        />
        <Estatistica
          texto="Confirmações"
          valor={presentes.length}
          imagem="/icones/confirmados.svg"
        />
        <Estatistica
          texto="TotalConfirmado"
          valor={totalGeral}
          imagem="/icones/acompanhantes.svg"
        />
      </div>

      <button className="botao azul mt-12 self-end">
        <span>Atualizar lista de Convidados</span>
      </button>
      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram Presença
      </span>
      <ListaConvidados convidados={presentes} />

      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram Ausencia
      </span>
      <ListaConvidados convidados={ausentes} />
    </div>
  );
}
