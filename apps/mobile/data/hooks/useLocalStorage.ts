import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback } from "react";

export default function useLocalStorage() {
  const salvarItem = useCallback(async (chave: string, valor: any) => {
    await AsyncStorage.setItem(chave, JSON.stringify(valor));
  }, []);

  const obterItem = useCallback(async (chave: string) => {
    const valor = await AsyncStorage.getItem(chave);
    return valor ? JSON.parse(valor) : null;
  }, []);

  const removerItem = useCallback(async (chave: string) => {
    await AsyncStorage.removeItem(chave);
  }, []);

  return { obterItem, salvarItem, removerItem };
}
