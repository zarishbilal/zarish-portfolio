import { motion, Variants } from "framer-motion";
import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.png";

const About = () => {
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
        duration: 0.7, // Match Projects duration
        ease: [0.22, 1, 0.36, 1], // Match Projects easing
      },
    },
  };

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="gradient-text">About Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Text Content - Order 2 on mobile, 1 on desktop */}
          <motion.div
            className="space-y-4 sm:space-y-6 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h3
              variants={childVariants}
              className="text-xl sm:text-2xl font-semibold text-primary"
              onAnimationStart={() => console.log("Animation started for Heading")}
              onAnimationComplete={() => console.log("Animation completed for Heading")}
            >
              Who I am?
            </motion.h3>
            <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <motion.p
                variants={childVariants}
                onAnimationStart={() => console.log("Animation started for Paragraph 1")}
                onAnimationComplete={() => console.log("Animation completed for Paragraph 1")}
              >
                I'm a tech enthusiast with a deep curiosity for how things work and a drive to keep learning. As a Software Developer, I enjoy turning ideas into digital experiences and finding elegant solutions to everyday problems.
              </motion.p>
              <motion.p
                variants={childVariants}
                onAnimationStart={() => console.log("Animation started for Paragraph 2")}
                onAnimationComplete={() => console.log("Animation completed for Paragraph 2")}
              >
                Outside of code, I love being outdoors, whether it's hiking through the Rockies or planning our next family trip. Life with two little ones keeps me on my toes and constantly reminds me to stay creative, adaptable, and patient.
              </motion.p>
              <motion.p
                variants={childVariants}
                onAnimationStart={() => console.log("Animation started for Paragraph 3")}
                onAnimationComplete={() => console.log("Animation completed for Paragraph 3")}
              >
                Technology challenges me, nature grounds me, and my family inspires me. That balance shapes how I approach both life and work.
              </motion.p>
            </div>
          </motion.div>

          {/* Image - Order 1 on mobile, 2 on desktop */}
          <motion.div
            className="flex justify-center order-1 lg:order-2"
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            onAnimationStart={() => console.log("Animation started for Image")}
            onAnimationComplete={() => console.log("Animation completed for Image")}
          >
            <Card className="p-4 sm:p-6 lg:p-8 card-shadow">
              <img
                src={profilePhoto}
                alt="Zarish"
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-lg mx-auto"
              />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;