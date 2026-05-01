"use client";

import {useEffect, useState} from "react";
import {useReducedMotion} from "framer-motion";

type MetricCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
};

export function MetricCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1100,
}: MetricCounterProps) {
  const [current, setCurrent] = useState(value);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCurrent(value);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [duration, shouldReduceMotion, value]);

  return (
    <span className="font-mono tabular-nums">
      {prefix}
      {current}
      {suffix}
    </span>
  );
}
