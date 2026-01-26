# HagTech - Confecção de Sites e Automações

https://hagtech.vercel.app/

Site institucional da HagTech, empresa especializada em desenvolvimento de sites e soluções de automação.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações
- **Lucide React** - Ícones

## 📁 Estrutura do Projeto

```
hagtech/
├── src/
│   ├── app/                    # App Router (páginas e layouts)
│   │   ├── globals.css         # Estilos globais
│   │   ├── layout.tsx          # Layout principal
│   │   └── page.tsx            # Página inicial
│   ├── components/
│   │   ├── layout/             # Componentes de layout
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── sections/           # Seções da página
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/                 # Componentes reutilizáveis
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       ├── Textarea.tsx
│   │       ├── ServiceCard.tsx
│   │       ├── TestimonialCard.tsx
│   │       └── ProjectCard.tsx
│   ├── hooks/                  # Hooks personalizados
│   │   ├── useScrollPosition.ts
│   │   ├── useMediaQuery.ts
│   │   └── useLocalStorage.ts
│   ├── lib/                    # Utilitários e constantes
│   │   ├── utils.ts
│   │   └── constants.ts
│   ├── types/                  # Definições de tipos
│   │   └── index.ts
│   └── assets/                 # Recursos estáticos
│       ├── images/
│       └── icons/
├── public/                     # Arquivos públicos
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar produção
npm start
```

## 📝 Licença

Este projeto é privado e de propriedade da HagTech
