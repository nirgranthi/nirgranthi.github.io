import { Contact } from './assets/Contact';
import { Footer } from './assets/Footer';
import { Hero } from './assets/Hero';
import { Navbar } from './assets/Navbar';
import { Projects } from './assets/Projects';
import { Skills } from './assets/Skills';
import { Stats } from './assets/Stats';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe, 
  Terminal,
  MessageSquare,
  ChevronRight,
  Menu,
  X,
  Database,
  Layers
} from 'lucide-react';


export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-purple-500 selection:text-white scroll-smooth">
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