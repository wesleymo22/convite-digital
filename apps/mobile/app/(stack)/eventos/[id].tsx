import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  bgBlack,
  bgRed500,
  button,
  flex1,
  flexRow,
  fontBold,
  gapX2,
  gapY4,
  p4,
  py4,
  roundedLg,
  textWhite,
  wFull,
} from "@/style";
import useEventos from "@/data/hooks/useEventos";
import EventoNaoEncontrado from "@/components/evento/EventoNaoEncontrado";
import { SafeAreaView } from "react-native-safe-area-context";
import InformacoesEvento from "@/components/evento/InformacoesEvento";
import Estatistica from "@/components/shared/Estatistica";
import { Convidado } from "core";
import TituloSecao from "@/components/shared/TituloSecao";
import ListaConvidados from "@/components/evento/ListaConvidados";
import { AntDesign } from "@expo/vector-icons";

export default function TelaDetalheEvento() {
  const params = useLocalSearchParams();
  const { evento, selecionarEvento, excluirEvento } = useEventos();
  const router = useRouter();

  useEffect(() => {
    selecionarEvento(params.id as string);
  }, [params.id]);

  const presentes =
    evento?.convidados?.filter((c: Convidado) => c.confirmado) ?? [];

  const ausentes =
    evento?.convidados?.filter((c: Convidado) => !c.confirmado) ?? [];

  const totalConvidados = presentes.reduce((total, convidado) => {
    return total + convidado.qtdeAcompanhantes + 1;
  }, 0);

  return evento ? (
    <SafeAreaView style={[flex1, bgBlack, p4]}>
      <ScrollView contentContainerStyle={[py4, gapY4]}>
        <Image
          source={{ uri: evento.imagem }}
          style={[wFull, roundedLg, { height: 200 }]}
        />
        <InformacoesEvento evento={evento} />
        <View style={[flexRow, gapX2, { marginTop: 40 }]}>
          <Estatistica
            texto="Expectativa"
            valor={evento.publicoEsperado}
            imagem={require("@/assets/images/convidados.png")}
          />

          <Estatistica
            texto="Confirmações"
            valor={presentes.length}
            imagem={require("@/assets/images/confirmados.png")}
          />

          <Estatistica
            texto="Total"
            valor={totalConvidados}
            imagem={require("@/assets/images/acompanhantes.png")}
          />
        </View>
        <TituloSecao titulo="Presenças Confirmadas" />
        <ListaConvidados convidados={presentes} />
        <TituloSecao titulo="Ausencias Confirmadas" />
        <ListaConvidados convidados={ausentes} />

        <Pressable
          style={[button, bgRed500]}
          onPress={() => {
            excluirEvento(evento.id);
            router.back();
          }}
        >
          <AntDesign name="delete" size={20} color="white" />
          <Text style={[textWhite, fontBold]}>Excluir Evento</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <EventoNaoEncontrado />
  );
}
