"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      "Python",
      "C++",
      "C",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SQL",
      "Bootstrap 5.2",
      "Tailwind",
      "LaTeX",
    ],
    color: "cyan",
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "ReactJS",
      "NextJS",
      "NodeJS",
      "ExpressJS",
      "Material UI",
      "Numpy",
      "Pandas",
      "Matplotlib",
    ],
    color: "purple",
  },
  {
    title: "Databases & ORM",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Prisma",
      "Redis",
      "Firebase Firestore",
      "Supabase",
    ],
    color: "cyan",
  },
  {
    title: "Tools",
    skills: [
      "Visual Studio Code",
      "Postman",
      "Docker",
      "Cursor",
      "Arduino IDE",
      "Figma",
      "Fusion",
      "Canva",
    ],
    color: "purple",
  },
];

export default function Skills() {
  return (
    <section className="py-20 px-4 bg-slate-950/50" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Arsenal
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card p-6 rounded-xl hover:border-${category.color}-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-500 relative overflow-hidden group"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-${category.color}-500/5 to-transparent`}
                />
              </div>
              <div className="relative z-10">
                <motion.h3
                  initial={{ x: -20 }}
                  whileInView={{ x: 0 }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                  className={`text-xl font-bold mb-6 text-${category.color}-400 border-b border-slate-800 pb-2`}
                >
                  {category.title}
                </motion.h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + skillIdx * 0.03 }}
                      whileHover={{
                        scale: 1.15,
                        y: -3,
                        borderColor: `rgba(34, 211, 238, 0.5)`,
                        boxShadow: `0 0 20px rgba(34, 211, 238, 0.3)`,
                      }}
                      className="px-3 py-1.5 rounded-lg bg-slate-900/50 border border-slate-700 text-slate-300 text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="glass-card p-8 rounded-2xl border-t-4 border-t-purple-500 hover:border-t-cyan-500 hover:shadow-[0_0_40px_rgba(192,132,252,0.3)] transition-all duration-700 relative overflow-hidden group"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-transparent" />
          </div>
          <div className="relative z-10">
            <motion.h3
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-2xl font-bold text-white mb-6 text-center"
            >
              Leadership & Impact
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                  className="text-4xl font-bold text-purple-400 mb-2"
                >
                  10,000+
                </motion.div>
                <p className="text-slate-400">Visitors Managed at Techfest</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="p-4 border-l-0 md:border-l border-r-0 md:border-r border-slate-800"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                  className="text-4xl font-bold text-cyan-400 mb-2"
                >
                  40,000+
                </motion.div>
                <p className="text-slate-400">
                  Students Impacted via Ed-Conclave
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="p-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                  className="text-4xl font-bold text-purple-400 mb-2"
                >
                  3,000+
                </motion.div>
                <p className="text-slate-400">Workshop Participants</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
