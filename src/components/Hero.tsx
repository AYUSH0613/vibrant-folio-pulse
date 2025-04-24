
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown, FileText, Rocket } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative tech-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 py-20 z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm Ayush Gupta 👋
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Java Developer • Problem Solver • Backend Enthusiast • Data Science Enthusiast
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button 
              className="hover-scale bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <FileText className="mr-2 h-4 w-4" /> View Resume
            </Button>
            <Button 
              className="hover-scale bg-purple-600/70 backdrop-blur-sm text-white hover:bg-purple-600/90"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Rocket className="mr-2 h-4 w-4" /> View Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div 
        className="absolute bottom-0 left-0 right-0 z-20"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex justify-center mb-8 cursor-pointer"
        >
          <ArrowDown className="h-8 w-8 text-white/60 hover:text-white transition-colors" />
        </motion.div>
      </div>
    </section>
  );
};
