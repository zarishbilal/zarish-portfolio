"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send } from "lucide-react";
import { contactInfo } from "@/config/contactInfo";
import useContactForm from "@/hooks/useContactForm";

const styles = {
  input:
    "w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#701925] transition-all",
  label: "block text-sm font-medium mb-2",
  iconContainer:
    "w-12 h-12 rounded-full bg-[#701925] flex items-center justify-center group-hover:bg-[#8c1f2f] transition-colors",
  submitButton: (isSubmitting) => `
    w-full py-3 rounded-lg flex items-center justify-center space-x-2 
    ${isSubmitting ? "bg-gray-500" : "bg-[#701925] hover:bg-[#8c1f2f]"}
    transition-colors duration-300
  `,
};

export default function ContactSection() {
  const {
    formData,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
  } = useContactForm();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    initialInView: false,
  });

  return (
    <motion.div
      ref={ref}
      key={inView ? "visible" : "hidden"}
      className="relative min-h-screen bg-black text-white py-16 px-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 gap-4 w-full h-full">
          {[...Array(64)].map((_, i) => (
            <motion.div
              key={i}
              className="w-8 h-8 bg-white rounded-full"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 0.1,
                  transition: { delay: i * 0.01 },
                },
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
          className="text-5xl font-bold mb-12 text-center"
          style={{ fontFamily: '"Julius Sans One", sans-serif' }}
        >
          Let&apos;s Connect
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.2 },
              },
            }}
            className="bg-[#701925]/20 p-8 rounded-lg backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                />
              </div>
              <div>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                />
              </div>
              <div>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className={styles.input}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton(isSubmitting)}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send className="w-4 h-4 ml-2" />
              </button>
              {submitStatus === "success" && (
                <p className="text-green-500 text-center">
                  Message sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-500 text-center">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.4 },
              },
            }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 group"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, delay: 0.2 + index * 0.1 },
                    },
                  }}
                >
                  <div className={styles.iconContainer}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-lg group-hover:text-[#8c1f2f] transition-colors">
                    {item.text}
                  </span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
