"use client";

import {
  Convidado,
  criarConvidadoVazio,
  criarEventoVazio,
  Data,
  Evento,
} from "core";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import useApi from "../hooks/useApi";
import { useRouter } from "next/navigation";

interface ContextoEventosProps {
  evento: Partial<Evento>;
  convidado: Partial<Convidado>;
  aliasValido: boolean;

  alterarEvento(evento: Partial<Evento>): void;
  alterarConvidado(Convidado: Partial<Convidado>): void;

  carregarEvento(idOuAlias: string): Promise<void>;
  salvarEvento(): Promise<void>;

  adicionarConvidado(): Promise<void>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ContextoEvento = createContext<ContextoEventosProps>({} as any);

export function ProviderEvento({ children }: { children: ReactNode }) {
  const { httpGet, httpPost } = useApi();
  const router = useRouter();

  const [aliasValido, setAliasValido] = useState(true);
  const [evento, setEvento] = useState<Partial<Evento>>(criarEventoVazio());
  const [convidado, setConvidado] = useState<Partial<Convidado>>(
    criarConvidadoVazio(),
  );

  const salvarEvento = useCallback(
    async function () {
      try {
        const eventoCriado = await httpPost("/eventos", evento);
        router.push("/evento/sucesso");
        setEvento({
          ...eventoCriado,
          data: Data.desformatar(eventoCriado.data),
        });
      } catch (error) {
        console.log(error);
      }
    },
    [evento, httpPost, router],
  );

  const carregarEvento = useCallback(
    async function (idOuAlias: string) {
      try {
        const evento = await httpGet(`/eventos/${idOuAlias}`);
        if (!evento) return;
        setEvento({
          ...evento,
          data: Data.desformatar(evento.data),
        });
      } catch (error) {
        console.log(error);
      }
    },
    [httpGet, setEvento],
  );

  const validarAlias = useCallback(
    async function () {
      try {
        const { valido } = await httpGet(
          `/eventos/validar/${evento.alias}/${evento.id}`,
        );
        setAliasValido(valido);
      } catch (error) {
        console.log(error);
      }
    },
    [httpGet, evento],
  );

  useEffect(() => {
    if (evento?.alias) validarAlias();
  }, [evento?.alias, validarAlias]);

  const adicionarConvidado = useCallback(
    async function () {
      await httpPost(`/eventos/${evento.alias}/convidado`, convidado);
      router.push("/convite/obrigado");
    },
    [httpPost, router, evento, convidado],
  );

  return (
    <ContextoEvento.Provider
      value={{
        evento,
        convidado,
        aliasValido,
        alterarEvento: setEvento,
        alterarConvidado: setConvidado,
        salvarEvento,
        carregarEvento,
        adicionarConvidado,
      }}
    >
      {children}
    </ContextoEvento.Provider>
  );
}

export default ContextoEvento;
