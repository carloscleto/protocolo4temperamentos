import { useEffect, useState } from "react";

const FloatingCta = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const offer = document.getElementById("offer");
      if (!hero || !offer) return;
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      const offerTop = offer.offsetTop;
      const scroll = window.scrollY + window.innerHeight;
      setVisible(scroll > heroBottom && scroll < offerTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="https://pay.cakto.com.br/3d2bb4x_811174"
        target="_blank"
        rel="noopener noreferrer"
        className="animate-pulse-glow bg-ctaCarrotOrange text-cornSilk py-6 px-16 rounded-full text-xl font-black inline-block"
      >
        QUERO AGORA
      </a>
    </div>
  );
};

export default FloatingCta;
