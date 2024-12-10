import {
  border,
  borderZinc800,
  gapY2,
  px4,
  py2,
  roundedMd,
  textLg,
  textSm,
  textWhite,
  textZinc400,
} from "@/style";
import { Convidado } from "core";
import { View, Text } from "react-native";

interface ListaConvidadosPorps {
  convidados: Convidado[];
}

export default function ListaConvidados({ convidados }: ListaConvidadosPorps) {
  return (
    <View>
      {convidados && convidados.length > 0 ? (
        <View style={gapY2}>
          {convidados.map((convidado) => (
            <View
              key={convidado.id}
              style={[border, borderZinc800, roundedMd, px4, py2]}
            >
              <Text style={[textWhite, textLg]}>{convidado.nome}</Text>
              <Text style={[textZinc400, textSm]}>{convidado.email}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text style={[textZinc400]}>Nenhum Por aqui ainda....</Text>
      )}
    </View>
  );
}
