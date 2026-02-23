import { userData } from "./userData";

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Technical Arsenal</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Here is the tech stack I use to build systems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {userData.skills.map((skillGroup, i) => (
            <div key={i} className="p-6 bg-slate-900 border border-slate-800 rounded-3xl hover:border-purple-500/50 transition-all flex flex-col items-center">
              <h3 className="text-xl font-bold text-white mb-6">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skillGroup.items.map((item, j) => (
                  <span key={j} className="px-3 py-1.5 bg-slate-800/80 text-cyan-400 text-sm font-medium rounded-lg border border-slate-700/50 hover:bg-slate-700 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}