
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  image?: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "Customer Segmentation Analysis",
      description: "Using clustering techniques to identify customer groups based on purchasing behaviors and demographics.",
      longDescription: "This project leverages K-means clustering algorithm to analyze customer purchasing patterns and demographic information. The analysis helps businesses identify distinct customer segments for targeted marketing strategies. Visualizations are created using ggplot2 to present the findings effectively.",
      technologies: ["R", "ggplot2", "K-means Clustering", "Data Analysis"],
      githubUrl: "https://github.com/AYUSH0613/Customer-Segmentation-Analysis",
      image: "/placeholder.svg"
    },
    {
      title: "Dice Battle Game",
      description: "Java console-based dice competition game with multiple game modes and AI opponents.",
      longDescription: "A command-line game built in Java that simulates dice battles between players. Features include multiple difficulty levels, AI opponents with different strategies, and various game modes including tournament play. The project demonstrates object-oriented programming principles and game logic implementation.",
      technologies: ["Java", "Console", "Game Development", "Object-Oriented Programming"],
      githubUrl: "https://github.com/AYUSH0613/DiceBattle",
      image: "/placeholder.svg"
    },
    {
      title: "Expense Tracker API",
      description: "RESTful API for tracking personal expenses with categories, reports, and user authentication.",
      longDescription: "A comprehensive backend service built with Spring Boot that allows users to track their expenses. Features include expense categorization, monthly/yearly reports, budget alerts, and secure user authentication. The API is fully documented with Swagger and uses H2 Database for data persistence.",
      technologies: ["Java", "Spring Boot", "H2 Database", "REST API", "JWT Authentication"],
      githubUrl: "https://github.com/AYUSH0613",
      image: "/placeholder.svg"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 gradient-background relative overflow-visible">
      <div className="section-wave top absolute -top-1 left-0 right-0 z-10"></div>
      
      <div className="max-w-6xl mx-auto relative">
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
              className="bg-black/30 rounded-xl p-6 backdrop-blur-sm border border-white/10"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex justify-center items-center">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="rounded-lg w-full max-w-[200px] h-auto object-cover aspect-square bg-purple-500/20"
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
                  
                  <div className="mt-2 text-sm text-gray-400">
                    <p>{project.longDescription}</p>
                  </div>
                  
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
