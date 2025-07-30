import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";


const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Introduction */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold">
              Hello,
            </h1>
            <h2 className="text-3xl lg:text-5xl font-bold">
              I'm <span className="gradient-text">Zarish</span>
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              A tech enthusiast and Software Development student, ready to take on new challenges.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button className="glow-effect">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
              <a href="/Zarish-Resume.pdf" download>
               <Button variant="outline">
               Get Resume
               </Button>
              </a>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/zarishbilal" className="p-2 hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/zarishbilal" className="p-2 hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:zarishsuleman@gmail.com" className="p-2 hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>zarishsuleman@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>825-449-7651</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Calgary, Alberta, Canada</span>
            </div>
          </div>
        </div>

        {/* Right side - Code Block */}
        <div className="relative">
          <div className="code-block">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-sm leading-relaxed">
              <code>
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