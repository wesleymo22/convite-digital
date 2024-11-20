import { use } from "react";

interface PaginaConviteProps {
  params: Promise<{ alias: string }>;
}

export default function PaginaConvite({ params }: PaginaConviteProps) {
  const { alias } = use(params);

  return <div>Convite ID: {alias}</div>;
}
