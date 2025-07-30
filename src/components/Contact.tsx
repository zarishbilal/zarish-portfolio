// "use client";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Mail, Phone, MapPin, Send } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
// import emailjs from "@emailjs/browser";
// import { useRef, useEffect } from "react";

// const Contact = () => {
//   const { toast } = useToast();
//   const formRef = useRef<HTMLFormElement>(null);

//   // ✅ Initialize emailjs with public key
//   useEffect(() => {
//     emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
//   }, []);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formRef.current) return;

//     emailjs
//       .sendForm(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//         formRef.current
//       )
//       .then(
//         () => {
//           toast({
//             title: "Message Sent!",
//             description: "Thank you for reaching out. I'll get back to you soon.",
//           });
//           formRef.current?.reset();
//         },
//         (error) => {
//           toast({
//             title: "Error",
//             description: "Failed to send message. Please try again later.",
//             variant: "destructive",
//           });
//         }
//       );
//   };

//   return (
//     <section id="contact" className="py-20 px-4 bg-secondary/50">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-16">
//           <span className="gradient-text">Let's Connect</span>
//         </h2>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
//               <p className="text-muted-foreground mb-8">
//                 I'm always open to discussing new opportunities, interesting projects,
//                 or just having a conversation about technology. Feel free to reach out!
//               </p>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-center gap-4">
//                 <div className="p-3 bg-primary/20 rounded-lg">
//                   <Mail className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold">Email</h4>
//                   <a
//                     href="mailto:zarishsuleman@gmail.com"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     zarishsuleman@gmail.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="p-3 bg-primary/20 rounded-lg">
//                   <Phone className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold">Phone</h4>
//                   <a
//                     href="tel:+18254497651"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     825-449-7651
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="p-3 bg-primary/20 rounded-lg">
//                   <MapPin className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold">Location</h4>
//                   <span className="text-muted-foreground">Calgary, Alberta, Canada</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <Card className="card-shadow">
//             <CardHeader>
//               <CardTitle>Send a Message</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="name"> Name</Label>
//                     <Input id="name" name="name" placeholder="Your name" required />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="email">Email</Label>
//                   <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="subject">Subject</Label>
//                   <Input id="subject" name="subject" placeholder="What's this about?" required />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="message">Message</Label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     placeholder="Tell me about your project or just say hello!"
//                     className="min-h-[120px]"
//                     required
//                   />
//                 </div>

//                 <Button type="submit" className="w-full glow-effect">
//                   <Send className="h-4 w-4 mr-2" />
//                   Send Message
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { useRef, useEffect, useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const envPublicKey = import.meta.env.VITE_NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (envPublicKey) {
      emailjs.init(envPublicKey);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    const envPublicKey = import.meta.env.VITE_NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const envServiceId = import.meta.env.VITE_NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const envTemplateId = import.meta.env.VITE_NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    if (!envPublicKey || !envServiceId || !envTemplateId) {
      toast({
        title: "Configuration Error",
        description: "EmailJS is not properly configured.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(envServiceId, envTemplateId, formRef.current, envPublicKey);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      formRef.current.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="gradient-text">Let's Connect</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info - Order 2 on mobile */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                I'm always open to discussing new opportunities, interesting projects,
                or just having a conversation about technology. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-primary/20 rounded-lg flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-sm sm:text-base">Email</h4>
                  <a
                    href="mailto:zarishsuleman@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm break-all"
                  >
                    zarishsuleman@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-primary/20 rounded-lg flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-sm sm:text-base">Phone</h4>
                  <a
                    href="tel:+18254497651"
                    className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                  >
                    825-449-7651
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-primary/20 rounded-lg flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-sm sm:text-base">Location</h4>
                  <span className="text-muted-foreground text-xs sm:text-sm">Calgary, Alberta, Canada</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Order 1 on mobile */}
          <Card className="card-shadow order-1 lg:order-2">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm">Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Your name" 
                    required 
                    className="text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    required 
                    className="text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    placeholder="What's this about?" 
                    required 
                    className="text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello!"
                    className="min-h-[100px] sm:min-h-[120px] text-sm sm:text-base resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full glow-effect text-sm sm:text-base" 
                  disabled={isSubmitting}
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
