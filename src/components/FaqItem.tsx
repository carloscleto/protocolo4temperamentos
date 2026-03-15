import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b last:border-0 border-white/90">
      <button
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-cornSilk">{question}</span>
        {isOpen ? (
          <Minus className="text-[#f97316] shrink-0" size={24} aria-hidden="true" />
        ) : (
          <Plus className="text-[#f97316] shrink-0" size={24} aria-hidden="true" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-full opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="leading-relaxed italic pl-4 opacity-80 text-cornSilk">{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
