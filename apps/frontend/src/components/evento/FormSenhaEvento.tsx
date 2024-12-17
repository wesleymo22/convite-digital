import CampoEntrada from "../shared/CampoEntrada";

interface FormSenhaEventoProps {
  senha: string;
  setSenha: (senha: string) => void;
  acessarEvento: () => void;
}

export default function FormSenhaEvento({
  senha,
  setSenha,
  acessarEvento,
}: FormSenhaEventoProps) {
  return (
    <div className="flex w-[500px] flex-col items-center gap-4 rounded-lg border border-zinc-800 bg-zinc-900 p-8 shadow-lg">
      <h1 className="text-3xl font-black">Bem-vindo(a)</h1>
      <h2 className="-mt-3 text-lg font-semibold">Administrador</h2>
      <p className="text-sm text-zinc-400">
        Insira sua senha para gerenciar o evento
      </p>
      <CampoEntrada
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Digite sua senha"
        type="password"
        outterClassName="w-full"
      />
      <button className="botao azul" onClick={acessarEvento}>
        Acessar Evento
      </button>
    </div>
  );
}
