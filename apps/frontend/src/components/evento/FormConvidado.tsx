import { Convidado } from "core";
import CampoEntrada from "../shared/CampoEntrada";
import CampoSimNao from "../shared/CampoSimNao";

export interface FormConvidadoProps {
  convidado: Partial<Convidado>;
  convidadoMudou: (convidado: Partial<Convidado>) => void;
}

export default function FormConvidado({
  convidado,
  convidadoMudou,
}: FormConvidadoProps) {
  return (
    <div className="flex flex-col gap-5">
      <CampoEntrada
        label="Nome"
        value={convidado.nome ?? ""}
        onChange={(e) => convidadoMudou({ ...convidado, nome: e.target.value })}
      />
      <CampoEntrada
        label="Email"
        value={convidado.email ?? ""}
        onChange={(e) =>
          convidadoMudou({ ...convidado, email: e.target.value })
        }
      />
      <div className="flex gap-5">
        <CampoSimNao
          label="Presença Confirmada?"
          value={convidado.confirmado ?? true}
          onChange={(valor) =>
            convidadoMudou({ ...convidado, confirmado: valor })
          }
          className="flex-1"
        />
        {convidado.confirmado && (
          <div className="flex flex-1 gap-5">
            <CampoSimNao
              label="Possui Acompanhantes?"
              value={convidado.possuiAcompanhantes ?? false}
              onChange={(valor) =>
                convidadoMudou({
                  ...convidado,
                  possuiAcompanhantes: valor,
                  qtdeAcompanhantes: valor ? 1 : 0,
                })
              }
              className="flex-1"
            />
            {convidado.possuiAcompanhantes && (
              <CampoEntrada
                label="Quantos Acompanhantes?"
                value={convidado.qtdeAcompanhantes ?? 1}
                onChange={(e) =>
                  convidadoMudou({
                    ...convidado,
                    qtdeAcompanhantes: +e.target.value,
                  })
                }
                min={1}
                type="number"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
