"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { emailConfig } from "@/config/emailjs";

const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(emailConfig.publicKey);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format current time
    const now = new Date();
    const timeString = now.toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const templateParams = {
      name: formData.name, // Matches {{name}} in template
      time: timeString, // Matches {{time}} in template
      message: formData.message, // Matches {{message}} in template
      email: formData.email, // Additional info for you to reply to
    };

    try {
      console.log("Sending email with params:", templateParams); // Debug log
      const response = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return {
    formData,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
  };
};

export default useContactForm;
