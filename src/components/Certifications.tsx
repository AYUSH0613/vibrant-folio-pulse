
import { motion } from "framer-motion";

interface Certification {
  title: string;
  provider: string;
  date: string;
}

export const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "Supervised ML",
      provider: "DeepLearning.AI",
      date: "Sep 2024"
    },
    {
      title: "Cloud Security",
      provider: "NPTEL",
      date: "Oct 2024"
    },
    {
      title: "DSA",
      provider: "Board Infinity",
      date: "July 2024"
    },
    {
      title: "Computer Architecture",
      provider: "Udemy",
      date: "Feb 2024"
    },
    {
      title: "Problem Solving",
      provider: "HackerRank",
      date: "Feb 2025"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="cert-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="font-semibold text-white mb-1">{cert.title}</h3>
              <p className="text-sm text-purple-300 mb-1">{cert.provider}</p>
              <p className="text-xs text-gray-400">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="section-wave top absolute -top-1 left-0 right-0 z-10"></div>
    </section>
  );
};
