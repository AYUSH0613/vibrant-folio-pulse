
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  image?: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "Customer Segmentation Analysis",
      description: "Using clustering techniques to identify customer groups based on purchasing behaviors and demographics.",
      technologies: ["R", "ggplot2", "Data Analysis"],
      githubUrl: "https://github.com/AYUSH0613/Customer-Segmentation-Analysis",
      image: "/placeholder.svg"
    },
    {
      title: "Dice Battle Game",
      description: "Java console-based dice competition game with multiple game modes and AI opponents.",
      technologies: ["Java", "Console", "Game Development"],
      githubUrl: "https://github.com/AYUSH0613/DiceBattle",
      image: "/placeholder.svg"
    },
    {
      title: "Expense Tracker API",
      description: "RESTful API for tracking personal expenses with categories, reports, and user authentication.",
      technologies: ["Java", "Spring Boot", "H2 Database", "REST API"],
      githubUrl: "https://github.com/AYUSH0613",
      image: "/placeholder.svg"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 gradient-background relative">
      <div className="section-wave top absolute -top-1 left-0 right-0 z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Projects
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white/5 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex justify-center items-center">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="rounded-lg w-full max-w-[200px] h-auto object-cover aspect-square bg-white/10"
                  />
                </div>
                
                <div className="md:w-3/4 space-y-4">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 my-3">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="bg-purple-500/20 text-purple-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <p className="text-gray-300">{project.description}</p>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-white/10 hover:bg-white/20 border-white/20 text-white mt-4"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="section-wave bottom absolute -bottom-1 left-0 right-0 z-10"></div>
    </section>
  );
};
