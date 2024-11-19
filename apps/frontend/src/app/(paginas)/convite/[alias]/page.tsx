interface PaginaConviteProps {
  params: {
    alias: string;
  };
}

export default function PaginaConvite({ params }: PaginaConviteProps) {
  const { alias } = params;

  return <div>Convite ID: {alias}</div>;
}
