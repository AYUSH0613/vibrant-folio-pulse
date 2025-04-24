import { motion } from "framer-motion";
import { Card } from "./ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 gradient-background relative">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">About Me</h2>
        <Card className="p-8 backdrop-blur-md bg-white/10 hover-scale">
          <p className="text-lg leading-relaxed text-gray-200 mb-4">
            I'm <strong>Ayush Gupta</strong>, a B.Tech student in Computer Science Engineering at 
            Lovely Professional University, specializing in Data Science. I’m passionate about backend development and 
            solving real-world problems through clean, efficient, and scalable code.
          </p>
          <p className="text-lg leading-relaxed text-gray-200 mb-4">
            Skilled in <strong>Java</strong>, <strong>Spring Boot</strong>, and <strong>MySQL</strong>, 
            I enjoy building RESTful APIs and working with databases. I have a strong grasp of 
            <strong> Data Structures and Algorithms</strong>, with over <strong>350+ problems solved</strong> on 
            LeetCode and certifications in Java and Problem Solving from HackerRank.
          </p>
          <p className="text-lg leading-relaxed text-gray-200">
            I love <strong>learning</strong>, <strong>building</strong>, and continuously improving as a developer.
          </p>
        </Card>
      </motion.div>

      {/* Optional: Add image or Lottie animation next to the card for visual enhancement */}
      <div className="section-wave bottom absolute -bottom-1 left-0 right-0 z-10"></div>
    </section>
  );
};
