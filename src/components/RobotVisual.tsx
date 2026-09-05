import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Bug, CheckCircle2, Pause, ScanSearch, Search } from "lucide-react";



const RobotVisual = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [isNearby, setIsNearby] = useState(false);

  // normalized pointer position relative to the robot center (-1 .. 1)
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const sx = useSpring(px, { stiffness: 120, damping: 18, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 120, damping: 18, mass: 0.6 });

  const rotateY = useTransform(sx, [-1, 1], [-18, 18]);
  const rotateX = useTransform(sy, [-1, 1], [14, -14]);
  const headX = useTransform(sx, [-1, 1], [-10, 10]);
  const headY = useTransform(sy, [-1, 1], [-8, 8]);
  const pupilX = useTransform(sx, [-1, 1], [-9, 9]);
  const pupilY = useTransform(sy, [-1, 1], [-6, 6]);
  const shadowX = useTransform(sx, [-1, 1], [16, -16]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      setIsNearby(dist < 260);
      const nx = dx / (window.innerWidth / 2);
      const ny = dy / (window.innerHeight / 2);
      px.set(Math.max(-1, Math.min(1, nx)));
      py.set(Math.max(-1, Math.min(1, ny)));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [px, py]);


  return (
    <div
      ref={wrapRef}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative w-full max-w-[440px] mx-auto aspect-square flex items-center justify-center select-none"
      style={{ perspective: 1000 }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-56 h-56 rounded-full bg-primary/15 blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-accent/15 blur-3xl animate-float-slow" />
      </div>

      {/* Orbit ring */}
      <motion.div
        aria-hidden
        className="absolute inset-[6%] rounded-full border border-border/60"
        animate={{ rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_16px_hsl(var(--primary))]" />
      </motion.div>
      <motion.div
        aria-hidden
        className="absolute inset-[16%] rounded-full border border-dashed border-border"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_14px_hsl(var(--accent))]" />
      </motion.div>

      {/* Robot */}
      <motion.div
        className="relative z-10 w-[68%]"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 240 260" className="w-full h-auto overflow-visible">
          <defs>
            <linearGradient id="robotBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--card))" />
              <stop offset="100%" stopColor="hsl(var(--muted))" />
            </linearGradient>
            <linearGradient id="visor" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(var(--accent))" />
              <stop offset="100%" stopColor="hsl(var(--primary))" />
            </linearGradient>
          </defs>

          {/* Antenna */}
          <motion.g style={{ x: headX, y: headY }}>
            <line x1="120" y1="34" x2="120" y2="14" stroke="hsl(var(--border))" strokeWidth="4" strokeLinecap="round" />
            <motion.circle
              cx="120" cy="10" r="7" fill="hsl(var(--primary))"
              animate={{ opacity: [1, 0.35, 1], r: [7, 8.5, 7] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Head */}
            <rect x="52" y="32" width="136" height="104" rx="34" fill="url(#robotBody)" stroke="hsl(var(--border))" strokeWidth="3" />
            {/* Ears */}
            <rect x="38" y="70" width="14" height="34" rx="7" fill="hsl(var(--primary))" opacity="0.85" />
            <rect x="188" y="70" width="14" height="34" rx="7" fill="hsl(var(--primary))" opacity="0.85" />

            {/* Visor */}
            <rect x="70" y="52" width="100" height="64" rx="26" fill="hsl(var(--background))" stroke="url(#visor)" strokeWidth="3" />

            {/* Eyes */}
            <motion.g style={{ x: pupilX, y: pupilY }}>
              <motion.ellipse
                cx="99" cy="84" rx="11" ry={hovering ? 12 : 11} fill="url(#visor)"
                animate={{ scaleY: [1, 0.12, 1] }}
                transition={{ duration: 0.28, repeat: Infinity, repeatDelay: 3.6 }}
                style={{ transformOrigin: "99px 84px" }}
              />
              <motion.ellipse
                cx="141" cy="84" rx="11" ry={hovering ? 12 : 11} fill="url(#visor)"
                animate={{ scaleY: [1, 0.12, 1] }}
                transition={{ duration: 0.28, repeat: Infinity, repeatDelay: 3.6 }}
                style={{ transformOrigin: "141px 84px" }}
              />
            </motion.g>

            {/* Smile */}
            <path d="M104 108 Q120 118 136 108" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />
          </motion.g>

          {/* Neck */}
          <rect x="110" y="134" width="20" height="16" rx="6" fill="hsl(var(--border))" />

          {/* Body */}
          <rect x="62" y="148" width="116" height="86" rx="28" fill="url(#robotBody)" stroke="hsl(var(--border))" strokeWidth="3" />

          {/* Chest core */}
          <motion.circle
            cx="120" cy="186" r="18" fill="none" stroke="hsl(var(--primary))" strokeWidth="3"
            animate={{ opacity: [0.4, 1, 0.4], r: [16, 20, 16] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx="120" cy="186" r="8" fill="hsl(var(--primary))" />

          {/* Chest test-pass counter bar */}
          <rect x="82" y="214" width="76" height="6" rx="3" fill="hsl(var(--muted))" />
          <motion.rect
            x="82" y="214" height="6" rx="3" fill="hsl(var(--accent))"
            animate={{ width: [10, 76, 30, 76] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <text x="120" y="208" textAnchor="middle" className="font-mono" fontSize="8" fill="hsl(var(--muted-foreground))">
            TEST COVERAGE
          </text>

          {/* Arms */}
          <motion.rect
            x="38" y="158" width="18" height="56" rx="9" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="3"
            animate={{ rotate: [-6, 8, -6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "47px 162px" }}
          />
          <motion.rect
            x="184" y="158" width="18" height="56" rx="9" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="3"
            animate={{ rotate: [6, -8, 6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "193px 162px" }}
          />

          {/* Magnifying glass held in right hand — scanning for bugs */}
          <motion.g
            animate={{ rotate: [-8, 10, -8], y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "205px 200px" }}
          >
            <line x1="199" y1="218" x2="212" y2="234" stroke="hsl(var(--border))" strokeWidth="6" strokeLinecap="round" />
            <circle cx="194" cy="206" r="18" fill="hsl(var(--primary))" fillOpacity="0.08" stroke="hsl(var(--primary))" strokeWidth="4" />
            <motion.g
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <circle cx="194" cy="206" r="4" fill="hsl(var(--destructive))" />
              <line x1="188" y1="200" x2="184" y2="196" stroke="hsl(var(--destructive))" strokeWidth="2" strokeLinecap="round" />
              <line x1="200" y1="200" x2="204" y2="196" stroke="hsl(var(--destructive))" strokeWidth="2" strokeLinecap="round" />
              <line x1="188" y1="212" x2="184" y2="216" stroke="hsl(var(--destructive))" strokeWidth="2" strokeLinecap="round" />
              <line x1="200" y1="212" x2="204" y2="216" stroke="hsl(var(--destructive))" strokeWidth="2" strokeLinecap="round" />
            </motion.g>
          </motion.g>

          {/* Clipboard / test case checklist in left hand */}
          <motion.g
            animate={{ rotate: [4, -5, 4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "40px 200px" }}
          >
            <rect x="14" y="188" width="46" height="56" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="3" />
            <rect x="28" y="182" width="18" height="10" rx="4" fill="hsl(var(--border))" />
            {[0, 1, 2].map((i) => (
              <g key={i}>
                <motion.path
                  d={`M21 ${203 + i * 13} l4 4 l7 -8`}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                />
                <rect x="36" y={200 + i * 13} width="18" height="4" rx="2" fill="hsl(var(--muted-foreground))" opacity="0.45" />
              </g>
            ))}
          </motion.g>
        </svg>

        {/* Ground shadow */}
        <motion.div
          aria-hidden
          className="mx-auto mt-2 h-3 w-28 rounded-[50%] bg-foreground/20 blur-md"
          style={{ x: shadowX }}
          animate={{ scaleX: [1, 0.86, 1], opacity: [0.35, 0.2, 0.35] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Escaping bugs the QA bot is hunting */}
      {[
        { top: "18%", left: "6%", right: undefined as string | undefined, d: 7, delay: 0 },
        { top: "68%", left: "10%", right: undefined as string | undefined, d: 9, delay: 1.2 },
        { top: "30%", left: undefined as string | undefined, right: "4%", d: 8, delay: 0.6 },
      ].map((b, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="absolute z-0 text-destructive/70"
          style={{ top: b.top, left: b.left, right: b.right }}
          animate={{ x: [0, 14, -8, 0], y: [0, -12, 8, 0], rotate: [0, 12, -10, 0], opacity: [0.35, 0.85, 0.35] }}
          transition={{ duration: b.d, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
        >
          <Bug className="w-5 h-5" />
        </motion.div>
      ))}

      {/* Floating QA badges */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute z-20 top-2 left-0 flex items-center gap-2 rounded-xl border border-destructive/30 bg-card/80 backdrop-blur-md px-3 py-2 shadow-lg"
      >
        {isNearby ? (
          <Bug className="w-4 h-4 text-destructive" />
        ) : (
          <ScanSearch className="w-4 h-4 text-accent" />
        )}
        <span className="font-mono text-[11px] text-foreground/80">
          {isNearby ? "bug_found: cart_boundary" : "WHO'S THERE?"}
        </span>
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute z-20 bottom-4 right-0 flex items-center gap-2 rounded-xl border border-primary/30 bg-card/80 backdrop-blur-md px-3 py-2 shadow-lg"
      >
        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
        <span className="font-mono text-[11px] text-foreground/80">
          {isNearby ? "1,429 tests passed" : "paused: observing"}
        </span>
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
        className="absolute z-20 top-[46%] -right-1 hidden sm:flex items-center gap-2 rounded-xl border border-accent/30 bg-card/80 backdrop-blur-md px-3 py-2 shadow-lg"
      >
        {isNearby ? (
          <Search className="w-4 h-4 text-primary" />
        ) : (
          <Pause className="w-4 h-4 text-muted-foreground" />
        )}
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {isNearby ? "Finding Bugs" : "Stop Finding Bugs"}
        </span>
      </motion.div>



    </div>
  );
};

export default RobotVisual;