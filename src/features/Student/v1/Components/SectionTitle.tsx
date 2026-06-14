import React from "react";

function SectionTitle({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-white">
      {icon}
      <h2 className="font-medium">{title}</h2>
    </div>
  );
}

export default SectionTitle;
