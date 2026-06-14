import React from "react";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 backdrop-blur">
      {children}
    </div>
  );
}

export default Card;
