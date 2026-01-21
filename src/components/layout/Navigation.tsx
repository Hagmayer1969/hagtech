// Navigation Component
// Componente de navegação reutilizável

import React from "react";

interface NavigationProps {
  // Props do componente
}

export default function Navigation({}: NavigationProps) {
  return (
    <>
      <button className="flex flex-col gap-1.5 p-2 group">
        <div className="w-7 h-0.5 rounded-full gradient-line-bg"></div>
        <div className="w-7 h-0.5 rounded-full gradient-line-bg"></div>
        <div className="w-7 h-0.5 rounded-full gradient-line-bg"></div>
        
      </button>
    </>
  );
}
