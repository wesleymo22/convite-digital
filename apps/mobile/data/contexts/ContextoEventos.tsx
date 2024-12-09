import { createContext, useState } from "react";
import { Evento, eventos as EventosMock } from "core";

interface ContextoEventosProps {
  eventos: Evento[];
  evento: Evento | null;

  selecionarEvento(id: string): void;
  excluirEvento(id: string): void;
  adicionarEventoViaQrCode(qrcode: string): void;
}

const ContextoEventos = createContext<ContextoEventosProps>({} as any);

export function ProvedorEventos({ children }: any) {
  const [eventos, setEventos] = useState<Evento[]>(EventosMock);
  const [evento, setEvento] = useState<Evento | null>(null);

  function selecionarEvento(id: string) {
    const evento = eventos.find((e) => e.id === id);
    setEvento(evento || null);
  }

  function excluirEvento(id: string) {
    const novosEventos = eventos.filter((e) => e.id !== id);
    setEventos(novosEventos);
  }

  function adicionarEventoViaQrCode(qrcode: string) {
    const evento = eventos.find((e) => e.id === qrcode);
    setEvento(evento || null);
  }

  return (
    <ContextoEventos.Provider
      value={{
        eventos,
        evento,
        selecionarEvento,
        excluirEvento,
        adicionarEventoViaQrCode,
      }}
    >
      {children}
    </ContextoEventos.Provider>
  );
}

export default ContextoEventos;
