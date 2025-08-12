// import { motion, Variants } from "framer-motion";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ExternalLink, Github } from "lucide-react";
// import Trek from "@/assets/Trek-Canada.png";

// const Projects = () => {
//   const projects = [
//     {
//       title: "ImpacTrack",
//       description: "A platform connecting volunteers with community initiatives.",
//       image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
//       technologies: ["React", "Node.js", "MongoDB"],
//       liveUrl: "https://impac-track.vercel.app/",
//       githubUrl: "https://github.com/zarishbilal/impacTrack",
//     },
//     {
//       title: "Trek Canada",
//       description: "Discover beautiful mountain trails around the world.",
//       image: Trek,
//       technologies: ["React", "Maps API", "CSS3"],
//       liveUrl: "https://trekcanada.vercel.app/",
//       githubUrl: "https://github.com/zarishbilal/trekcanada",
//     },
//     {
//       title: "Flight Reservation",
//       description: "Comprehensive flight booking and management system.",
//       image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
//       technologies: ["C#", "MAUI", "Azure"],
//       liveUrl: "https://github.com/zarishbilal/flight-management-system",
//       githubUrl: "https://github.com/zarishbilal/flight-management-system",
//     },{
//       title: "Flight Reservation",
//       description: "Comprehensive flight booking and management system.",
//       image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
//       technologies: ["C#", "MAUI", "Azure"],
//       liveUrl: "https://github.com/zarishbilal/flight-management-system",
//       githubUrl: "https://github.com/zarishbilal/flight-management-system",
//     },
//   ];

//   // Define variants with explicit Variants type
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2, // Delay between each card animation
//       },
//     },
//   };

//   // Define child variants with explicit Variants type
//   const childVariants: Variants = {
//     hidden: { opacity: 0, y: 32 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.7, // Match other sections
//         ease: [0.22, 1, 0.36, 1], // Match other sections
//       },
//     },
//   };

//   return (
//     <section id="projects" className="py-20 px-4 bg-secondary/50">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-16">
//           <span className="gradient-text">Featured Projects</span>
//         </h2>

//         <motion.div
//           className="flex flex-row overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory no-scrollbar"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.3 }}
//         >
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               className="min-w-[280px] sm:min-w-[320px] snap-center"
//               variants={childVariants}
//               onAnimationStart={() => console.log(`Animation started for ${project.title}`)}
//               onAnimationComplete={() => console.log(`Animation completed for ${project.title}`)}
//             >
//               <Card className="overflow-hidden card-shadow hover:glow-effect transition-colors duration-300 group">
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
//                     <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                       <Button size="sm" className="glow-effect">
//                         <ExternalLink className="h-4 w-4 mr-2" />
//                         Live Demo
//                       </Button>
//                     </a>
//                     <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                       <Button size="sm" variant="outline">
//                         <Github className="h-4 w-4 mr-2" />
//                         Code
//                       </Button>
//                     </a>
//                   </div>
//                 </div>

//                 <CardHeader>
//                   <CardTitle className="text-xl">{project.title}</CardTitle>
//                   <CardDescription className="text-muted-foreground">
//                     {project.description}
//                   </CardDescription>
//                 </CardHeader>

//                 <CardContent>
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-md"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>

//         <div className="text-center mt-12">
//           <Button variant="outline" size="lg">
//             View More Projects
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import { useRef, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Trek from "@/assets/Trek-Canada.png";

const Projects = () => {
  const projects = [
       { 
    title: "Islamic Will",
description: "A secure and user-friendly platform for creating, storing, and managing Islamic wills in compliance with Shariah principles.",
image: "https://plus.unsplash.com/premium_photo-1661637857824-e443a2b62fc8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
technologies: ["Next.js", "TailwindCSS", "React", "Supabase", "Gemini"],
liveUrl: "https://github.com/zarishbilal/islamic-will",
githubUrl: "https://github.com/zarishbilal/islamic-will",
    },
      {
      title: "Trek Canada",
      description: "Explore Canada's National Parks like never before, browse trails on a dynamic map or list, and save your must-hike favorites securely for your next adventure.",
      image: Trek,
      technologies: ["React", "Maps API", "CSS3"],
      liveUrl: "https://trekcanada.vercel.app/",
      githubUrl: "https://github.com/zarishbilal/trekcanada",
    },
    {
      title: "ImpacTrack",
      description: "A platform connecting volunteers with community initiatives.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://impac-track.vercel.app/",
      githubUrl: "https://github.com/zarishbilal/impacTrack",
    },
  
    {
      title: "Flight Reservation",
      description: "Comprehensive flight booking and management system.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
      technologies: ["C#", "MAUI", "Azure"],
      liveUrl: "https://github.com/zarishbilal/flight-management-system",
      githubUrl: "https://github.com/zarishbilal/flight-management-system",
    },
 
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const { deltaY } = event;
      const scrollAmount = deltaY * 2; // Amplify scroll for smoother experience
      scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Allow vertical scrolling when at start or end
      const atStart = scrollContainer.scrollLeft <= 0 && deltaY < 0;
      const atEnd =
        scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth - 1 &&
        deltaY > 0;
      if (atStart || atEnd) {
        window.scrollBy({ top: deltaY, behavior: "smooth" });
      }
    };

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });
    return () => scrollContainer.removeEventListener("wheel", handleWheel);
  }, []);

  // Define variants with explicit Variants type
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each card animation
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
        duration: 0.7, // Match other sections
        ease: [0.22, 1, 0.36, 1], // Match other sections
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/50 sticky top-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="gradient-text">Featured Projects</span>
        </h2>

        <motion.div
          ref={scrollRef}
          className="flex flex-row overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory no-scrollbar"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[280px] sm:min-w-[320px] snap-center"
              variants={childVariants}
              onAnimationStart={() => console.log(`Animation started for ${project.title}`)}
              onAnimationComplete={() => console.log(`Animation completed for ${project.title}`)}
            >
              <Card className="overflow-hidden card-shadow hover:glow-effect transition-colors duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="glow-effect">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a href="https://github.com/zarishbilal" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              View More Projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;