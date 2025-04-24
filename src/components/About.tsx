
import { motion } from "framer-motion";
import { Card } from "./ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 gradient-background relative">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">About Me</h2>
        <Card className="p-8 backdrop-blur-md bg-white/10 hover-scale">
          <p className="text-lg leading-relaxed text-gray-200 mb-4">
            Ayush Gupta is a Computer Science Engineering student at LPU with a passion for backend 
            development and data structures.
          </p>
          <p className="text-lg leading-relaxed text-gray-200 mb-4">
            He enjoys building scalable REST APIs with Java and Spring Boot.
          </p>
          <p className="text-lg leading-relaxed text-gray-200">
            He actively solves DSA problems and participates in competitive coding challenges.
          </p>
        </Card>
      </motion.div>
      <div className="section-wave bottom absolute -bottom-1 left-0 right-0 z-10"></div>
    </section>
  );
};
