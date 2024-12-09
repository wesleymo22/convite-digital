import { View, Text } from "react-native";
import React from "react";
import { centerGrow, flex1, textWhite } from "@/style";

export default function EventoNaoEncontrado() {
  return (
    <View style={[flex1, centerGrow]}>
      <Text style={[textWhite]}>EventoNaoEncontrado</Text>
    </View>
  );
}
