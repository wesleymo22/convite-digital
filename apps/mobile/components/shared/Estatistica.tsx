import {
  bgZinc900,
  flex1,
  fontBlack,
  gapY2,
  itemsCenter,
  p4,
  roundedLg,
  text2Xl,
  textCenter,
  textWhite,
  textZinc400,
} from "@/style";
import { View, Text, Image, ImageSourcePropType } from "react-native";

interface EstatisticaProps {
  texto: string;
  valor: number;
  imagem: ImageSourcePropType;
}

export default function Estatistica({
  imagem,
  valor,
  texto,
}: EstatisticaProps) {
  return (
    <View style={[flex1, itemsCenter, bgZinc900, p4, roundedLg]}>
      <Image
        source={imagem}
        style={{ width: 80, height: 80, marginTop: -40 }}
      />
      <View style={[itemsCenter, gapY2]}>
        <Text style={[textZinc400, textCenter]}>{texto}</Text>
        <Text style={[textWhite, text2Xl, fontBlack]}>{valor}</Text>
      </View>
    </View>
  );
}
