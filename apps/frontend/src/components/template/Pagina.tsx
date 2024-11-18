import { ReactNode } from "react";
import Logo from "./Logo";

interface PaginaProps {
  children: ReactNode;
  classname?: string;
}

export default function Pagina({ children, classname }: PaginaProps) {
  return (
    <div className="flex min-h-screen flex-col items-center bg-black bg-[url('/background.png')] bg-cover py-10">
      <Logo />
      <main
        className={`${classname} container flex flex-1 flex-col justify-center py-10`}
      >
        {children}
      </main>
    </div>
  );
}
