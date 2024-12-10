import { createContext, useEffect, useState } from "react";
import { Evento, eventos as EventosMock } from "core";
import useApi from "../hooks/useApi";
import useLocalStorage from "../hooks/useLocalStorage";

interface ContextoEventosProps {
  eventos: Evento[];
  evento: Evento | null;

  selecionarEvento(id: string): void;
  excluirEvento(id: string): void;
  adicionarEventoViaQrCode(qrcode: string): void;
  carregarEventos(): void;
}

const ContextoEventos = createContext<ContextoEventosProps>({} as any);

export function ProvedorEventos({ children }: any) {
  const { httpPost } = useApi();
  const { salvarItem, obterItem } = useLocalStorage();
  const [eventos, setEventos] = useState<Evento[]>(EventosMock);
  const [evento, setEvento] = useState<Evento | null>(null);

  async function selecionarEvento(id: string) {
    if (!eventos) return;
    const evento = eventos.find((e) => e.id === id);
    const eventoCarregado = await carregarEvento(id, evento?.senha || "");
    setEvento(eventoCarregado ?? null);
  }

  function excluirEvento(id: string) {
    const novosEventos = eventos.filter((e) => e.id !== id);
    setEventos(novosEventos);
    salvarItem("eventos", novosEventos);
  }

  async function adicionarEventoViaQrCode(qrcode: string) {
    try {
      const idESenha = JSON.parse(qrcode);

      const evento = await carregarEvento(idESenha.id, idESenha.senha);

      if (!evento) {
        return excluirEvento(idESenha.id);
      }

      const novosEventos = eventos.filter((e) => e.id !== idESenha.id);
      novosEventos.push(evento);

      salvarItem("eventos", novosEventos);
      setEventos(novosEventos);
    } catch (error) {
      alert(`Erro ${JSON.stringify(error)}`);
    }
  }

  async function carregarEvento(id: string, senha: string) {
    const evento = await httpPost(`eventos/acessar`, { id, senha });
    return evento;
  }

  async function carregarEventos() {
    const eventos = await obterItem("eventos");
    setEventos(eventos || []);
  }

  useEffect(() => {
    carregarEventos();
  }, []);

  return (
    <ContextoEventos.Provider
      value={{
        eventos,
        evento,
        selecionarEvento,
        excluirEvento,
        adicionarEventoViaQrCode,
        carregarEventos,
      }}
    >
      {children}
    </ContextoEventos.Provider>
  );
}

export default ContextoEventos;
