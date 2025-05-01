"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [titleMoveStarted, setTitleMoveStarted] = useState(false);

  // Set up intersection observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // When section comes into view
        if (entry.isIntersecting) {
          setIsInView(true);
          // Start animation sequence
          if (!animationStarted) {
            setAnimationStarted(true);

            // Schedule title movement after initial animations
            const timer = setTimeout(() => {
              setTitleMoveStarted(true);
            }, 1700); // Delay before title moves

            return () => clearTimeout(timer);
          }
        } else {
          // Reset animations when section is out of view
          setIsInView(false);
          setAnimationStarted(false);
          setTitleMoveStarted(false);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animationStarted]);

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
    <div style={styles.aboutSection} ref={sectionRef}>
      <motion.div
        style={styles.aboutTitle}
        animate={
          titleMoveStarted
            ? {
                left: "25%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }
            : {}
        }
        transition={{ duration: 1.5, ease: "easeInOut" }} // Slower, smoother transition
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: isInView ? 0.2 : 0 }}
          style={styles.titleWord}
        >
          A B O U T
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: isInView ? 1 : 0 }}
          style={styles.titleWord}
        >
          M E
        </motion.span>
      </motion.div>

      <div style={styles.rectanglesContainer}>
        <motion.div
          style={{
            ...styles.rectangle,
            ...styles.introRectangle,
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, delay: isInView ? 1.8 : 0 }}
        >
          <p style={styles.rectangleContent}>
            A tech enthusiast, student of Software Development, ready to take on
            new challenges. Intellectual curiosity and desire to learn new
            technologies driven to overcome obstacles and thrive in diverse
            environments.
          </p>
        </motion.div>

        {/* This is an empty div that creates space for the title */}
        <div style={styles.titleArea}></div>

        <motion.div
          style={{
            ...styles.rectangle,
            ...styles.skillsRectangle,
          }}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: isInView ? 2.2 : 0 }}
        >
          <h2 style={styles.rectangleTitle}>S K I L L S</h2>
          <ul style={styles.skillsList}>
            <li>UI UX</li>
            <li>Web Apps and Mobile Apps</li>

            <li>
              Programming Languages:
              <ul className="ml-6 list-disc">
                <li>C# , React , Python , JavaScript</li>
              </ul>
            </li>

            <li>
              Database:
              <ul className="ml-6 list-disc">
                <li>SQL , NoSQL</li>
              </ul>
            </li>

            <li>
              Version Control:
              <ul className="ml-6 list-disc">
                <li>Git</li>
              </ul>
            </li>

            <li>
              Software Development Methodologies:
              <ul className="ml-6 list-disc">
                <li>Agile &amp; Scrum</li>
              </ul>
            </li>

            <li>
              Frameworks:
              <ul className="ml-6 list-disc">
                <li>MAUI , .NET</li>
              </ul>
            </li>

            <li>App Development</li>
          </ul>
        </motion.div>

        <motion.div
          style={{
            ...styles.rectangle,
            ...styles.educationRectangle,
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: isInView ? 2.6 : 0 }}
        >
          <h2 style={styles.rectangleTitle}>E D U C A T I O N</h2>
          <ul style={styles.educationList}>
            <li style={styles.educationItem}>
              <span style={{ position: "absolute", left: 0, top: 0 }}>·</span>
              SOFTWARE DEVELOPMENT DIPLOMA FROM SAIT
            </li>
            <li style={styles.educationItem}>
              <span style={{ position: "absolute", left: 0, top: 0 }}>·</span>
              O&apos;LEVELS &amp; A&apos;LEVELS FROM LAHORE GRAMMAR SCHOOL
            </li>
          </ul>
        </motion.div>
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
    </div>
  );
};

export default AboutSection;
