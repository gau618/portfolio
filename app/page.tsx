"use client";

import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import ProjectGrid from "@/components/ProjectGrid";
import Skills from "@/components/Skills";
import Activities from "@/components/Activities";
import { motion, useScroll, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Download } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="min-h-screen relative">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.08, 0.03],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.08, 0.03],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.02, 0.06, 0.02],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"
        />
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.5, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-40 backdrop-blur-md bg-slate-950/50 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-bold text-xl tracking-tighter cursor-pointer"
          >
            <span className="text-cyan-400">DEV</span>
            <span className="text-white">PORTFOLIO</span>
          </motion.div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.1, y: -2 }}
              className="hover:text-cyan-400 transition-colors relative group"
            >
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.1, y: -2 }}
              className="hover:text-purple-400 transition-colors relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300" />
            </motion.a>
            <motion.a
              href="#skills"
              whileHover={{ scale: 1.1, y: -2 }}
              className="hover:text-cyan-400 transition-colors relative group"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </motion.a>
            <motion.a
              href="#activities"
              whileHover={{ scale: 1.1, y: -2 }}
              className="hover:text-purple-400 transition-colors relative group"
            >
              Activities
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300" />
            </motion.a>
          </div>
          <motion.a
            href="/Placement_Resume.pdf"
            download="Placement_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300"
          >
            <Download size={16} />
            Resume
          </motion.a>
        </div>
      </motion.nav>

      <Hero />
      <Timeline />
      <ProjectGrid />
      <Skills />
      <Activities />

      {/* Enhanced Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-12 border-t border-slate-800 mt-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />

        {/* Ambient glow */}
        <motion.div
          animate={{ opacity: [0.02, 0.06, 0.02], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"
        />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h3 className="text-xl font-bold mb-2">
                <span className="text-cyan-400">DEV</span>
                <span className="text-white">PORTFOLIO</span>
              </h3>
              <p className="text-slate-400 text-sm">
                Building the future, one line at a time.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <div className="flex flex-col gap-2 text-sm text-slate-400">
                <a
                  href="#experience"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Skills
                </a>
                <a
                  href="#activities"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Activities
                </a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center md:text-right"
            >
              <h4 className="text-white font-semibold mb-3">Connect</h4>
              <div className="flex gap-4 justify-center md:justify-end">
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href="https://github.com/gau618"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/50 hover:bg-cyan-400/10 text-slate-400 hover:text-cyan-400 transition-all"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  href="https://www.linkedin.com/in/gaurav-kannaujiya-iitb-ab43a8263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/50 hover:bg-cyan-400/10 text-slate-400 hover:text-cyan-400 transition-all"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href="mailto:gauravkannaujiya81@gmail.com"
                  className="p-2 rounded-lg bg-slate-800/50 hover:bg-purple-400/10 text-slate-400 hover:text-purple-400 transition-all"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm"
          >
            <p>
              © 2025 Portfolio. Built with Next.js, Tailwind & Framer Motion.
            </p>
            <p className="mt-2 text-xs">
              Designed & Developed by{" "}
              <span className="text-cyan-400">Gaurav</span> | IIT Bombay
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </main>
  );
}
