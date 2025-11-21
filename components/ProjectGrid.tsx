"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Code2,
  Cpu,
  Database,
  Video,
  Brain,
} from "lucide-react";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: ReactNode;
  color: "cyan" | "purple";
  size: "large" | "medium" | "small";
  repo?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "CollabCode Pro",
    subtitle: "Real-time Collaborative AI IDE",
    description:
      "A collaborative IDE with Yjs, Docker Sandboxes, and Gemini AI. Features virtual terminal, code execution pipeline, and video conferencing.",
    tags: ["Next.js", "Yjs", "Docker", "Redis", "Gemini AI", "LiveKit"],
    icon: <Code2 size={24} />,
    color: "cyan",
    size: "large",
    repo: "https://github.com/gau618/https---github.com-gau618-code_collab",
  },
  {
    title: "NextHire AI",
    subtitle: "AI Interview Platform",
    description:
      "Production-grade interview platform with Gemini 2.0 orchestration, JWT Auth, and real-time analytics for data-driven hiring.",
    tags: ["Gemini 2.0", "JWT", "Analytics", "React"],
    icon: <Brain size={24} />,
    color: "purple",
    size: "medium",
    repo: "https://github.com/gau618/frontend",
  },
  {
    title: "QueryWise",
    subtitle: "RAG Research System",
    description:
      "RAG system using Elasticsearch (800-token chunks), LangChain, and Llama 3.2 for real-time question answering beyond training cutoff.",
    tags: ["LangChain", "Elasticsearch", "Llama 3.2", "RAG"],
    icon: <Database size={24} />,
    color: "cyan",
    size: "medium",
    repo: "https://github.com/gau618/RAG",
  },
  {
    title: "MovieLens",
    subtitle: "Intelligent Media DB",
    description:
      "AI Search converting natural language to TMDB filters. Features smart filtering and optimized state management.",
    tags: ["Node/Express", "Gemini", "TMDB", "Redux"],
    icon: <Video size={24} />,
    color: "purple",
    size: "small",
    repo: "https://github.com/gau618/MovieSite",
  },
  {
    title: "Emotion Sense",
    subtitle: "Real-time Emotion Detection",
    description:
      "CNN-based emotion detection model achieving 63% accuracy using Keras/TensorFlow and OpenCV for live video.",
    tags: ["CNN", "Keras", "OpenCV", "TensorFlow"],
    icon: <Brain size={24} />,
    color: "cyan",
    size: "small",
  },
  {
    title: "Line Follower Bot",
    subtitle: "Arduino Hardware Project",
    description:
      "Arduino-powered bot with differential steering. Secured Top 24 rank among 100+ teams.",
    tags: ["Arduino", "C++", "Hardware"],
    icon: <Cpu size={24} />,
    color: "purple",
    size: "small",
  },
  {
    title: "Algorithm Visualizer",
    subtitle: "Efficiency Analysis Dashboard",
    description:
      "React dashboard with metrics, charts, and customizable controls to analyze algorithm efficiency.",
    tags: ["React", "Algorithms", "Visualization"],
    icon: <Code2 size={24} />,
    color: "cyan",
    size: "small",
    repo: "https://github.com/gau618/SortingVisulizer",
  },
];

export default function ProjectGrid() {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="projects">
      {/* Background ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.04, 0.12, 0.04],
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.04, 0.12, 0.04],
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)] relative">
          {/* Floating particles in background */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full pointer-events-none"
              style={{
                left: `${(i * 25) % 100}%`,
                top: `${(i * 30) % 100}%`,
              }}
              animate={{
                y: [0, -80, 0],
                opacity: [0, 0.6, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{
                scale: 1.03,
                y: -8,
                rotateY: 2,
                transition: { duration: 0.3 },
              }}
              className={`glass-card rounded-xl p-6 flex flex-col justify-between group hover:bg-white/10 hover:border-${
                project.color
              }-500/40 hover:shadow-[0_8px_40px_rgba(34,211,238,0.15)] transition-all duration-500 relative overflow-hidden cursor-pointer before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-${
                project.color
              }-500/0 before:to-${
                project.color
              }-500/10 before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-500 ${
                project.size === "large"
                  ? "md:col-span-2 md:row-span-2"
                  : project.size === "medium"
                  ? "md:col-span-1 md:row-span-2"
                  : "md:col-span-1"
              }`}
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              {/* Energy particles on hover */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`energy-${i}`}
                  className={`absolute w-1.5 h-1.5 bg-${project.color}-400/60 rounded-full opacity-0 group-hover:opacity-100`}
                  style={{
                    left: `${10 + i * 12}%`,
                    top: "50%",
                  }}
                  animate={{
                    y: [0, -40, -80],
                    x: [
                      i % 2 === 0 ? -10 : 10,
                      i % 2 === 0 ? -20 : 20,
                      i % 2 === 0 ? -30 : 30,
                    ],
                    opacity: [0, 0.8, 0],
                    scale: [0.5, 1.2, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`p-3 rounded-lg bg-${project.color}-400/10 text-${project.color}-400 group-hover:bg-${project.color}-400/20 transition-all duration-300`}
                  >
                    {project.icon}
                  </motion.div>
                  <div className="flex gap-2">
                    {project.repo && (
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 12 }}
                        transition={{ type: "spring" }}
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors duration-300"
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: -12 }}
                        transition={{ type: "spring" }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-purple-400 cursor-pointer transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p
                  className={`text-sm font-mono text-${project.color}-400 mb-3`}
                >
                  {project.subtitle}
                </p>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
