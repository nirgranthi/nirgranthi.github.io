import { userData, activeStyle } from "./userData";
import { Github, Instagram } from "lucide-react";
import { BackgroundGrid } from "./BackgroundGrid";
import { motion } from "framer-motion";
import { MiniTerminal } from "./MiniTerminal";

export const Hero = () => {
  const isNeo = activeStyle === "neobrutalism";
  const isSwiss = activeStyle === "swiss";
  const isGlass = activeStyle === "glassmorphism";
  const isNeomorphic = activeStyle === "neomorphism";

  return (
    <section className={`relative min-h-screen flex items-center justify-center px-6 pt-28 pb-12 overflow-hidden ${isNeo ? 'bg-[#FFFDF6]' : isSwiss ? 'bg-white' : isGlass ? 'bg-transparent' : isNeomorphic ? 'bg-[#e0e5ec]' : 'bg-slate-950'}`}>
      {!(isNeo || isSwiss || isGlass || isNeomorphic) && (
        <>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
        </>
      )}

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
            className={isNeo
              ? "inline-block px-4 py-2 mb-6 border-3 border-black bg-[#38E54D] text-black text-xs font-black uppercase tracking-widest shadow-[3px_3px_0px_rgba(0,0,0,1)] rotate-[-1deg]"
              : isSwiss
                ? "inline-block px-4 py-2 mb-6 border border-black bg-[#D82B27] text-white text-xs font-bold uppercase tracking-widest rounded-none"
                : isGlass
                  ? "inline-block px-4 py-1.5 mb-6 rounded-full border border-white/60 bg-white/40 backdrop-blur-md text-[#3D4F3F] text-xs font-bold uppercase tracking-widest"
                  : "inline-block px-4 py-1.5 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium animate-bounce"}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Available for new opportunities
          </motion.div>
          <motion.h1
            className={isGlass
              ? "font-glass-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1.05] tracking-[-0.02em] text-[#1A2E1F]"
              : isNeomorphic
                ? "font-neo-display text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1.1] tracking-[-0.03em] text-[#1a202c]"
                : `text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight ${isNeo || isSwiss ? 'text-black' : 'text-white'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Designing the{" "}
            {isNeo ? (
              <span className="bg-[#FF5F9E] text-black px-4 py-1 border-3 sm:border-4 border-black rotate-[-2deg] inline-block shadow-[4px_4px_0px_rgba(0,0,0,1)] not-italic font-black mx-1">
                Future
              </span>
            ) : isSwiss ? (
              <span className="bg-[#D82B27] text-white px-4 py-1 sm:py-1.5 inline-block not-italic font-black mx-1 rounded-none uppercase">
                Future
              </span>
            ) : isGlass ? (
              <em className="italic font-normal text-[#6B4EFF]">
                Future
              </em>
            ) : isNeomorphic ? (
              <span className="bg-[#e0e5ec] text-[#2f66ff] px-4 py-1 inline-block not-italic font-bold font-neo-display rounded-2xl shadow-[-2px_-2px_6px_#fff,2px_2px_6px_#a3b1c6] mx-1">
                Future
              </span>
            ) : (
              <span className="bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent italic">
                Future
              </span>
            )}{" "}
            of Web.
          </motion.h1>
          <motion.p
            className={isGlass
              ? "font-glass-sans text-base md:text-lg max-w-2xl mx-auto lg:mx-0 mb-10 text-[#3D4F3F] leading-relaxed"
              : isNeomorphic
                ? "font-neo-body text-base md:text-lg max-w-2xl mx-auto lg:mx-0 mb-10 text-[#4a5568] leading-relaxed"
                : `text-xl md:text-2xl max-w-2xl mx-auto lg:mx-0 mb-10 ${isNeo || isSwiss ? 'text-black/85 font-bold' : 'text-slate-400'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Hi, I'm <span className={isNeo ? "text-[#590696] font-black underline decoration-wavy decoration-3 underline-offset-4" : isSwiss ? "text-[#D82B27] font-black uppercase" : isGlass ? "text-[#1A2E1F] font-bold" : isNeomorphic ? "text-[#2f66ff] font-bold" : "text-white font-semibold"}>{userData.name}</span>. {userData.bio}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a 
              href="#projects" 
              className={isNeo 
                ? "px-8 py-4 bg-[#FF5F9E] hover:bg-[#E84A86] text-black font-black uppercase tracking-wider text-sm border-3 border-black rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-y-[3px] active:shadow-none transition-all" 
                : isSwiss
                  ? "px-8 py-4 bg-[#D82B27] hover:bg-black text-white font-bold uppercase tracking-widest text-xs border border-black rounded-none transition-colors duration-150"
                  : isGlass
                    ? "px-8 py-4 bg-[#6B4EFF] hover:bg-[#5038E0] text-white font-glass-sans font-semibold text-sm rounded-xl transition-all duration-200 hover:translate-y-[-2px] shadow-lg shadow-[#6B4EFF]/20"
                    : isNeomorphic
                      ? "neo-btn neo-btn-accent font-neo-body text-sm font-semibold uppercase tracking-wider transition-all duration-200"
                      : "px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-purple-500/20"}
            >
              Explore Projects
            </a>
            <a 
              href="#contact" 
              className={isNeo 
                ? "px-8 py-4 bg-white hover:bg-[#FFFDF6] text-black font-black uppercase tracking-wider text-sm border-3 border-black rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-y-[3px] active:shadow-none transition-all" 
                : isSwiss
                  ? "px-8 py-4 bg-white hover:bg-neutral-100 text-black font-bold uppercase tracking-widest text-xs border border-black rounded-none transition-colors duration-150"
                  : isGlass
                    ? "px-8 py-4 bg-white/40 hover:bg-white/80 text-[#1A2E1F] font-glass-sans font-semibold text-sm rounded-xl border border-white/60 transition-all duration-200 hover:translate-y-[-2px]"
                    : isNeomorphic
                      ? "neo-btn font-neo-body text-sm font-semibold text-[#4a5568] hover:text-[#1a202c] uppercase tracking-wider transition-all duration-200"
                      : "px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold rounded-xl border border-slate-800 transition-colors"}
            >
              Contact Me
            </a>

            {/* Social Icons inside buttons grid */}
            <div className="flex gap-3 ml-4">
              <a 
                href={`https://github.com/${userData.username}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={isNeo 
                  ? "p-4 bg-[#FFC7EA] hover:bg-[#FFA5D8] text-black rounded-xl border-3 border-black transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none shadow-[4px_4px_0px_rgba(0,0,0,1)]" 
                  : isSwiss
                    ? "p-4 bg-white hover:bg-[#D82B27] hover:text-white text-black rounded-none border border-black transition-all duration-200"
                    : isGlass
                      ? "p-4 bg-white/40 hover:bg-white/60 text-[#1A2E1F] rounded-xl border border-white/65 backdrop-blur-md transition-all hover:translate-y-[-2px] shadow-sm"
                      : isNeomorphic
                        ? "neo-btn p-3 rounded-full text-[#4a5568] hover:text-[#2f66ff] flex items-center justify-center"
                        : "p-4 bg-slate-800/50 hover:bg-slate-800 text-white rounded-xl border border-slate-700 transition-all"}>
                <Github size={20} />
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