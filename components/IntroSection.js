"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Cube from "./Cube";
import { useInView } from "react-intersection-observer";

export default function IntroSection() {
  const helloText = "Hello";
  const nameText = "I'm Zarish";

  const [helloDirections, setHelloDirections] = useState([]);
  const [nameDirections, setNameDirections] = useState([]);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Use ref and inView from react-intersection-observer
  const { ref, inView } = useInView({
    triggerOnce: false, // allows re-triggering
    threshold: 0.3, // how much of the section must be visible
  });

  // Reset animation state when section comes into view
  useEffect(() => {
    if (inView) {
      setHasAnimated(true);
    } else {
      // Reset animation state when out of view
      setHasAnimated(false);
    }
  }, [inView]);

  useEffect(() => {
    // Only runs on the client
    const getRandomDirection = () => {
      const dirs = ["x", "-x", "y", "-y"];
      return dirs[Math.floor(Math.random() * dirs.length)];
    };
    setHelloDirections(helloText.split("").map(getRandomDirection));
    setNameDirections(nameText.split("").map(getRandomDirection));
  }, []);

  if (helloDirections.length === 0 || nameDirections.length === 0) return null;

  const getLetterVariant = (dir) => {
    const distance = 60;
    const pos = {
      x: dir === "x" ? distance : dir === "-x" ? -distance : 0,
      y: dir === "y" ? distance : dir === "-y" ? -distance : 0,
    };
    return {
      hidden: { opacity: 0, ...pos },
      visible: { opacity: 1, x: 0, y: 0 },
    };
  };

  return (
    <div
      ref={ref}
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden text-white bg-black"
    >
      {/* HELLO. */}
      <motion.div
        className="flex space-x-2 text-8xl md:text-10xl font-bold"
        initial="hidden"
        // Only animate when in view
        animate={inView && hasAnimated ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
          hidden: { transition: { staggerChildren: 0.05 } },
        }}
      >
        {helloText.split("").map((char, i) => (
          <motion.span
            key={`hello-${i}`}
            variants={getLetterVariant(helloDirections[i])}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
        <motion.span
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ delay: 1 + helloText.length * 0.1, duration: 0.4 }}
        >
          <Cube />
        </motion.span>
      </motion.div>

      <div className="h-4" />

      {/* I'M ZARISH + Cube */}
      <motion.div
        className="flex items-center space-x-2 text-5xl md:text-8xl font-light text-gray-300"
        initial="hidden"
        // Only animate when in view
        animate={inView && hasAnimated ? "visible" : "hidden"}
        variants={{
          visible: { transition: { delayChildren: 1, staggerChildren: 0.2 } },
          hidden: { transition: { staggerChildren: 0.05 } },
        }}
      >
        {nameText.split("").map((char, i) => (
          <motion.span
            key={`name-${i}`}
            variants={getLetterVariant(nameDirections[i])}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}

        {/* Rotating cube dot */}
        <motion.span
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ delay: 1 + nameText.length * 0.1, duration: 0.4 }}
        >
          <Cube />
        </motion.span>
      </motion.div>
    </div>
  );
}
