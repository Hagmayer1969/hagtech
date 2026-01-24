import React from "react";

interface BotaoProps {
  link: string;
  text: string;
  className?: string;
}

export default function BotaoFundo({ link, text, className }: BotaoProps): JSX.Element {
  return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative inline-flex items-center justify-center p-[1.5px] overflow-hidden rounded-xl group transition-transform hover:scale-105 active:scale-95"
      >
        <span className="bg-gradient-to-r from-purple-500 to-pink-500" />         
        <div className="bg-gradient-to-r from-purple-500 to-pink-500
                        px-3 py-3 md:px-6 md:py-4 2xl:px-11 2xl:py-3
                        text-sm md:text-base 2xl:text-2xl rounded-[inherit]">
          {text}
        </div>
      </a>
  );
}
