// import { Card } from "@/components/ui/card";
// import profilePhoto from "@/assets/profile-photo.png";

// const About = () => {
//   return (
//     <section id="about" className="py-20 px-4 bg-secondary/50">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-16">
//           <span className="gradient-text">About Me</span>
//         </h2>
        
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <h3 className="text-2xl font-semibold text-primary">
//               Who I am?
//             </h3>
//             <div className="space-y-4 text-muted-foreground leading-relaxed">
//               <p>
//               I'm a tech enthusiast with a deep curiosity for how things work and a drive to keep learning. Currently studying Software Development at SAIT, I enjoy turning ideas into digital experiences and finding elegant solutions to everyday problems.
//               </p>
//               <p>
//                 Outside of code, I love being outdoors, whether it's hiking through the Rockies or planning our next family trip. Life with two little ones keeps me on my toes and constantly reminds me to stay creative, adaptable, and patient.
//               </p>
//               <p>
//                Technology challenges me, nature grounds me, and my family inspires me. That balance shapes how I approach both life and work.
//               </p>
//             </div>
//           </div>
          
//           <div className="flex justify-center">
//             <Card className="p-8 card-shadow">
//               <img 
//                 src={profilePhoto} 
//                 alt="Zarish" 
//                 className="w-80 h-80 object-cover rounded-lg"
//               />
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.png";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="gradient-text">About Me</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Text Content - Order 2 on mobile, 1 on desktop */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-primary">
              Who I am?
            </h3>
            <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
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
          
          {/* Image - Order 1 on mobile, 2 on desktop */}
          <div className="flex justify-center order-1 lg:order-2">
            <Card className="p-4 sm:p-6 lg:p-8 card-shadow">
              <img 
                src={profilePhoto} 
                alt="Zarish" 
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-lg mx-auto"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};