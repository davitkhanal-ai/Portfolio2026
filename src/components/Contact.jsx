import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_sitlcnw", // replace with your EmailJS Service ID
        "template_dsux1t8", // your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "-ebBo0_y5Ql-YAbO7" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // reset form
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden py-24 px-6"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-papaya/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Let's make some table's and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-papaya to-orange-600">
              add rows there
            </span>
            .
          </h2>
          <p className="text-gray-400 text-xl">
            Open for collaborations and technical consulting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-papaya transition-colors"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-papaya transition-colors"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-papaya transition-colors"
                placeholder="How can i help you..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-papaya hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center md:items-start space-y-8"
          >
            <div className="flex gap-6">
              <a
                target="_blank"
                href="https://github.com/davitkhanal-ai"
                className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:text-papaya transition-all group"
              >
                <Github
                  size={24}
                  className="text-gray-300 group-hover:text-papaya"
                />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/davitkhanal/"
                className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:text-cyan transition-all group"
              >
                <Linkedin
                  size={24}
                  className="text-gray-300 group-hover:text-cyan"
                />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:text-papaya transition-all group"
              >
                <Code
                  size={24}
                  className="text-gray-300 group-hover:text-papaya"
                />
              </a>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-white font-bold text-xl mb-2">
                Contact Details
              </h3>
              <a
                href="mailto:khanaldavit@gmail.com"
                className="text-gray-400 hover:text-white transition-colors block mb-4"
              >
                khanaldavit@gmail.com
              </a>
              <a
                href="/Davit Khanal_Curriculum Vitae.pdf" // replace with your actual file name in public folder
                download
                className="px-8 py-3 border border-cyan text-cyan hover:bg-cyan/10 rounded-full font-medium transition-colors inline-block text-center"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
