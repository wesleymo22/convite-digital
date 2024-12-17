import useMensagens from "@/data/hooks/useMensagens";
import { IconCopy } from "@tabler/icons-react";
import { createElement } from "react";
export interface CopiarClipboardProps {
  icone: React.ElementType;
  label: string;
  texto: string;
  observacao?: string;
}

export default function CopiarClipboard({
  icone,
  label,
  texto,
  observacao,
}: CopiarClipboardProps) {
  const { adicionarSucesso } = useMensagens();

  function copiarTexto() {
    navigator.clipboard.writeText(texto);
    adicionarSucesso("Texto copiado com sucesso!");
  }

  return (
    <div className="flex flex-col gap-2">
      <span>{label}</span>
      <div className="flex items-center gap-3 border border-zinc-800 bg-black px-4 py-2 text-lg text-zinc-300">
        {icone && createElement(icone, { stroke: 1.3 })}

        <span className="flex-1">{texto}</span>
        <IconCopy
          stroke={1.3}
          onClick={copiarTexto}
          className="cursor-pointer"
        />
      </div>
      {observacao && (
        <span className="text-xs text-yellow-300/80">{observacao}</span>
      )}
    </div>
  );
}
