import { userData } from "./userData";
import { Github, Instagram } from "lucide-react";
import { BackgroundGrid } from "./BackgroundGrid";
import { motion } from "framer-motion";
import { MiniTerminal } from "./MiniTerminal";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-slate-950">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <BackgroundGrid />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content (Text) */}
        <motion.div
          className="text-center lg:text-left lg:w-3/5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium animate-bounce"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Available for new opportunities
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Designing the <span className="bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent italic">Future</span> of Web.
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Hi, I'm <span className="text-white font-semibold">{userData.name}</span>. {userData.bio}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a href="#projects" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-600/25">
              View My Work
            </a>
            <div className="flex gap-4">
              <a href={`https://github.com/${userData.username}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="p-4 bg-slate-800/50 hover:bg-slate-800 text-white rounded-xl border border-slate-700 transition-all">
                <Github size={24} />
              </a>
              <a href="https://www.instagram.com/s.a.u.r.a.b_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="p-4 bg-slate-800/50 hover:bg-slate-800 text-white rounded-xl border border-slate-700 transition-all">
                <Instagram size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content (Terminal) */}
        <div className="lg:w-2/5 flex justify-center lg:justify-end w-full">
          <MiniTerminal />
        </div>
      </div>
    </section>
  );
}