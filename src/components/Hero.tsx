
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
        {/* Left side - Introduction */}
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Hello,
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              I'm <span className="gradient-text">Zarish</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A tech enthusiast and Software Development student, ready to take on new challenges.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Button className="glow-effect w-full sm:w-auto" onClick={scrollToContact}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <a href="/Zarish-Resume.pdf" download className="w-full sm:w-auto">
              <Button variant="outline" className="w-full">
                Get Resume
              </Button>
            </a>
          </div>

          <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
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
          </div>

          <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
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
          </div>
        </div>

        {/* Right side - Code Block */}
        <div className="relative order-1 lg:order-2">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;