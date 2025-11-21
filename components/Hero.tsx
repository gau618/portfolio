"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Terminal,
  Cpu,
  TrendingUp,
  Award,
  Sparkles,
  Download,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const x1 = useTransform(mouseX, [0, dimensions.width], [-30, 30]);
  const y1 = useTransform(mouseY, [0, dimensions.height], [-30, 30]);
  const x2 = useTransform(mouseX, [0, dimensions.width], [30, -30]);
  const y2 = useTransform(mouseY, [0, dimensions.height], [30, -30]);
  const x3 = useTransform(mouseX, [0, dimensions.width], [-15, 15]);
  const y3 = useTransform(mouseY, [0, dimensions.height], [-15, 15]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 py-20">
      {/* Enhanced Background Elements with Parallax */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* Cursor spotlight that directly follows mouse */}
        <motion.div
          animate={{
            x: cursorPos.x - 400,
            y: cursorPos.y - 400,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 25,
            mass: 0.5,
          }}
          className="absolute w-[800px] h-[800px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.12) 0%, rgba(192,132,252,0.08) 35%, rgba(168,85,247,0.04) 60%, transparent 80%)",
          }}
        />
        {/* Main cyan orb - follows mouse with parallax */}
        <motion.div
          style={{ x: x1, y: y1 }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/[0.22] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.22, 0.35, 0.22],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Main purple orb - inverse mouse follow */}
        <motion.div
          style={{ x: x2, y: y2 }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/[0.22] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.22, 0.35, 0.22],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        {/* Center rotating gradient */}
        <motion.div
          style={{ x: x3, y: y3 }}
          transition={{ type: "spring", stiffness: 120, damping: 25 }}
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          animate={{
            background: [
              "radial-gradient(circle, rgba(34,211,238,0.15) 0%, rgba(192,132,252,0.12) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(192,132,252,0.15) 0%, rgba(34,211,238,0.12) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(34,211,238,0.15) 0%, rgba(192,132,252,0.12) 50%, transparent 100%)",
            ],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        {/* Additional accent orbs */}
        <motion.div
          style={{
            x: useTransform(mouseX, [0, dimensions.width], [30, -30]),
            y: useTransform(mouseY, [0, dimensions.height], [20, -20]),
          }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="absolute top-1/3 right-1/3 w-80 h-80 bg-cyan-400/[0.18] rounded-full blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.18, 0.3, 0.18],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          style={{
            x: useTransform(mouseX, [0, dimensions.width], [-35, 35]),
            y: useTransform(mouseY, [0, dimensions.height], [-25, 25]),
          }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-purple-400/[0.18] rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.18, 0.3, 0.18],
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        />
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/[0.36] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="z-10 max-w-5xl w-full text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-cyan-400 text-sm font-medium mb-4"
        >
          <Terminal size={16} />
          <span>Principal Frontend Engineer & Creative Developer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400"
        >
          Architecting Scalable Fintech <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            & Next-Gen AI Systems
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto"
        >
          IIT Bombay Undergraduate | Specialist in Real-time Trading Engines,
          RAG Pipelines, and System Design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="glass-card px-6 py-4 rounded-xl flex items-center gap-3 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300 cursor-pointer"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Award className="text-cyan-400" size={24} />
            </motion.div>
            <div className="text-left">
              <p className="text-xs text-slate-400 uppercase tracking-wider">
                JEE Advanced 2022
              </p>
              <p className="font-bold text-white">
                Top 7.18%{" "}
                <span className="text-slate-500 text-sm font-normal">
                  (0.25M candidates)
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="glass-card px-6 py-4 rounded-xl flex items-center gap-3 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(192,132,252,0.3)] transition-all duration-300 cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            >
              <TrendingUp className="text-purple-400" size={24} />
            </motion.div>
            <div className="text-left">
              <p className="text-xs text-slate-400 uppercase tracking-wider">
                JEE Main 2022
              </p>
              <p className="font-bold text-white">
                98.68%ile{" "}
                <span className="text-slate-500 text-sm font-normal">
                  (0.9M candidates)
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
