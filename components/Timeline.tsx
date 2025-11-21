"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "TradeVed Fintech Labs",
    role: "Backend Developer Intern",
    period: "May '25 - Jul '25",
    description: "Unified wealthtech platform for retail traders.",
    achievements: [
      "Created a 96% accurate strategy visualizer calculating multi-leg options/futures P&L and Greeks.",
      "Built a scalable Socket.IO server with Redis adapter enabling real-time multiplayer trading games.",
      "Efficiently hosted on Contabo VPS with Nginx & SSL, cutting costs by 60%.",
      "Boosted overall platform stability and system security by 40%.",
    ],
    tech: ["Socket.IO", "Redis", "BullMQ", "Nginx", "VPS"],
    color: "cyan",
  },
  {
    id: 2,
    company: "Zerolag Private Limited",
    role: "Full-Stack Developer Intern",
    period: "Jan '25 - Mar '25",
    description:
      "Data-driven single-screen trading platform for Futures & Options.",
    achievements: [
      "Implemented the Black-76 model for futures pricing and Greeks calculation with high accuracy.",
      "Created a single-screen trading dashboard enabling real-time monitoring & widget customization.",
      "Designed a Django-based order placement system with models, endpoints, and business logics.",
    ],
    tech: ["Django", "Python", "Black-76 Model", "Full-Stack"],
    color: "purple",
  },
  {
    id: 3,
    company: "Teraforge Digital Lab LLP",
    role: "Full-Stack Web Developer Intern",
    period: "Jun '24 - Jul '24",
    description: "Startup delivering innovative end-to-end tech solutions.",
    achievements: [
      "Developed a car trading platform using ReactJS, enabling vehicle listing and detailed information.",
      "Built an intelligent chatbot to assist users in finding their dream cars by gathering preferences.",
      "Utilized Google Firebase backend for authentication, data storage, and real-time updates.",
    ],
    tech: ["ReactJS", "Firebase", "Chatbot", "Rest API"],
    color: "cyan",
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-20 relative overflow-hidden" id="experience">
      {/* Background ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-cyan-400 via-purple-400 to-cyan-400 origin-top shadow-[0_0_10px_rgba(34,211,238,0.5)]"
            />
          </div>
          {/* Glowing orb traveling along the line */}
          <motion.div
            style={{
              top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
            }}
            className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 ml-[1px] md:ml-[1px] pointer-events-none z-20"
          >
            <div className="w-full h-full bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Date Stamp (Desktop) */}
                <div
                  className={`hidden md:flex w-1/2 items-center px-8 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`text-lg font-mono ${
                      index % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    <span className={`text-${exp.color}-400 font-bold`}>
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Center Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.2,
                  }}
                  className="absolute left-4 md:left-1/2 w-8 h-8 bg-slate-950 border-2 border-slate-700 rounded-full -translate-x-1/2 ml-[3px] md:ml-[3px] flex items-center justify-center z-10"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        `0 0 0px rgba(34, 211, 238, 0.4)`,
                        `0 0 20px rgba(34, 211, 238, 0.8)`,
                        `0 0 0px rgba(34, 211, 238, 0.4)`,
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-3 h-3 rounded-full bg-${exp.color}-400`}
                  />
                </motion.div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-8">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`glass-card p-6 rounded-xl hover:border-${exp.color}-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-500 group relative overflow-hidden`}
                  >
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-${exp.color}-500/5 to-transparent`}
                      />
                    </div>
                    {/* Floating particles on hover */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-${exp.color}-400/40 rounded-full opacity-0 group-hover:opacity-100`}
                        style={{
                          left: `${20 + i * 15}%`,
                          bottom: "20%",
                        }}
                        animate={{
                          y: [0, -50, -100],
                          opacity: [0, 0.6, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                    {/* Shimmer effect on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      initial={false}
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                    </motion.div>
                    <div className="relative z-10">
                      <div className="flex flex-col gap-2 mb-4">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <h3
                            className={`text-xl font-bold text-${exp.color}-400`}
                          >
                            {exp.company}
                          </h3>
                          <span className="md:hidden text-sm font-mono text-slate-400">
                            {exp.period}
                          </span>
                        </div>
                        <h4 className="text-lg text-white font-medium flex items-center gap-2">
                          <Briefcase size={16} className="text-slate-400" />
                          {exp.role}
                        </h4>
                      </div>

                      <p className="text-slate-300 mb-4 text-sm italic">
                        {exp.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {exp.achievements.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-slate-400"
                          >
                            <ChevronRight
                              size={14}
                              className={`mt-1 shrink-0 text-${exp.color}-400`}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t, techIndex) => (
                          <motion.span
                            key={t}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.05 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className={`text-xs px-2 py-1 rounded-md bg-${exp.color}-400/10 text-${exp.color}-400 border border-${exp.color}-400/20 cursor-default transition-all`}
                          >
                            {t}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
