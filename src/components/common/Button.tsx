import React from "react";
import { cn } from "../../../lib/utils";

// Definizione dei tipi per il bottone
type ButtonProps =
  | {
      variant: "text"; // Quando il variant è "text", `title` è obbligatorio
      text: string;
      icon?: never; // `icon` non è consentito
      className?: string;
    }
  | {
      variant: "icon"; // Quando il variant è "icon", `icon` è obbligatorio
      text?: string; // `text` non è consentito
      icon: React.ReactNode;
      className?: string;
    }
  | {
      variant: "text-icon"; // Quando il variant è "text-icon", entrambi sono obbligatori
      text: string;
      icon: React.ReactNode;
      className?: string;
    };

const Button = ({ variant, text, icon, className }: ButtonProps) => {
  return (
    <button
      className={cn(
        "w-fit h-fit px-2 py-2 bg-white text-black border-2 border-black rounded-full justify-center items-center",
        variant === "icon" && "icon-styles",
        variant === "text" && "px-4",
        variant === "text-icon" && "flex flex-row px-4 gap-x-2",
        className
      )}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
