import { Contact } from './assets/Contact';
import { Footer } from './assets/Footer';
import { Hero } from './assets/Hero';
import { Navbar } from './assets/Navbar';
import { Projects } from './assets/Projects';
import { Skills } from './assets/Skills';
import { Stats } from './assets/Stats';
import { activeStyle } from './assets/userData';

export default function App() {
  const isNeo = activeStyle === 'neobrutalism';
  const isSwiss = activeStyle === 'swiss';
  const isGlass = activeStyle === 'glassmorphism';
  const isNeomorphic = activeStyle === 'neomorphism';

  return (
    <div className={
      isNeo
        ? "min-h-screen bg-[#FFFDF6] font-mono text-black selection:bg-black selection:text-white scroll-smooth border-6 sm:border-8 border-black"
        : isSwiss
          ? "min-h-screen bg-white font-sans text-black selection:bg-[#D82B27] selection:text-white scroll-smooth rounded-none"
          : isGlass
            ? "min-h-screen glass-atmosphere font-glass-sans text-[#1A2E1F] selection:bg-[#6B4EFF]/20 selection:text-[#1A2E1F] scroll-smooth relative"
            : isNeomorphic
              ? "min-h-screen bg-[#e0e5ec] font-neo-body text-[#2d3748] selection:bg-[#2f66ff]/20 selection:text-[#1a202c] scroll-smooth relative"
              : "min-h-screen bg-slate-950 font-sans selection:bg-purple-500 selection:text-white scroll-smooth"
    }>
      {isGlass && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Subtle light diffusion behind glass layers */}
          <div className="absolute top-[25%] left-[20%] w-[400px] h-[400px] bg-[#6B4EFF]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-[#1A2E1F]/5 rounded-full blur-[120px] pointer-events-none" />
        </div>
      )}
      {!(isNeo || isSwiss || isGlass) && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[10%] left-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-600/15 rounded-full blur-[100px] sm:blur-[130px] animate-pulse" />
          <div className="absolute top-[35%] right-[5%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-cyan-600/10 rounded-full blur-[100px] sm:blur-[130px] animate-pulse delay-1000" />
          <div className="absolute bottom-[25%] left-[5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-pink-600/10 rounded-full blur-[100px] sm:blur-[130px] animate-pulse delay-700" />
          <div className="absolute bottom-[5%] right-[15%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-600/10 rounded-full blur-[90px] sm:blur-[120px] animate-pulse" />
        </div>
      )}
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}