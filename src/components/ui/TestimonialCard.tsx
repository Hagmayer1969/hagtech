// TestimonialCard Component
// Card específico para exibição de depoimentos

import React from "react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatar?: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  testimonial,
  avatar,
}: TestimonialCardProps) {
  return (
    <div>
      <p>{testimonial}</p>
      <div>
        {avatar && <img src={avatar} alt={name} />}
        <div>
          <h4>{name}</h4>
          <p>
            {role} - {company}
          </p>
        </div>
      </div>
    </div>
  );
}
