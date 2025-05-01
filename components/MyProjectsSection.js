"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";

// Sample code strings for the background typing effect
const codeString = `
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Cube from "./Cube";
import { useInView } from "react-intersection-observer";

export default function IntroSection() {
const helloText = "Hello"; const nameText = "I&apos;m Zarish"; const [helloDirections, setHelloDirections] = useState([]); const [nameDirections, setNameDirections] = useState([]); const [hasAnimated, setHasAnimated] = useState(false);

const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

useEffect(() => { if (inView) { setHasAnimated(true); } else { setHasAnimated(false); } }, [inView]);

useEffect(() => { const getRandomDirection = () => { const dirs = ["x", "-x", "y", "-y"]; return dirs[Math.floor(Math.random() * dirs.length)]; }; setHelloDirections(helloText.split("").map(getRandomDirection)); setNameDirections(nameText.split("").map(getRandomDirection)); }, []);

if (helloDirections.length === 0 || nameDirections.length === 0) return null;

const getLetterVariant = (dir) => { const distance = 60; const pos = { x: dir === "x" ? distance : dir === "-x" ? -distance : 0, y: dir === "y" ? distance : dir === "-y" ? -distance : 0 }; return { hidden: { opacity: 0, ...pos }, visible: { opacity: 1, x: 0, y: 0 } }; };

return (
<div ref={ref} className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden text-white bg-black">
<motion.div className="flex space-x-2 text-8xl md:text-10xl font-bold" initial="hidden" animate={inView && hasAnimated ? "visible" : "hidden"} variants={{ visible: { transition: { staggerChildren: 0.3 } }, hidden: { transition: { staggerChildren: 0.05 } } }}>
{helloText.split("").map((char, i) => (<motion.span key={hello- variants={getLetterVariant(helloDirections[i])} transition={{ duration: 0.6, ease: "easeOut" }}>{char === " " ? "\u00A0" : char}</motion.span>))}
<motion.span variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }} transition={{ delay: 1 + helloText.length * 0.1, duration: 0.4 }}><Cube /></motion.span>
</motion.div>

<div className="h-4" />

<motion.div className="flex items-center space-x-2 text-5xl md:text-8xl font-light text-gray-300" initial="hidden" animate={inView && hasAnimated ? "visible" : "hidden"} variants={{ visible: { transition: { delayChildren: 1, staggerChildren: 0.2 } }, hidden: { transition: { staggerChildren: 0.05 } } }}>
{nameText.split("").map((char, i) => (<motion.span key={name- variants={getLetterVariant(nameDirections[i])} transition={{ duration: 0.6, ease: "easeOut" }}>{char === " " ? "\u00A0" : char}</motion.span>))}
<motion.span variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }} transition={{ delay: 1 + nameText.length * 0.1, duration: 0.4 }}><Cube /></motion.span>
</motion.div>
</div>
); }
private void printErrors() {
    while (!errorQ.isEmpty() || !extrasQ.isEmpty()) {
        try {
            if (!errorQ.isEmpty()) {
                String error = errorQ.dequeue();
                System.out.println("Error at line: " + error.split("@")[1] + " <" + error.split("@")[0] + "> is not constructed correctly");
            }
            if (!extrasQ.isEmpty()) {
                String extra = extrasQ.dequeue();
                System.out.println("Error at line: " + extra.split("@")[1] + " <" + extra.split("@")[0] + "> is not constructed correctly");
            }
        } catch (EmptyQueueException e) {
            break;
        }
    }
}
`;

// Project data with actual image paths from public folder
const projects = [
  {
    id: 1,
    title: "ImpacTrack",
    description: "A platform connecting volunteers with community initiatives.",
    image: "/Project1.jpg",
    link: "https://impac-track.vercel.app/",
    size: "large",
    gridArea: "1 / 1 / 3 / 2", // 65% height
  },
  {
    id: 2,
    title: "Support Bot",
    description:
      "Interactive map application for nature enthusiasts and hikers.",
    image: "/Project2.jpg",
    link: "https://github.com/username/nature-explorer",
    size: "medium",
    gridArea: "3 / 1 / 4 / 2", // 35% height
  },
  {
    id: 3,
    title: "Trek Canada",
    description: "Discover beautiful mountain trails around the world.",
    image: "/Project3.jpg",
    link: "https://trekcanada.vercel.app/",
    size: "small",
    gridArea: "1 / 2 / 2 / 3", // Moved above "BY" text
  },
  {
    id: 4,
    title: "E-commerce Store",
    description:
      "A collection of the most beautiful lakes from around the world.",
    image: "/Project4.jpg",
    link: "https://github.com/username/lake-views",
    size: "small",
    gridArea: "3 / 2 / 4 / 3", // Below "BY" text
  },
  {
    id: 5,
    title: "Flight Reservation",
    description: "Platform for managing charity events and donations.",
    image: "/Project5.jpg",
    link: "https://github.com/zarishbilal/flight-management-system",
    size: "medium",
    gridArea: "1 / 3 / 2 / 4", // 35% height
  },
  {
    id: 6,
    title: "Helping Hands",
    description: "Connect people who need help with those who can provide it.",
    image: "/Project6.jpg",
    link: "https://github.com/username/helping-hands",
    size: "large",
    gridArea: "2 / 3 / 4 / 4", // 65% height
  },
];

