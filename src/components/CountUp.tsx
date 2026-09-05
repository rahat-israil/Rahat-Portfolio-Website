import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

const CountUp = ({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  className,
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(
        (now - startTime) / (duration * 1000),
        1
      );

      const eased = 1 - Math.pow(1 - progress, 3);

      // Keep decimal values when needed
      const value = end * eased;

      setCount(
        Number.isInteger(end)
          ? Math.round(value)
          : Number(value.toFixed(1))
      );

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export default CountUp;