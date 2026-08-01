import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border border-zinc-800 bg-zinc-950 
        shadow-lg
        ${className}
      `}
    >
      {children}
    </div>
  );
}