export default function MyProjectsSection() {
  const [displayedCode, setDisplayedCode] = useState("");
  const [animationStarted, setAnimationStarted] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const fullCode = codeString;
  const indexRef = useRef(0);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    initialInView: false,
  });

  // Combine refs
  const setRefs = (element) => {
    ref(element);
    sectionRef.current = element;
  };

  // Reset animations when section comes into view or goes out of view
  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (inView) {
      // Reset state immediately
      setAnimationStarted(true);
      indexRef.current = 0;
      setDisplayedCode("");
      setShowProjects(false);

      // Set timer for showing projects
      timerRef.current = setTimeout(() => {
        setShowProjects(true);
      }, 1500);
    } else {
      // Reset everything when section is out of view
      setAnimationStarted(false);
      setShowProjects(false);
      indexRef.current = 0;
      setDisplayedCode("");
    }

    // Cleanup function
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [inView]);

  // Typing animation effect
  useEffect(() => {
    if (!animationStarted) return;

    const interval = setInterval(() => {
      if (indexRef.current < fullCode.length) {
        setDisplayedCode((prev) => prev + fullCode.charAt(indexRef.current));
        indexRef.current++;
      } else {
        clearInterval(interval);
      }
    }, 3);

    return () => clearInterval(interval);
  }, [animationStarted, fullCode]);

  return (
    <div
      ref={setRefs}
      className="relative w-full min-h-screen bg-black overflow-hidden py-16 px-8 h-screen"
      style={{ height: "100vh", position: "relative" }}
    >
      {/* Background typing code animation */}
      <div className="absolute inset-0 z-5">
        <pre
          className="whitespace-pre-wrap font-mono text-sm p-6 w-full h-full overflow-hidden"
          style={{ color: "#EC0828" }}
        >
          {displayedCode}
        </pre>
      </div>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Projects grid */}
      <div className="relative z-20 w-full h-full px-16 py-10">
        <motion.div
          className="grid grid-cols-3 gap-6 max-w-6xl mx-auto"
          style={{
            gridTemplateRows: "35% 30% 35%",
            height: "calc(100vh - 120px)",
            opacity: 0,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "calc(100% - 32px)",
          }}
          animate={{
            opacity: showProjects ? 1 : 0,
            transition: { duration: 1 },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative overflow-hidden group"
              style={{
                gridArea: project.gridArea,
                opacity: 0,
              }}
              animate={{
                opacity: showProjects ? 1 : 0,
                transition: { delay: 3 + 0.1 * project.id, duration: 0.5 },
              }}
            >
              {/* Project image */}
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              {/* Gradient overlay on hover */}
              <div className="absolute inset-x-0 bottom-0 h-0 opacity-0 group-hover:h-full group-hover:opacity-100 bg-gradient-to-b from-transparent via-[#701925]/70 to-[#701925] transition-all duration-300 ease-out flex flex-col justify-end p-6 overflow-hidden">
                <h3 className="text-white text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-white text-sm mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                >
                  <ExternalLink className="w-5 h-5 text-[#701925]" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Vertical "PROJECTS" text on left side */}
      <motion.div
        className="absolute left-16 top-1/2 transform -translate-y-1/2 z-30"
        initial={{ translateX: "calc(50vw - 34px)" }}
        animate={
          showProjects
            ? {
                translateX: 0,
                transition: {
                  delay: 2.5,
                  duration: 0.8,
                  ease: "easeOut",
                },
              }
            : { translateX: "calc(30vw - 64px)" }
        }
      >
        <div className="flex flex-col items-center space-y-4">
          {["P", "R", "O", "J", "E", "C", "T", "S"].map((letter, index) => (
            <motion.div
              key={`project-${index}`}
              initial={{ opacity: 0, y: -300 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              transition={{ duration: 1, delay: 0.2 * index }}
              className="text-white text-6xl font-bold"
              style={{ fontFamily: '"Julius Sans One", sans-serif' }}
            >
              {letter}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Vertical "ZARISH" text on right side */}
      <motion.div
        className="absolute right-16 top-1/2 transform -translate-y-1/2 z-30"
        initial={{ translateX: "calc(-50vw + 64px)" }}
        animate={
          showProjects
            ? {
                translateX: 0,
                transition: {
                  delay: 2.5,
                  duration: 0.8,
                  ease: "easeOut",
                },
              }
            : { translateX: "calc(-30vw + 64px)" }
        }
      >
        <div className="flex flex-col items-center space-y-4">
          {["Z", "A", "R", "I", "S", "H"].map((letter, index) => (
            <motion.div
              key={`zarish-${index}`}
              initial={{ opacity: 0, y: 300 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.3 * index }}
              className="text-white text-6xl font-bold"
              style={{ fontFamily: '"Julius Sans One", sans-serif' }}
            >
              {letter}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* "BY" text in center */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        <motion.div
          initial={{ opacity: 0, rotateX: 180 }}
          animate={
            inView ? { opacity: 1, rotateX: 0 } : { opacity: 0, rotateX: 180 }
          }
          transition={{ duration: 2 }}
          className="flex flex-col items-center"
        >
          <div
            className="text-white text-5xl mb-2"
            style={{ fontFamily: '"Julius Sans One", sans-serif' }}
          >
            BY
          </div>
          <button className="text-white border border-white px-8 py-2 hover:bg-white hover:text-black transition-colors duration-300">
            VIEW MORE
          </button>
        </motion.div>
      </div>
    </div>
  );
}
