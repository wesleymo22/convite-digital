"use client";
import DashboardEvento from "@/components/evento/DashboardEvento";
import FormSenhaEvento from "@/components/evento/FormSenhaEvento";
import { Convidado, Evento, eventos } from "core";
import { use, useEffect, useState } from "react";

interface AdminEventoProps {
  params: Promise<{ todos: string[] }>;
}

export default function AdminEvento({ params }: AdminEventoProps) {
  const { todos } = use(params);
  const id = todos[0];
  const [senha, setSenha] = useState<string | null>(todos[1] ?? null);
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
        />
      ) : (
        <FormSenhaEvento />
      )}
    </div>
  );
}
