
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center relative px-4">
      <div className="max-w-4xl mx-auto fade-in">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Creative Developer & Designer
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Crafting beautiful digital experiences through code and design
        </motion.p>
        <Button 
          className="hover-scale bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Learn More <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};
