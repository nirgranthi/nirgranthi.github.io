import { userData, uiChanger } from "./userData";
import { ChevronRight, Terminal, Github, ExternalLink, Database, Layers } from "lucide-react";
import { BentoCard } from "./BentoCard";
import { motion } from "framer-motion";

export const Projects = () => {
  const isNeo = uiChanger === "neobrutalism";

  // Enhancing the project data with icons mapping for the BentoCard 
  const formattedProjects = userData.projects.map((project, i) => {
    let icon = <Layers size={24} />;
    if (project.type === "Game Dev") icon = <Terminal size={24} />;
    if (project.type === "Web3/AI") icon = <Database size={24} />;

    return {
      ...project,
      icon,
      githubIcon: <Github size={20} />,
      demoIcon: <ExternalLink size={20} />,
      // Dynamically assigning span classes for the bento layout. 
      // The first item spans 2 columns on large screens to have a featured look.
      className: i === 0 ? "md:col-span-2" : "col-span-1",
    };
  });

  return (
    <section id="projects" className={`py-24 px-6 ${isNeo ? 'bg-[#FFFDF6] border-t-4 border-black' : 'bg-slate-950'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className={isNeo ? "text-4xl font-black text-black mb-4 uppercase tracking-wider" : "text-4xl font-bold text-white mb-4"}>Featured Projects</h2>
            <p className={isNeo ? "text-black/80 font-bold" : "text-slate-400"}>Selection of my personal and open-source contributions.</p>
          </div>
          <a 
            href={`https://github.com/${userData.username}?tab=repositories`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={isNeo 
              ? "flex items-center gap-2 px-5 py-2.5 bg-[#FFC7EA] hover:bg-[#FFA5D8] text-black font-black uppercase text-xs tracking-wider border-2 border-black rounded-lg shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all" 
              : "text-purple-400 flex items-center gap-2 hover:underline"}>
            View All GitHub <ChevronRight size={20} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-min gap-6">
          {formattedProjects.map((project, i) => (
            <BentoCard
              key={i}
              project={project}
              className={project.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};