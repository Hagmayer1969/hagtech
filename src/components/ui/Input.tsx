// Input Component
// Componente de input reutilizável

import React from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  required?: boolean;
  className?: string;
  label?: string;
}

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  id,
  required = false,
  className = "",
  label,
}: InputProps) {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        required={required}
        className={className}
      />
    </div>
  );
}
