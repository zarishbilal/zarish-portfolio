import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.png";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="gradient-text">About Me</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">
              Who I am?
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
              I'm a tech enthusiast with a deep curiosity for how things work and a drive to keep learning. Currently studying Software Development at SAIT, I enjoy turning ideas into digital experiences and finding elegant solutions to everyday problems.
              </p>
              <p>
                Outside of code, I love being outdoors, whether it's hiking through the Rockies or planning our next family trip. Life with two little ones keeps me on my toes and constantly reminds me to stay creative, adaptable, and patient.
              </p>
              <p>
               Technology challenges me, nature grounds me, and my family inspires me. That balance shapes how I approach both life and work.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Card className="p-8 card-shadow">
              <img 
                src={profilePhoto} 
                alt="Zarish" 
                className="w-80 h-80 object-cover rounded-lg"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;