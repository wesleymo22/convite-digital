import Pagina from "@/components/template/Pagina";
import { Toaster } from "@/components/ui/toaster";
import { ProviderEvento } from "@/data/context/ContextoEvento";
import { ProviderMensagens } from "@/data/context/ContextoMensagens";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProviderMensagens>
      <ProviderEvento>
        <Pagina>{children}</Pagina>;
        <Toaster />
      </ProviderEvento>
    </ProviderMensagens>
  );
}
