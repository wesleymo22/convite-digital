import {
  alignCenter,
  bgZinc900,
  fontBold,
  p4,
  roundedMd,
  textCenter,
  textLg,
  textWhite,
  textXs,
  textZinc400,
  w9_10,
  wFull,
} from "@/style";
import { Evento } from "core";
import { Image, Text, View } from "react-native";

interface EventoCardProps {
  evento: Evento;
}

export default function EventoCard({ evento }: EventoCardProps) {
  return (
    <View style={[bgZinc900]}>
      <Image
        source={{ uri: evento.imagem }}
        style={[{ height: 150 }, wFull, roundedMd]}
      />
      <View style={[p4, alignCenter]}>
        <Text style={[textWhite, fontBold, textLg, textCenter]}>
          {evento.nome}
        </Text>
        <Text style={[textZinc400, textCenter, textXs, w9_10]}>
          {evento.descricao}
        </Text>
      </View>
    </View>
  );
}
