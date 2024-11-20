import Convidado from "../model/Convidado";
import validarConvidado from "./validarConvidado";

export default function ComplementarConvidado(
  convidadoParcial: Partial<Convidado>,
): Convidado {
  const erros = validarConvidado(convidadoParcial);

  if (erros.length > 0) {
    throw new Error(erros.join("\n"));
  }

  const qtdeAcompanhantes = convidadoParcial.qtdeAcompanhantes ?? 0;

  const possuiAcompanhantes =
    convidadoParcial.possuiAcompanhantes &&
    convidadoParcial.confirmado &&
    qtdeAcompanhantes > 0;

  const convidado = {
    ...convidadoParcial,
    qtdeAcompanhantes: possuiAcompanhantes ? qtdeAcompanhantes : 0,
    possuiAcompanhantes: possuiAcompanhantes,
  } as Convidado;

  return convidado;
}
