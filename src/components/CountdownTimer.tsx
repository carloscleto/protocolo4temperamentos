import { useState, useEffect, useRef } from "react";

const TOTAL_SECONDS = 30 * 60; // 30 minutes

const CountdownTimer = () => {
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const isExpired = secondsLeft === 0;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div
        className={`pointer-events-auto px-4 py-1.5 md:px-6 md:py-2 rounded-b-xl shadow-lg ${
          isExpired ? "animate-pulse" : ""
        }`}
        style={{
          backgroundColor: "#FF6D4F",
          boxShadow: isExpired
            ? "0 0 20px rgba(255, 109, 79, 0.6), 0 0 40px rgba(255, 109, 79, 0.3)"
            : "0 4px 12px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="flex items-center gap-2 md:gap-3">
          <span
            className="text-xs md:text-sm font-bold tracking-wide"
            style={{ color: "#FEFAE0" }}
          >
            OFERTA EXPIRA EM
          </span>
          <span
            className="font-black text-lg md:text-2xl tracking-[0.15em] tabular-nums"
            style={{
              color: "#FEFAE0",
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
              textShadow: isExpired
                ? "0 0 10px rgba(254, 250, 224, 0.8)"
                : "none",
            }}
          >
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
