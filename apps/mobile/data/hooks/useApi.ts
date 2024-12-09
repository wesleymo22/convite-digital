import { useCallback } from "react";

const urlBase = process.env.EXPO_PUBLIC_API_URL;

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

  function extrairDados(resposta: Response) {
    let conteudo: any;

    try {
      conteudo = resposta.json();
    } catch (error) {
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
