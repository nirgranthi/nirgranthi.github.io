import { userData } from "./userDate";
import { ChevronRight, Terminal, Github, ExternalLink, Database, Layers } from "lucide-react";

export const Projects = () => {
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
              <div className="absolute inset-0 bg-linear-to-tr from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}