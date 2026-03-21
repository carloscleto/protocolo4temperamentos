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
      className={`fixed bottom-0 left-0 w-full z-50 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-gradient-to-t from-white via-white/95 to-white/0 pt-10 pb-6 flex justify-center">
        <a
          href="#offer"
          className="animate-pulse-glow bg-ctaCarrotOrange text-cornSilk py-7 px-20 md:px-28 rounded-full text-2xl md:text-3xl font-black inline-block shadow-xl"
        >
          QUERO AGORA
        </a>
      </div>
    </div>
  );
};

export default FloatingCta;
