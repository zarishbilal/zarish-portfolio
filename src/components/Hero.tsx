import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1], // Cubic-bezier easing
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
        {/* Left side - Introduction */}
        <motion.div
          className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div
            variants={childVariants}
            className="space-y-3 sm:space-y-4"
            onAnimationStart={() => console.log("Animation started for Heading")}
            onAnimationComplete={() => console.log("Animation completed for Heading")}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Hello,
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              I'm <span className="gradient-text">Zarish</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A tech enthusiast and Software Development student, ready to take on new challenges.
            </p>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            onAnimationStart={() => console.log("Animation started for Buttons")}
            onAnimationComplete={() => console.log("Animation completed for Buttons")}
          >
            <Button className="glow-effect w-full sm:w-auto" onClick={scrollToContact}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <a href="/Zarish-Resume.pdf" download className="w-full sm:w-auto">
              <Button variant="outline" className="w-full">
                Get Resume
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="flex gap-3 sm:gap-4 justify-center lg:justify-start"
            onAnimationStart={() => console.log("Animation started for Social Links")}
            onAnimationComplete={() => console.log("Animation completed for Social Links")}
          >
            <a
              href="https://github.com/zarishbilal"
              className="p-2 sm:p-3 hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/zarishbilal"
              className="p-2 sm:p-3 hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="mailto:zarishsuleman@gmail.com"
              className="p-2 sm:p-3 hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="space-y-2 text-xs sm:text-sm text-muted-foreground"
            onAnimationStart={() => console.log("Animation started for Contact Info")}
            onAnimationComplete={() => console.log("Animation completed for Contact Info")}
          >
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <Mail className="h-4 w-4 flex-shrink-0" />
              <span className="break-all">zarishsuleman@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span>825-449-7651</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span>Calgary, Alberta, Canada</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Code Block, hidden on mobile */}
        <motion.div
          className="relative order-1 lg:order-2 hidden lg:block"
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          onAnimationStart={() => console.log("Animation started for Code Block")}
          onAnimationComplete={() => console.log("Animation completed for Code Block")}
        >
          <div className="code-block overflow-hidden">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-xs sm:text-sm leading-relaxed overflow-x-auto">
              <code className="block">
                {`const developer = {
  name: 'Zarish',
  location: 'Calgary, Alberta',
  education: 'Software Development Diploma',
  skills: [
    'React', 'JavaScript', 'C#', 'Python',
    'SQL', 'NoSQL', 'Git', '.NET', 'MAUI'
  ],
  expertise: ['UI/UX', 'Web Apps', 'Mobile Apps'],
  methodologies: ['Agile', 'Scrum'],
  passions: ['Technology', 'Problem Solving'],
  
  hireable: function() {
    return (
      this.skills.length >= 5 &&
      this.education &&
      this.passions.includes('Technology')
    );
  }
};`}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;