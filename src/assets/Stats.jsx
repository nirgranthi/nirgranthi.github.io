import { userData, uiChanger } from "./userData";
import { motion } from "framer-motion";

export const Stats = () => {
  const isNeo = uiChanger === "neobrutalism";
  const bgColors = ["bg-[#FFC7EA]", "bg-[#BFF6C3]", "bg-[#FFEAA7]"];

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 max-w-5xl mx-auto py-20 px-6">
      {userData.stats.map((stat, i) => (
        <motion.div
          key={i}
          className={isNeo
            ? `text-center p-6 rounded-2xl ${bgColors[i % bgColors.length]} border-3 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[9px_9px_0px_rgba(0,0,0,1)] transition-all duration-200`
            : "text-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800"}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className={isNeo ? "text-3xl font-black text-black mb-1" : "text-3xl font-bold text-white mb-1"}>{stat.value}</div>
          <div className={isNeo ? "text-black/70 text-xs font-black uppercase tracking-wider" : "text-slate-500 text-sm uppercase tracking-widest"}>{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}