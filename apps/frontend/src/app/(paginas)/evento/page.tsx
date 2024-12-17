"use client";

import Janela from "@/components/shared/Janela";
import useEvento from "@/data/hooks/useEvento";
import FormEvento from "@/components/evento/FormEvento";

export default function PaginaEvento() {
  const { evento } = useEvento();
  return (
    <Janela
      imagem={evento?.imagem}
      background={evento?.imagemBackground}
      label="Qual evento vamos criar?"
      titulo={evento?.nome ? evento.nome : "Novo Evento"}
    >
      <FormEvento />
    </Janela>
  );
}
