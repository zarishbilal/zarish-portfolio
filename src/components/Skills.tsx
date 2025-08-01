"use client"; // For Next.js App Router compatibility

import { motion } from "framer-motion";
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

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="gradient-text">Skills & Technologies</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, amount: 0.3 }} // Exact match to Projects
              className="p-6 card-shadow hover:glow-effect transition-colors duration-300" // Scoped to transition-colors
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
        </div>
      </div>
    </section>
  );
};

export default Skills;