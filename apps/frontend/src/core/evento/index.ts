import Evento from "./model/Evento";
import Convidado from "./model/Convidado";

import complementarConvidado from "./functions/complementarConvidado";
import complementarEvento from "./functions/complementarEvento";
import criarConvidadoVazio from "./functions/criarConvidadoVazio";
import criarEventoVazio from "./functions/criarEventoVazio";
import validarConvidado from "./functions/validarConvidado";
import validarEvento from "./functions/validarEvento";

export type {
  Convidado,
  Evento,
  complementarConvidado,
  complementarEvento,
  criarConvidadoVazio,
  criarEventoVazio,
  validarConvidado,
  validarEvento,
};
