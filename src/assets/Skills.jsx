import { userData, uiChanger } from "./userData";
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
  const isNeo = uiChanger === "neobrutalism";
  const itemColors = ["bg-[#BFF6C3]", "bg-[#FFC7EA]", "bg-[#FFEAA7]", "bg-[#9AD0EC]"];

  return (
    <section id="skills" className={`py-24 px-6 ${isNeo ? 'bg-[#FFFDF6] border-t-4 border-black' : 'bg-slate-900/30'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={isNeo ? "text-4xl font-black text-black mb-6 uppercase tracking-wider" : "text-4xl font-bold text-white mb-6"}>Technical Arsenal</h2>
          <p className={isNeo ? "text-black/80 font-bold max-w-2xl mx-auto" : "text-slate-400 max-w-2xl mx-auto"}>
            Here is the tech stack I use to build systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {userData.skills.map((skillGroup, i) => (
            <motion.div
              key={i}
              className={isNeo
                ? "p-6 bg-white border-3 sm:border-4 border-black rounded-3xl shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[9px_9px_0px_rgba(0,0,0,1)] transition-all duration-200 flex flex-col items-center"
                : "p-6 bg-slate-900 border border-slate-800 rounded-3xl hover:border-purple-500/50 transition-all flex flex-col items-center"}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className={isNeo
                ? "text-lg font-black text-black mb-6 uppercase tracking-wider bg-[#FFDE4D] px-4 py-1.5 border-2 border-black rotate-[-1deg] shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                : "text-xl font-bold text-white mb-6"}>{skillGroup.category}</h3>
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