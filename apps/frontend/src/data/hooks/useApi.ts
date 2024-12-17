/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from "react";

const urlBase = process.env.NEXT_PUBLIC_API_URL;

export default function useApi() {
  const httpGet = useCallback(async (caminho: string) => {
    const uri = caminho.startsWith("/") ? caminho : `/${caminho}`;
    const url = `${urlBase}${uri}`;

    const resposta = await fetch(url);
    return extrairDados(resposta);
  }, []);

  const httpPost = useCallback(async (caminho: string, body?: any) => {
    const uri = caminho.startsWith("/") ? caminho : `/${caminho}`;
    const url = `${urlBase}${uri}`;

    const resposta = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });
    return extrairDados(resposta);
  }, []);

  async function extrairDados(resposta: Response) {
    let conteudo: any;

    try {
      conteudo = await resposta.json();
    } catch {
      if (!resposta.ok) {
        throw new Error(`HTTP Status Error ${resposta.status}`);
      }
      return null;
    }
    if (!resposta.ok) throw conteudo;
    return conteudo;
  }

  return { httpGet, httpPost };
}
