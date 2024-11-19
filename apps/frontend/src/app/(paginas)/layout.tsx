import Pagina from "@/components/template/Pagina";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Pagina>{children}</Pagina>;
}
