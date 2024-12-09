import { View, Text } from "react-native";
import { ReactNode } from "react";
import {
  border,
  borderZinc800,
  fontBold,
  gapY1,
  px4,
  py2,
  roundedLg,
  textLg,
  textWhite,
  textXl,
  textZinc400,
} from "@/style";

interface InformacaoProps {
  label: string;
  children: ReactNode;
}

export default function Informacao({ label, children }: InformacaoProps) {
  return (
    <View style={[px4, py2, gapY1, roundedLg, border, borderZinc800]}>
      <Text style={[textXl, fontBold, textWhite]}>{label}</Text>
      <Text style={[textLg, textZinc400]}>{children}</Text>
    </View>
  );
}
