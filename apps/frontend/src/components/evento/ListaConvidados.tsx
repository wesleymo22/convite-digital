import { Convidado } from "core";
import ConvidadoItem from "./ConvidadoItem";

interface ListaConvidadosProps {
  convidados: Convidado[];
}

export default function ListaConvidados({ convidados }: ListaConvidadosProps) {
  return (
    <ul>
      <div className="flex flex-col gap-2">
        {convidados.map((convidado) => {
          return <ConvidadoItem convidado={convidado} key={convidado.id} />;
        })}
      </div>
    </ul>
  );
}
