import { userData } from "./userData";
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
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Technical Arsenal</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Here is the tech stack I use to build systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {userData.skills.map((skillGroup, i) => (
            <motion.div
              key={i}
              className="p-6 bg-slate-900 border border-slate-800 rounded-3xl hover:border-purple-500/50 transition-all flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">{skillGroup.category}</h3>
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
                    className="px-3 py-1.5 bg-slate-800/80 text-cyan-400 text-sm font-medium rounded-lg border border-slate-700/50 hover:bg-slate-700 transition-colors"
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