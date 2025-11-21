"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  Award,
  Briefcase,
  GraduationCap,
  Code,
} from "lucide-react";

const activities = [
  {
    icon: <Trophy size={24} />,
    title: "Kabaddi Tournament Champion",
    description:
      "Won kabaddi tournament as captain among 60 teams conducted by local Lalganj School Committee",
    year: "2020",
    color: "cyan",
  },
  {
    icon: <GraduationCap size={24} />,
    title: "NSS Sustainable Development Program",
    description:
      "Successfully completed a year-long program in sustainable development under the National Service Scheme",
    year: "2022",
    color: "purple",
  },
  {
    icon: <Briefcase size={24} />,
    title: "Advanced Excel Workshop",
    description:
      "Attended a 10-hour Advanced Excel workshop by the Corporate Finance Institute, gaining clear knowledge",
    year: "2023",
    color: "cyan",
  },
  {
    icon: <Award size={24} />,
    title: "Gyrations GC Dance Competition",
    description:
      "Awarded the 1st overall position out of 15+ hostel teams in the prestigious dance competition",
    year: "2024",
    color: "purple",
  },
  {
    icon: <Users size={24} />,
    title: "WnCC Summer of Code Mentor",
    description:
      "Mentored 7+ students to successfully develop a multi-language online code editor",
    year: "2024",
    color: "cyan",
  },
  {
    icon: <Code size={24} />,
    title: "Machine Learning with TensorFlow",
    description:
      "Applied machine learning techniques with TensorFlow and neural networks during WnCC Summer of Code",
    year: "2024",
    color: "purple",
  },
];

export default function Activities() {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="activities">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.03, 0.1, 0.03],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Extra-Curricular Activities
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`glass-card p-6 rounded-xl hover:border-${activity.color}-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-500 group relative overflow-hidden`}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-${activity.color}-500/5 to-transparent`}
                />
              </div>

              <div className="relative z-10">
                {/* Icon and Year */}
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`p-3 rounded-lg bg-${activity.color}-400/10 text-${activity.color}-400`}
                  >
                    {activity.icon}
                  </motion.div>
                  <span
                    className={`text-sm font-mono font-bold text-${activity.color}-400`}
                  >
                    {activity.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {activity.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>

              {/* Floating particle effect */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-1 h-1 bg-${activity.color}-400/40 rounded-full opacity-0 group-hover:opacity-100`}
                  style={{
                    left: `${30 + i * 20}%`,
                    bottom: "20%",
                  }}
                  animate={{
                    y: [0, -40, -80],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
