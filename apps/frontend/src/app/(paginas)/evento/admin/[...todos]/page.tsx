"use client";
import { useEffect, useState } from "react";

interface AdminEventoProps {
  params: Promise<{ todos: string[] }>;
}

export default function AdminEvento({ params }: AdminEventoProps) {
  const [todos, setTodos] = useState<string[]>([]);

  useEffect(() => {
    params.then(({ todos }) => setTodos(todos));
  }, [params]);

  return (
    <div className="flex flex-col">
      <span>ID: {todos[0]}</span>
      <span>Senha: {todos[1]}</span>
    </div>
  );
}
