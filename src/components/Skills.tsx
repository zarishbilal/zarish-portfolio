import { motion, Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C#", "JavaScript", "Python", "TypeScript"],
    },
    {
      title: "Frontend Development",
      skills: ["React", "Tailwind CSS"],
    },
    {
      title: "Backend & Database",
      skills: ["SQL", "NoSQL", "MongoDB", "PostgreSQL", "REST APIs"],
    },
    {
      title: "Development Tools",
      skills: ["Git", "Visual Studio", "VS Code", "Docker"],
    },
    {
      title: "Mobile Development",
      skills: ["MAUI", "React Native", "Cross-platform"],
    },
    {
      title: "Methodologies",
      skills: ["Agile", "Scrum", "Test-Driven Development"],
    },
  ];

  // Define variants with explicit Variants type
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  // Define child variants with explicit Variants type
  const childVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7, // Match About
        ease: [0.22, 1, 0.36, 1], // Match About
      },
    },
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          onAnimationStart={() => console.log("Animation started for Heading")}
          onAnimationComplete={() => console.log("Animation completed for Heading")}
        >
          <span className="gradient-text">Skills & Technologies</span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="p-6 card-shadow hover:glow-effect transition-colors duration-300"
              variants={childVariants}
              onAnimationStart={() => console.log(`Animation started for ${category.title}`)}
              onAnimationComplete={() => console.log(`Animation completed for ${category.title}`)}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;