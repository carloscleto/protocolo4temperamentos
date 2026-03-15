import { useState, useEffect } from "react";
import CtaButton from "@/components/CtaButton";

const FloatingCta = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full px-6 pb-6 pt-12 pointer-events-none transition-transform duration-500 z-50 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ background: "linear-gradient(to top, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0) 100%)" }}
    >
      <div className="w-full max-w-md mx-auto pointer-events-auto">
        <CtaButton text="QUERO AGORA" arrowDirection="down" />
      </div>
    </div>
  );
};

export default FloatingCta;
