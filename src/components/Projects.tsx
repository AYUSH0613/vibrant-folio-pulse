
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "./ui/button";

interface Project {
  title: string;
  description: string;
  githubUrl: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "Customer Segmentation Analysis",
      description: "Clustering analysis in R using k-means and ggplot2",
      githubUrl: "https://github.com/AYUSH0613/Customer-Segmentation-Analysis"
    },
    {
      title: "Dice Battle Game",
      description: "Java-based game application simulating a dice competition",
      githubUrl: "https://github.com/AYUSH0613/DiceBattle"
    },
    {
      title: "Expense Tracker API",
      description: "Built using Spring Boot and H2 database for managing personal finances",
      githubUrl: "https://github.com/AYUSH0613"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 gradient-background relative">
      <div className="section-wave top absolute -top-1 left-0 right-0 z-10"></div>
      
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-lg font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-white/10 hover:bg-white/20 border-white/20 text-white"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <Github className="mr-2 h-4 w-4" /> View on GitHub
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="section-wave bottom absolute -bottom-1 left-0 right-0 z-10"></div>
    </section>
  );
};
