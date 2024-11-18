import { ReactNode } from "react";

interface PaginaProps {
  children: ReactNode;
  classname?: string;
}

export default function Pagina({ children, classname }: PaginaProps) {
  return (
    <div className="flex flex-col items-center py-10 min-h-screen bg-[url('/background.png')] bg-cover bg-black">
      <main className={`${classname}`}>{children}</main>
    </div>
  );
}
