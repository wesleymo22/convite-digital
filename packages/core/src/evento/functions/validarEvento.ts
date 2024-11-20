import Evento from "../model/Evento";

export default function validarEvento(evento: Partial<Evento>): string[] {
  const erros: string[] = [];

  if (!evento.alias) {
    erros.push("Alias é obrigatório");
  }

  if (!evento.nome) {
    erros.push("Nome é obrigatório");
  }

  if (!evento.descricao) {
    erros.push("Descrição é obrigatória");
  }

  if (!evento.data) {
    erros.push("Data é obrigatória");
  }

  if (!evento.local) {
    erros.push("Local é obrigatória");
  }

  if (!evento.publicoEsperado || evento.publicoEsperado < 1) {
    erros.push("Publico Esperado é obrigatória");
  }

  if (!evento.imagem) {
    erros.push("Imagem é obrigatória");
  }

  if (!evento.imagemBackground) {
    erros.push("Imagem Background é obrigatória");
  }

  return erros;
}
