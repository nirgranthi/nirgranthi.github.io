import { userData, activeStyle } from "./userData";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export const Skills = () => {
  const isNeo = activeStyle === "neobrutalism";
  const isSwiss = activeStyle === "swiss";
  const isGlass = activeStyle === "glassmorphism";
  const itemColors = ["bg-[#BFF6C3]", "bg-[#FFC7EA]", "bg-[#FFEAA7]", "bg-[#9AD0EC]"];

  return (
    <section id="skills" className={`py-24 px-6 ${isNeo ? 'bg-[#FFFDF6] border-t-4 border-black' : isSwiss ? 'bg-white border-t border-black' : isGlass ? 'bg-transparent border-t border-white/50 border-b border-white/10' : 'bg-slate-900/30'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={isNeo ? "text-4xl font-black text-black mb-6 uppercase tracking-wider" : isSwiss ? "text-4xl font-black text-black mb-6 uppercase tracking-tighter" : isGlass ? "font-glass-serif text-4xl md:text-5xl text-[#1A2E1F] mb-6 tracking-[-0.02em]" : "text-4xl font-bold text-white mb-6"}>Technical Arsenal</h2>
          <p className={isNeo || isSwiss ? "text-black/85 font-bold max-w-2xl mx-auto" : isGlass ? "font-glass-sans text-[#3D4F3F] text-base md:text-lg max-w-2xl mx-auto" : "text-slate-400 max-w-2xl mx-auto"}>
            Here is the tech stack I use to build systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {userData.skills.map((skillGroup, i) => (
            <motion.div
              key={i}
              className={isNeo
                ? "p-6 bg-white border-3 sm:border-4 border-black rounded-3xl shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[9px_9px_0px_rgba(0,0,0,1)] transition-all duration-200 flex flex-col items-center"
                : isSwiss
                  ? "p-6 bg-white border border-black rounded-none hover:bg-neutral-50 transition-colors duration-200 flex flex-col items-center"
                  : isGlass
                    ? "glass-mid p-6 rounded-2xl flex flex-col items-center shadow-md transition-all duration-300 hover:translate-y-[-2px]"
                    : "p-6 bg-slate-900 border border-slate-800 rounded-3xl hover:border-purple-500/50 transition-all flex flex-col items-center"}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className={isNeo
                ? "text-lg font-black text-black mb-6 uppercase tracking-wider bg-[#FFDE4D] px-4 py-1.5 border-2 border-black rotate-[-1deg] shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                : isSwiss
                  ? "text-md font-black text-[#D82B27] mb-6 uppercase tracking-widest border-b border-black w-full text-center pb-2"
                  : isGlass
                    ? "font-glass-serif text-lg text-[#1A2E1F] mb-6 font-bold border-b border-white/40 w-full text-center pb-2"
                    : "text-xl font-bold text-white mb-6 uppercase tracking-wider"}>{skillGroup.category}</h3>
              <motion.div
                className="flex flex-wrap gap-2 justify-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {skillGroup.items.map((item, j) => (
                  <motion.span
                    key={j}
                    variants={itemVariants}
                    className={isNeo
                      ? `px-3 py-1.5 ${itemColors[(i + j) % itemColors.length]} text-black text-sm font-black rounded-lg border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all`
                      : isSwiss
                        ? "px-3 py-1.5 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-none border border-black hover:bg-[#D82B27] hover:text-white hover:border-[#D82B27] transition-colors duration-150"
                        : isGlass
                          ? "px-3 py-1.5 font-glass-sans text-[13px] font-medium bg-white/25 text-[#3D4F3F] rounded-full border border-white/60 hover:bg-[#6B4EFF]/10 hover:text-[#6B4EFF] hover:border-[#6B4EFF]/30 transition-all"
                          : "px-3 py-1.5 bg-slate-800/80 text-cyan-400 text-sm font-medium rounded-lg border border-slate-700/50 hover:bg-slate-700 transition-colors"}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}