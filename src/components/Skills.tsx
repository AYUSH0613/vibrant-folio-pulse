
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface Skill {
  name: string;
  link: string;
  icon?: string;
}

export const Skills = () => {
  const skills: Skill[] = [
    { name: "Java", link: "https://www.oracle.com/java/" },
    { name: "Python", link: "https://www.python.org/doc/" },
    { name: "C++", link: "https://cplusplus.com/doc/" },
    { name: "R", link: "https://www.r-project.org/" },
    { name: "Spring Boot", link: "https://spring.io/projects/spring-boot" },
    { name: "MySQL", link: "https://dev.mysql.com/doc/" },
    { name: "H2 DB", link: "https://www.h2database.com/html/main.html" },
    { name: "REST APIs", link: "https://restfulapi.net/" },
    { name: "DSA", link: "https://www.geeksforgeeks.org/data-structures/" },
    { name: "Tableau", link: "https://www.tableau.com/learn/training" },
    { name: "RStudio", link: "https://posit.co/download/rstudio-desktop/" },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Skills
        </motion.h2>

        <motion.div 
          className="flex flex-wrap gap-3 md:gap-4 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href={skill.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="skill-tag"
                  >
                    {skill.name}
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Learn more</p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
