import { fontBold, py4, selfStart, textXl, textZinc400 } from "@/style";
import { Text, View } from "react-native";

interface TituloSecaoProps {
  titulo: string;
}

export default function TituloSecao({ titulo }: TituloSecaoProps) {
  return (
    <Text style={[textXl, fontBold, py4, textZinc400, selfStart]}>
      {titulo}
    </Text>
  );
}
