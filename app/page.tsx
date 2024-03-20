"use client";

import {
  useMotionTemplate,
  motion,
  animate,
  useMotionValue,
} from "framer-motion";
import { useEffect } from "react";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Home() {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.main
      className="flex min-h-screen flex-col justify-center items-center text-white gap-6 p-4"
      style={{ backgroundImage }}
    >
      <span className="text-sm bg-slate-700 text-white px-3 py-1 rounded-full">
        Beta Now Live!
      </span>
      <h1 className="text-6xl text-center font-semibold text-balance max-w-full sm:max-w-screen-sm">
        Deacrease your SaaS churn by over 90%
      </h1>
      <p className="max-w-full sm:max-w-screen-sm text-center text-xl text-balance">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
        ultricies est. Aliquam leo elit, venenatis sit amet magna id, ultricies
        consequat ligula.
      </p>
      <motion.button
        whileHover={{
          scale: 1.015,
        }}
        whileTap={{
          scale: 0.985,
        }}
        style={{
          border,
          boxShadow,
        }}
        className="bg-black px-4 py-1.5 rounded-full"
      >
        Start free trial
      </motion.button>
    </motion.main>
  );
}
