import { userData } from "./userDate";
import { Code2, Cpu, Globe, MessageSquare } from "lucide-react";

export const Skills = () => {
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
                    className="h-full bg-linear-to-r from-purple-600 to-cyan-500 rounded-full"
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
}