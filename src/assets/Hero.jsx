import { userData } from "./userData";
import { Github, Instagram } from "lucide-react";
import { BackgroundGrid } from "./BackgroundGrid";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-slate-950">
      <BackgroundGrid />

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium animate-bounce">
          Available for new opportunities
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight">
          Designing the <span className="bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent italic">Future</span> of Web.
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10">
          Hi, I'm <span className="text-white font-semibold">{userData.name}</span>. {userData.bio}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
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
        </div>
      </div>
    </section>
  );
}