import Pagina from "@/components/template/Pagina";
import { ProviderEvento } from "@/data/context/ContextoEvento";
import { ProviderMensagens } from "@/data/context/ContextoMensagens";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProviderEvento>
      <ProviderMensagens>
        <Pagina>{children}</Pagina>;
      </ProviderMensagens>
    </ProviderEvento>
  );
}
