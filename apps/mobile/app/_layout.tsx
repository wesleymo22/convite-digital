import { ProvedorEventos } from "@/data/contexts/ContextoEventos";
import { colors } from "@/style";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ProvedorEventos>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="(stack)/eventos/[id]"
          options={{
            title: "Detalhes do Evento",
            headerBackTitle: "Voltar",
            headerTintColor: "#000",
            headerStyle: {
              backgroundColor: colors.zinc[800],
            },
          }}
        />
      </Stack>
    </ProvedorEventos>
  );
}
