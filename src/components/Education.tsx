import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Software Development Diploma",
      institution: "Southern Alberta Institute of Technology (SAIT)",
      duration: "2022 - 2024",
      description: "Comprehensive program covering full-stack development, database management, and software engineering principles.",
      achievements: [
        "Dean's List Recognition",
        "Advanced Programming Techniques",
        "Agile Development Methodologies",
        "Database Design & Implementation",
      ],
    },
    {
      degree: "O'Levels & A'Levels",
      institution: "Lahore Grammar School",
      duration: "2018 - 2020",
      description: "Strong foundation in mathematics, sciences, and analytical thinking.",
      achievements: [
        "Mathematics Excellence",
        "Computer Science Fundamentals",
        "Critical Thinking Development",
        "Academic Leadership",
      ],
    },
  ];

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, amount: 0.3 }}
              className="card-shadow hover:glow-effect transition-colors duration-300"
              onAnimationStart={() => console.log(`Animation started for ${edu.degree}`)}
              onAnimationComplete={() => console.log(`Animation completed for ${edu.degree}`)}
            >
              <Card>
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-primary/20 rounded-lg flex-shrink-0">
                      <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="flex-1 w-full">
                      <CardTitle className="text-lg sm:text-xl mb-1 sm:mb-2">{edu.degree}</CardTitle>
                      <h3 className="text-base sm:text-lg text-primary font-semibold">{edu.institution}</h3>
                      <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                        <Calendar className="h-4 w-4 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{edu.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">{edu.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;