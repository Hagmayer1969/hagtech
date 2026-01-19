// ProjectCard Component
// Card específico para exibição de projetos do portfólio

import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  category,
  link,
}: ProjectCardProps) {
  return (
    <div>
      <img src={image} alt={title} />
      <span>{category}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      {link && <a href={link}>Ver projeto</a>}
    </div>
  );
}
