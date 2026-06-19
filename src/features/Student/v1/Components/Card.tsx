import React from "react";

type CardProps = {
  title?: string;

  children: React.ReactNode;

  className?: string;
};

function Card({ title, children, className }: CardProps) {
  return (
    <div className={`rounded-xl  border border-zinc-800 bg-zinc-900/60 p-5 shadow-sm ${className}`}>
      {title && <h3 className="text-lg font-semibold text-white">{title}</h3>}

      {children}
    </div>
  );
}

export default Card;
