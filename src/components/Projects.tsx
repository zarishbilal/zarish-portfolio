import { useRef, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

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
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInProjectsSection, setIsInProjectsSection] = useState(false);
  const [hasCompletedHorizontalScroll, setHasCompletedHorizontalScroll] = useState(false);
  const [canScrollUp, setCanScrollUp] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const section = sectionRef.current;
    if (!scrollContainer || !section) return;

    // Intersection Observer to detect when we're in the projects section
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const isVisible = entry.isIntersecting && entry.intersectionRatio > 0.3;
        setIsInProjectsSection(isVisible);
        
        console.log('Projects section visible:', isVisible, 'Ratio:', entry.intersectionRatio);
        
        if (!isVisible) {
          // Reset states when leaving section
          setHasCompletedHorizontalScroll(false);
          setCanScrollUp(false);
        }
      },
      {
        threshold: [0, 0.3, 0.7, 1.0],
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    observer.observe(section);

    let isProcessingScroll = false;
    let lastWheelTime = 0;

    const handleWheel = (event: WheelEvent) => {
      const now = Date.now();
      
      // Throttle wheel events
      if (now - lastWheelTime < 16) return; // ~60fps
      lastWheelTime = now;

      // Only hijack scroll when we're in the projects section
      if (!isInProjectsSection) {
        console.log('Not in projects section, allowing normal scroll');
        return;
      }

      if (isProcessingScroll) {
        console.log('Already processing scroll, preventing');
        event.preventDefault();
        event.stopImmediatePropagation();
        return;
      }

      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const currentScroll = scrollContainer.scrollLeft;
      const { deltaY } = event;
      
      console.log('Wheel event:', {
        deltaY,
        currentScroll,
        maxScroll,
        hasCompletedHorizontalScroll,
        canScrollUp
      });

      // Scrolling down
      if (deltaY > 0) {
        // If we haven't scrolled through all projects yet
        if (currentScroll < maxScroll - 10) {
          console.log('Preventing down scroll, scrolling horizontally right');
          event.preventDefault();
          event.stopImmediatePropagation();
          
          isProcessingScroll = true;
          const scrollAmount = Math.min(deltaY * 3, 300);
          scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
          
          setTimeout(() => {
            isProcessingScroll = false;
          }, 100);
          
          return;
        }
        
        // At the end of horizontal scroll
        if (!hasCompletedHorizontalScroll) {
          console.log('Completed horizontal scroll, allowing vertical scroll down');
          setHasCompletedHorizontalScroll(true);
          return; // Allow this scroll to pass through normally
        }
      }
      
      // Scrolling up
      if (deltaY < 0) {
        // If we're not at the beginning of projects
        if (currentScroll > 10) {
          console.log('Preventing up scroll, scrolling horizontally left');
          event.preventDefault();
          event.stopImmediatePropagation();
          
          isProcessingScroll = true;
          const scrollAmount = Math.min(Math.abs(deltaY) * 3, 300);
          scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
          
          setTimeout(() => {
            isProcessingScroll = false;
          }, 100);
          
          return;
        }
        
        // At the beginning of horizontal scroll
        if (!canScrollUp) {
          console.log('At beginning, allowing vertical scroll up');
          setCanScrollUp(true);
          return; // Allow this scroll to pass through normally
        }
      }
    };

    // Add wheel event listener with high priority (capture phase)
    document.addEventListener("wheel", handleWheel, { 
      passive: false, 
      capture: true 
    });

    return () => {
      observer.disconnect();
      document.removeEventListener("wheel", handleWheel, true);
    };
  }, [isInProjectsSection, hasCompletedHorizontalScroll, canScrollUp]);

  // Define variants with explicit Variants type
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative"
    >
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
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[320px] max-w-[320px] snap-center flex-shrink-0"
              variants={childVariants}
            >
              <Card className="overflow-hidden card-shadow hover:glow-effect transition-colors duration-300 group h-full flex flex-col">
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

                <CardHeader className="flex-grow">
                  <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-auto">
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

        {/* Scroll hint */}
        {isInProjectsSection && !hasCompletedHorizontalScroll && (
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-sm text-muted-foreground">
              Scroll to explore projects horizontally
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;