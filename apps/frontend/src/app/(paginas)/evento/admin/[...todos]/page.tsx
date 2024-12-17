"use client";
import DashboardEvento from "@/components/evento/DashboardEvento";
import FormSenhaEvento from "@/components/evento/FormSenhaEvento";
import useApi from "@/data/hooks/useApi";
import { Convidado, Evento, eventos } from "core";
import { use, useCallback, useEffect, useState } from "react";

interface PaginaAdminEvento {
  params: Promise<{ todos: string[] }>;
}

export default function PaginaAdminEvento({ params }: PaginaAdminEvento) {
  const { todos } = use(params);
  const { httpPost } = useApi();
  const id = todos[0];
  const [senha, setSenha] = useState<string>(todos[1] ?? "");
  const [evento, setEvento] = useState<Evento | null>(null);
  const presentes = evento?.convidados.filter((c) => c.confirmado) ?? [];
  const ausentes = evento?.convidados.filter((c) => !c.confirmado) ?? [];

  const totalGeral =
    presentes?.reduce((total: number, convidado: Convidado) => {
      return total + convidado.qtdeAcompanhantes + 1;
    }, 0) ?? 0;

  function carregarEvento() {
    const evento = eventos.find((ev) => ev.id === id && ev.senha === senha);
    setEvento(evento ?? null);
  }

  const obterEvento = useCallback(async () => {
    if (!id || !senha) return;
    const evento = await httpPost("/eventos/acessar", { id, senha });
    setEvento(evento);
  }, [httpPost, id, senha]);

  useEffect(() => {
    carregarEvento();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, senha]);

  return (
    <div className="flex flex-col items-center">
      {evento ? (
        <DashboardEvento
          evento={evento}
          ausentes={ausentes}
          presentes={presentes}
          totalGeral={totalGeral}
          atualizarListaConvidados={obterEvento}
        />
      ) : (
        <FormSenhaEvento
          acessarEvento={obterEvento}
          senha={senha}
          setSenha={setSenha}
        />
      )}
    </div>
  );
}
