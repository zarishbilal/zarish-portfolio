"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [titleMoveStarted, setTitleMoveStarted] = useState(false);

  // Set up intersection observer to detect when section is in view
  useEffect(() => {
    let observer;
    const currentRef = containerRef.current;

    if (currentRef) {
      observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setIsInView(true);
            if (!animationStarted) {
              setAnimationStarted(true);
              const timer = setTimeout(() => {
                setTitleMoveStarted(true);
              }, 1700);
              return () => clearTimeout(timer);
            }
          } else {
            setIsInView(false);
            setAnimationStarted(false);
            setTitleMoveStarted(false);
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(currentRef);
    }

    return () => {
      if (currentRef && observer) {
        observer.unobserve(currentRef);
      }
    };
  }, [animationStarted]);

  useEffect(() => {
    if (!containerRef.current) return;

    const currentRef = containerRef.current;
    return () => {
      // Cleanup using the copied ref
      if (currentRef) {
        // Any cleanup needed
      }
    };
  }, []);

  // Styles object
  const styles = {
    aboutSection: {
      width: "100%",
      minHeight: "100vh",
      backgroundColor: "black",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      padding: "2rem",
      boxSizing: "border-box",
    },
    aboutTitle: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      zIndex: 1,
    },
    titleWord: {
      fontFamily: "Julius Sans One, sans-serif",
      fontSize: "5rem",
      color: "white",
      letterSpacing: "1.5rem",
      lineHeight: 1.2,
      textAlign: "center",
      whiteSpace: "nowrap",
    },
    rectanglesContainer: {
      width: "100%",
      height: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr auto 1fr",
      gap: "2rem",
      gridTemplateAreas: `
        "intro skills"
        "title skills"
        "education skills"
      `,
    },
    rectangle: {
      borderRadius: "4px",
      padding: "2rem",
      color: "white",
      position: "relative",
      background: "radial-gradient(circle at center, #701925 0%, black 100%)",
    },
    introRectangle: {
      gridArea: "intro",
    },
    skillsRectangle: {
      gridArea: "skills",
      gridRow: "span 3",
    },
    educationRectangle: {
      gridArea: "education",
    },
    titleArea: {
      gridArea: "title",
      height: "150px",
      position: "relative",
    },
    rectangleTitle: {
      fontFamily: "Julius Sans One, sans-serif",
      fontSize: "2.5rem",
      marginBottom: "1.5rem",
      letterSpacing: "0.5rem",
      fontWeight: "normal",
    },
    rectangleContent: {
      fontFamily: "Josefin Slab, serif",
      fontSize: "1.2rem",
      lineHeight: 1.6,
    },
    skillsList: {
      fontFamily: "Josefin Slab, serif",
      fontSize: "1.2rem",
      lineHeight: 1.8,
      listStyleType: "none",
      padding: 0,
      margin: 0,
    },
    educationList: {
      fontFamily: "Josefin Slab, serif",
      fontSize: "1.2rem",
      lineHeight: 1.8,
      listStyleType: "none",
      padding: 0,
      margin: 0,
    },
    educationItem: {
      marginBottom: "0.5rem",
      position: "relative",
      paddingLeft: "1rem",
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative min-h-screen bg-black text-white py-16"
      style={{ opacity }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: '"Julius Sans One", sans-serif' }}
          >
            About Me
          </h2>
          <p className="text-xl text-gray-300">
            Let&apos;s build something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {[
                { name: "Frontend Development", level: 90 },
                { name: "Backend Development", level: 85 },
                { name: "Database Management", level: 80 },
                { name: "UI/UX Design", level: 75 },
              ].map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#701925]"
                      initial={{ width: 0 }}
                      animate={
                        inView ? { width: `${skill.level}%` } : { width: 0 }
                      }
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold mb-6">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed">
              I&apos;m a passionate Full Stack Developer with a keen eye for
              detail and a drive for creating exceptional web experiences. With
              expertise in both frontend and backend technologies, I bring ideas
              to life through clean, efficient code and intuitive user
              interfaces.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Experience", value: "3+ Years" },
                { label: "Projects", value: "50+" },
                { label: "Clients", value: "20+" },
                { label: "Countries", value: "5+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#701925]/20 p-4 rounded-lg text-center"
                >
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .title-word {
            font-size: 4rem !important;
            letter-spacing: 1rem !important;
          }
          .rectangle-title {
            font-size: 2rem !important;
          }
        }

        @media (max-width: 768px) {
          .rectangles-container {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto auto auto auto !important;
            grid-template-areas:
              "intro"
              "title"
              "skills"
              "education" !important;
          }

          .title-word {
            font-size: 3rem !important;
            letter-spacing: 0.8rem !important;
          }
        }

        @media (max-width: 480px) {
          .title-word {
            font-size: 2rem !important;
            letter-spacing: 0.5rem !important;
          }

          .rectangle {
            padding: 1.5rem !important;
          }

          .rectangle-title {
            font-size: 1.5rem !important;
            letter-spacing: 0.3rem !important;
          }

          .rectangle-content,
          .skills-list,
          .education-list {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default AboutSection;
