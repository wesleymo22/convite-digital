import { View, Text } from "react-native";
import React from "react";
import { Evento } from "core";
import { gapY2 } from "@/style";
import Informacao from "../shared/Informacao";

interface InformacoesEventoProps {
  evento: Evento;
}

export default function InformacoesEvento({ evento }: InformacoesEventoProps) {
  return (
    <View style={[gapY2]}>
      <Informacao label="Nome">{evento.nome}</Informacao>
      <Informacao label="Data">
        {new Date(evento.data).toLocaleDateString("pt-BR")}
        {" às "}
        {new Date(evento.data).toLocaleTimeString("pt-BR")}
      </Informacao>
      <Informacao label="Local">{evento.local}</Informacao>
      <Informacao label="Descricao">{evento.descricao}</Informacao>
    </View>
  );
}
