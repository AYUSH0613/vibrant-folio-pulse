
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";

interface Certification {
  title: string;
  platform: string;
  date: string;
  url: string;
  description: string;
}

export const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "Supervised Machine Learning: Regression and Classification",
      platform: "Coursera",
      date: "Sep 2024",
      url: "https://www.coursera.org/account/accomplishments/certificate/AMG6EJO7EVCW",
      description: "Fundamental concepts of supervised machine learning, focusing on regression and classification algorithms."
    },
    {
      title: "Computer Architecture and Organization Masterclass",
      platform: "Udemy",
      date: "Feb 2024",
      url: "https://www.udemy.com/certificate/UC-067959ea-ba31-4133-9057-586272ce026b/",
      description: "Comprehensive study of computer organization, architecture, and system design principles."
    },
    {
      title: "Problem Solving",
      platform: "HackerRank",
      date: "Feb 2025",
      url: "https://www.hackerrank.com/certificates/iframe/3fbaaa0714b8",
      description: "Advanced problem-solving skills using data structures and algorithms."
    },
    {
      title: "Privacy and Security of Social Media and Cloud Computing",
      platform: "Coursera/NPTEL",
      date: "Oct 2024",
      url: "https://www.coursera.org/account/accomplishments/certificate/E3MZM75NVJXU",
      description: "Security challenges and solutions in social media platforms and cloud computing environments."
    },
    {
      title: "Data Structures & Algorithms",
      platform: "Coursera/Board Infinity",
      date: "July 2024",
      url: "https://www.coursera.org/account/accomplishments/certificate/GG2824L3M2QP",
      description: "Implementation and analysis of core data structures and algorithms in problem-solving scenarios."
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-background relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="perspective-1000"
            >
              <HoverCard openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <Card className="h-full bg-white/5 hover:bg-white/10 transition-all duration-300 border-purple-500/20 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Award className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                        <div className="space-y-2">
                          <h3 className="font-semibold text-lg text-white leading-tight">
                            {cert.title}
                          </h3>
                          <p className="text-sm text-purple-300">
                            {cert.platform}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 backdrop-blur-md bg-black/80 border-purple-500/30 text-white">
                  <div className="space-y-3">
                    <h4 className="font-medium text-purple-300">{cert.platform}</h4>
                    <p className="text-xs text-gray-300">{cert.date}</p>
                    <p className="text-sm">{cert.description}</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-2 w-full bg-purple-900/50 hover:bg-purple-800/50 border-purple-500/30"
                      onClick={() => window.open(cert.url, "_blank")}
                    >
                      View Certificate
                    </Button>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
