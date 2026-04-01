import { useMemo } from "react";

const SYMBOLS = ["+", "−", "×", "÷", "=", "/", "½", "¾", "¼"];
const COLORS = ["#29ABE2", "#F78CA0", "#6BCB77", "#FFD166", "#A78BFA"];

interface SymbolDef {
  symbol: string;
  x: number;
  y: number;
  size: number;
  color: string;
  animation: string;
  delay: string;
  id: string;
}

export function MathBackground() {
  const symbols = useMemo<SymbolDef[]>(() => {
    const anims = [
      "animate-float-slow",
      "animate-float-med",
      "animate-float-fast",
    ];
    return Array.from({ length: 22 }, (_, i) => ({
      symbol: SYMBOLS[i % SYMBOLS.length],
      x: (i * 37 + 11) % 95,
      y: (i * 53 + 7) % 90,
      size: 18 + (i % 4) * 8,
      color: COLORS[i % COLORS.length],
      animation: anims[i % 3],
      delay: `${(i * 0.4) % 4}s`,
      id: `math-sym-${i}`,
    }));
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {symbols.map((s) => (
        <span
          key={s.id}
          className={`absolute select-none font-display font-bold ${s.animation}`}
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            fontSize: `${s.size}px`,
            color: s.color,
            opacity: 0.18,
            animationDelay: s.delay,
          }}
        >
          {s.symbol}
        </span>
      ))}
    </div>
  );
}
