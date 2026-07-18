import { Contact } from './assets/Contact';
import { Footer } from './assets/Footer';
import { Hero } from './assets/Hero';
import { Navbar } from './assets/Navbar';
import { Projects } from './assets/Projects';
import { Skills } from './assets/Skills';
import { Stats } from './assets/Stats';
import { uiChanger } from './assets/userData';

export default function App() {
  const isNeo = uiChanger === 'neobrutalism';

  return (
    <div className={
      isNeo
        ? "min-h-screen bg-[#FFFDF6] font-mono text-black selection:bg-black selection:text-white scroll-smooth border-6 sm:border-8 border-black"
        : "min-h-screen bg-slate-950 font-sans selection:bg-purple-500 selection:text-white scroll-smooth"
    }>
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