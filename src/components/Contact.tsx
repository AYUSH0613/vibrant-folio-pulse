
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

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
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Agra, Uttar Pradesh",
      link: "https://goo.gl/maps/WoqTLrm8EpZyCbHj9"
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="bg-white/5 border-white/10 backdrop-blur-md">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  {contactInfo.slice(0, 2).map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 hover-scale group"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="p-2 rounded-full bg-white/10 group-hover:bg-purple-500/20 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">{item.label}</p>
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-white hover:text-purple-300 transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="space-y-6">
                  {contactInfo.slice(2).map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 hover-scale group"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: (index + 2) * 0.1 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="p-2 rounded-full bg-white/10 group-hover:bg-purple-500/20 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">{item.label}</p>
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-white hover:text-purple-300 transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.p 
                className="text-center mt-8 text-purple-200 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                Feel free to connect for collaborations or questions!
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
