
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "ayushparoliya2004@gmail.com",
      link: "mailto:ayushparoliya2004@gmail.com"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/ayush-gupta13",
      link: "https://linkedin.com/in/ayush-gupta13"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/AYUSH0613",
      link: "https://github.com/AYUSH0613"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 gradient-background relative">
      <div className="section-wave top absolute -top-1 left-0 right-0 z-10"></div>
      
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Contact
        </motion.h2>

        <motion.div 
          className="space-y-6 md:space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center gap-3 hover-scale"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="p-2 rounded-full bg-white/10">
                {item.icon}
              </div>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-purple-300 transition-colors"
              >
                {item.value}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
