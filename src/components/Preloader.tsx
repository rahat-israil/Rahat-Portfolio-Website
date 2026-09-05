import { useEffect, useState } from "react";

const LETTERS = ["R", "A", "H", "A", "T"];
const CELL = 150; // horizontal spacing per letter in SVG units
// Timing budget: everything must finish inside ~1s
const LETTER_DRAW = 0.16; // seconds per letter stroke draw
const UNDERLINE_START = LETTER_DRAW * LETTERS.length; // ~0.8s
const FADE_DELAY = 1.0; // preloader starts fading out at exactly 1s

const Preloader = () => {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setLeaving(true), FADE_DELAY * 1000);
    const removeTimer = setTimeout(() => setVisible(false), FADE_DELAY * 1000 + 450);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-all duration-[450ms] ease-out"
      style={{
        opacity: leaving ? 0 : 1,
        transform: leaving ? "scale(1.06)" : "scale(1)",
        pointerEvents: leaving ? "none" : "auto",
      }}
    >
      {/* ambient glow layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-primary/20 blur-2xl animate-pulse-glow" />
        {/* orbiting sparkles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] preloader-orbit">
          <span className="preloader-spark preloader-spark-1" />
          <span className="preloader-spark preloader-spark-2" />
          <span className="preloader-spark preloader-spark-3" />
        </div>
      </div>

      <div className="relative flex flex-col items-center">
        <svg
          viewBox={`0 0 ${LETTERS.length * CELL} 210`}
          className="w-[min(88vw,720px)] h-auto overflow-visible"
        >
          <defs>
            <linearGradient id="preloader-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="55%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--primary) / 0.7)" />
            </linearGradient>
            <filter id="preloader-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {LETTERS.map((letter, i) => (
            <text
              key={i}
              x={i * CELL + CELL / 2}
              y={155}
              textAnchor="middle"
              className="preloader-letter"
              filter="url(#preloader-glow)"
              style={{
                animation: `preloader-draw ${LETTER_DRAW}s ease-in-out ${i * LETTER_DRAW}s forwards, preloader-fill 0.15s ease-in ${i * LETTER_DRAW + LETTER_DRAW * 0.8}s forwards`,
              }}
            >
              {letter}
            </text>
          ))}

          {/* underline grows left → right after the last letter */}
          <line
            x1="18"
            y1="188"
            x2={LETTERS.length * CELL - 18}
            y2={188}
            className="preloader-underline"
            filter="url(#preloader-glow)"
            style={{
              animation: `preloader-underline 0.2s ease-out ${UNDERLINE_START}s forwards`,
            }}
          />
        </svg>
      </div>

      <style>{`
        .preloader-letter {
          font-family: 'JetBrains Mono', monospace;
          font-size: 150px;
          font-weight: 800;
          fill: url(#preloader-grad);
          fill-opacity: 0;
          stroke: hsl(var(--primary));
          stroke-width: 1.4;
          stroke-dasharray: 520;
          stroke-dashoffset: 520;
          filter: drop-shadow(0 0 18px hsl(var(--primary) / 0.55));
        }
        @keyframes preloader-draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes preloader-fill {
          to { fill-opacity: 1; }
        }
        .preloader-underline {
          stroke: hsl(var(--primary));
          stroke-width: 3;
          stroke-linecap: round;
          stroke-dasharray: ${LETTERS.length * CELL};
          stroke-dashoffset: ${LETTERS.length * CELL};
          filter: drop-shadow(0 0 10px hsl(var(--primary) / 0.7));
        }
        @keyframes preloader-underline {
          to { stroke-dashoffset: 0; }
        }

        /* orbiting sparkles */
        .preloader-orbit {
          animation: preloader-rotate 6s linear infinite;
        }
        @keyframes preloader-rotate {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .preloader-spark {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: hsl(var(--primary));
          box-shadow: 0 0 14px 3px hsl(var(--primary) / 0.8);
          top: 50%;
          left: 50%;
        }
        .preloader-spark-1 { transform: translate(-50%, -50%) translateX(260px); animation: preloader-twinkle 1.6s ease-in-out infinite; }
        .preloader-spark-2 { transform: translate(-50%, -50%) translateY(260px); animation: preloader-twinkle 1.6s ease-in-out 0.5s infinite; }
        .preloader-spark-3 { transform: translate(-50%, -50%) translateX(-260px); animation: preloader-twinkle 1.6s ease-in-out 1s infinite; }
        @keyframes preloader-twinkle {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
