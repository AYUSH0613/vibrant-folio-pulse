
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    link: string;
  }[];
}

export const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      skills: [
        { name: "Java", link: "https://www.oracle.com/java/" },
        { name: "Python", link: "https://www.python.org/doc/" },
        { name: "C++", link: "https://cplusplus.com/doc/" },
        { name: "R", link: "https://www.r-project.org/" },
      ]
    },
    {
      name: "Frameworks & Tools",
      skills: [
        { name: "Spring Boot", link: "https://spring.io/projects/spring-boot" },
        { name: "Tableau", link: "https://www.tableau.com/learn/training" },
        { name: "RStudio", link: "https://posit.co/download/rstudio-desktop/" },
      ]
    },
    {
      name: "Databases",
      skills: [
        { name: "MySQL", link: "https://dev.mysql.com/doc/" },
        { name: "H2 Database", link: "https://www.h2database.com/html/main.html" },
        { name: "Oracle", link: "https://www.oracle.com/database/" },
      ]
    }
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white/5 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-300 text-center">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 + categoryIndex * 0.2 }}
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
                        <p>Learn more about {skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
