// Textarea Component
// Componente de textarea reutilizável

import React from "react";

interface TextareaProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  id?: string;
  required?: boolean;
  className?: string;
  label?: string;
  rows?: number;
}

export default function Textarea({
  placeholder,
  value,
  onChange,
  name,
  id,
  required = false,
  className = "",
  label,
  rows = 4,
}: TextareaProps) {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        required={required}
        className={className}
        rows={rows}
      />
    </div>
  );
}
