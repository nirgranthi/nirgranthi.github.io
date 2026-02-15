import React, { useState, useEffect } from 'react';
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

// --- User Data ---
const userData = {
  name: "Saurabh",
  username: "nirgranthi",
  title: "Full Stack Developer & AI Enthusiast",
  bio: "Building high-stakes RTS games, AI-driven scrapers, and local LLM solutions. I love exploring the intersection of systems programming and intelligent automation.",
  skills: [
    { name: "JavaScript/TS", level: 90 },
    { name: "React/Next.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "AI/LLMs", level: 75 },
    { name: "Solana/Web3", level: 70 },
    { name: "Python", level: 80 }
  ],
  projects: [
    {
      title: "Conquerer_Ultimate",
      description: "Conquest IO: A high-stakes real-time strategy game featuring multi-base chain attacks, adaptive AI, and cross-platform support.",
      tech: ["JavaScript", "Socket.io", "Game Engine"],
      github: "https://github.com/nirgranthi/Conquerer_Ultimate",
      demo: "#",
      type: "Game Dev"
    },
    {
      title: "memecoin-scraper",
      description: "Download full history of OHLCV data of a Solana based memecoin for AI analysis and investment decision support.",
      tech: ["HTML", "Solana API", "Python"],
      github: "https://github.com/nirgranthi/memecoin-scraper",
      demo: "#",
      type: "Web3/AI"
    },
    {
      title: "local-slave",
      description: "Run small LLMs directly on your device, no cloud computing needed. Focused on privacy and edge computing.",
      tech: ["JavaScript", "LLM", "WASM"],
      github: "https://github.com/nirgranthi/local-slave",
      demo: "#",
      type: "AI/Tools"
    },
    {
      title: "Aurora-OS.js",
      description: "Extensible web OS game and hacking simulator framework. Virtual OS experience with terminal and sandboxed gameplay.",
      tech: ["TypeScript", "React", "Linux Logic"],
      github: "https://github.com/nirgranthi/Aurora-OS.js",
      demo: "#",
      type: "Simulation"
    }
  ]
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 border-b border-slate-800' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          {userData.username}.
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-slate-300 font-medium">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 py-6 px-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-300 text-lg" onClick={() => setIsOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium animate-bounce">
          Available for new opportunities
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight">
          Designing the <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent italic">Future</span> of Web.
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10">
          Hi, I'm <span className="text-white font-semibold">{userData.name}</span>. {userData.bio}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="#projects" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-600/25">
            View My Work
          </a>
          <div className="flex gap-4">
            <a href={`https://github.com/${userData.username}`} target="_blank" className="p-4 bg-slate-800/50 hover:bg-slate-800 text-white rounded-xl border border-slate-700 transition-all">
              <Github size={24} />
            </a>
            <a href="#" className="p-4 bg-slate-800/50 hover:bg-slate-800 text-white rounded-xl border border-slate-700 transition-all">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-slate-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Projects Completed", value: "20+" },
    { label: "Happy Clients", value: "10+" },
    { label: "Experience", value: "2 Years" },
    { label: "Commit Count", value: "500+" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto py-20 px-6">
      {stats.map((stat, i) => (
        <div key={i} className="text-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
          <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-slate-500 text-sm uppercase tracking-widest">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400">Selection of my personal and open-source contributions.</p>
          </div>
          <a href={`https://github.com/${userData.username}?tab=repositories`} className="text-purple-400 flex items-center gap-2 hover:underline">
            View All GitHub <ChevronRight size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {userData.projects.map((project, i) => (
            <div key={i} className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500">
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-purple-500/10 text-purple-400 rounded-2xl">
                    {project.type === "Game Dev" ? <Terminal size={24} /> : project.type === "Web3/AI" ? <Database size={24} /> : <Layers size={24} />}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} className="p-2 text-slate-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} className="p-2 text-slate-400 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-6 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <span key={j} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-lg border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {/* Hover Effect Light */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">Technical Skills</h2>
          <p className="text-slate-400 mb-8">
            My journey into the world of development started with curiosity about how high-performance systems work. 
            Currently, I'm mastering the MERN stack and exploring the depths of AI integration.
          </p>
          <div className="space-y-6">
            {userData.skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-white mb-2 font-medium">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-center flex flex-col items-center">
            <Code2 size={40} className="text-cyan-400 mb-4" />
            <div className="text-white font-bold">Frontend</div>
            <div className="text-slate-500 text-sm mt-1">React, Next.js, Tailwind</div>
          </div>
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-center flex flex-col items-center mt-8">
            <Cpu size={40} className="text-purple-400 mb-4" />
            <div className="text-white font-bold">Backend</div>
            <div className="text-slate-500 text-sm mt-1">Node, Python, SQL</div>
          </div>
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-center flex flex-col items-center -mt-8">
            <Globe size={40} className="text-pink-400 mb-4" />
            <div className="text-white font-bold">DevOps</div>
            <div className="text-slate-500 text-sm mt-1">Vercel, Docker, Git</div>
          </div>
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-center flex flex-col items-center">
            <MessageSquare size={40} className="text-orange-400 mb-4" />
            <div className="text-white font-bold">AI/ML</div>
            <div className="text-slate-500 text-sm mt-1">LLMs, Scraping, RAG</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's build something <span className="text-purple-400">awesome</span>.</h2>
        <p className="text-slate-400 mb-12">I'm currently looking for new opportunities. My inbox is always open.</p>
        
        <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 text-left">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-slate-400 mb-2 text-sm font-medium">Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                placeholder="Full Name"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-2 text-sm font-medium">Email</label>
              <input 
                type="email" 
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                placeholder="email@example.com"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-slate-400 mb-2 text-sm font-medium">Message</label>
            <textarea 
              required
              rows="4" 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
              placeholder="What's on your mind?"
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>
          <button className={`w-full py-4 rounded-xl font-bold transition-all ${sent ? 'bg-green-600 text-white' : 'bg-purple-600 hover:bg-purple-700 text-white hover:scale-[1.02] active:scale-[0.98]'}`}>
            {sent ? 'Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {userData.name}. Designed with care.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><Mail size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

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