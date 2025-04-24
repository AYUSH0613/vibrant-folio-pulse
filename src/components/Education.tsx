
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Education
        </motion.h2>

        <div className="space-y-12">
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-purple-500/20 p-2 rounded-full">
                <GraduationCap className="h-6 w-6 text-purple-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  B.Tech in Computer Science Engineering
                </h3>
                <h4 className="text-purple-300 mb-2">Lovely Professional University, Punjab</h4>
                <ul className="text-gray-300 list-disc list-inside space-y-1">
                  <li>Specialization: Data Science and Engineering</li>
                  <li>CGPA: 7.70</li>
                  <li>Sep 2022 – Present</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-purple-500/20 p-2 rounded-full">
                <GraduationCap className="h-6 w-6 text-purple-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Intermediate (12th Grade)
                </h3>
                <h4 className="text-purple-300 mb-2">H.P.R.R Adarsh Inter College, Agra, Uttar Pradesh</h4>
                <ul className="text-gray-300 list-disc list-inside space-y-1">
                  <li>Percentage: 76%</li>
                  <li>2019 – 2021</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
