import { ArrowRight, ArrowDown, Lock } from "lucide-react";

interface CtaButtonProps {
  text: string;
  href?: string;
  arrowDirection?: "right" | "down";
  extraClasses?: string;
}

const CtaButton = ({ text, href = "#pricing", arrowDirection = "right", extraClasses = "" }: CtaButtonProps) => {
  const ArrowIcon = arrowDirection === "down" ? ArrowDown : ArrowRight;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <a
        href={href}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={`
          animate-pulse-glow
          relative
          bg-ctaCarrotOrange/95
          text-xl md:text-2xl
          text-cornSilk/80
          font-black
          py-7 md:py-8 
          px-10 md:px-24 
          rounded-full 
          shadow-lg
          flex items-center justify-center 
          w-full 
          shadow-xl
          ${extraClasses}
        `}
      >
        <span>{text}</span>
        <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2">
          <ArrowIcon size={28} strokeWidth={3} aria-hidden="true" />
        </div>
      </a>
      <div className="flex items-center justify-center gap-2 text-xs opacity-80 text-center font-medium mt-1">
        <Lock size={14} className="mb-[1px] shrink-0" aria-hidden="true" />
        <span>Acesso Imediato • Garantia de 7 Dias</span>
      </div>
    </div>
  );
};

export default CtaButton;
