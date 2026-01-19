// ServiceCard Component
// Card específico para exibição de serviços

import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <div>
      {icon && <div>{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
