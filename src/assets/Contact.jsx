import { useState } from "react";
import { userData, uiChanger } from "./userData";
import { Check, Copy, Mail, Instagram, Github } from "lucide-react";
import { BackgroundGrid } from "./BackgroundGrid";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const isNeo = uiChanger === "neobrutalism";
  const linkBoxColors = ["bg-[#FFC7EA]", "bg-[#9AD0EC]", "bg-[#BFF6C3]"];

  const copyEmail = () => {
    navigator.clipboard.writeText(userData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    { icon: <Mail size={28} />, label: "Email", value: userData.email || "Drop a Mail", action: copyEmail, color: "group-hover:border-purple-500 group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]", iconColor: "group-hover:text-purple-400" },
    { icon: <Instagram size={28} />, label: "Instagram", value: `@${userData.instagram}`, href: `https://instagram.com/${userData.instagram}`, color: "group-hover:border-cyan-400 group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]", iconColor: "group-hover:text-cyan-400" },
    { icon: <Github size={28} />, label: "GitHub", value: `@${userData.username}`, href: `https://github.com/${userData.username}`, color: "group-hover:border-gray-400 group-hover:shadow-[0_0_30px_-5px_rgba(156,163,175,0.3)]", iconColor: "group-hover:text-gray-400" }
  ];

  return (
    <section id="contact" className={`py-24 px-6 relative overflow-hidden ${isNeo ? 'bg-[#FFFDF6] border-t-4 border-black' : 'bg-slate-950'}`}>
      <BackgroundGrid />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.h2
          className="text-5xl font-black text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {isNeo ? (
            <span className="text-black uppercase">
              Let's{" "}
              <span className="bg-[#FF5F9E] text-black px-5 py-1.5 border-3 border-black rotate-[-2deg] inline-block shadow-[4px_4px_0px_rgba(0,0,0,1)] not-italic font-black mx-1">
                Connect
              </span>
              .
            </span>
          ) : (
            <>
              Let's <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">Connect</span>.
            </>
          )}
        </motion.h2>
        <motion.p
          className={isNeo ? "text-black/80 font-bold mb-16 text-lg max-w-xl mx-auto" : "text-slate-400 mb-16 text-lg max-w-xl mx-auto"}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </motion.p>

        <motion.div
          className="grid sm:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {links.map((link, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              onClick={link.action}
              className={isNeo
                ? "group cursor-pointer p-8 rounded-3xl bg-white border-3 sm:border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[9px_9px_0px_rgba(0,0,0,1)] transition-all duration-200"
                : `group cursor-pointer p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${link.color}`}
            >
              <div className="flex flex-col items-center gap-5">
                <div className={isNeo
                  ? `p-4 rounded-2xl border-2 border-black ${linkBoxColors[i % linkBoxColors.length]} text-black transition-colors`
                  : `p-4 rounded-2xl bg-slate-800/50 transition-colors text-slate-400 ${link.iconColor}`}>
                  {link.icon}
                </div>
                <div>
                  <div className={isNeo
                    ? "text-black/70 text-xs font-black uppercase tracking-wider mb-1"
                    : "text-slate-500 text-sm font-medium mb-1 uppercase tracking-wider"}>{link.label}</div>
                  {link.href ? (
                    <a 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={isNeo
                        ? "text-black font-black text-lg hover:underline decoration-3 decoration-[#FF5F9E] underline-offset-4"
                        : "text-white font-bold text-lg hover:underline decoration-2 underline-offset-4"}>
                      {link.value}
                    </a>
                  ) : (
                    <div className={isNeo ? "text-black font-black text-lg flex items-center justify-center gap-2" : "text-white font-bold text-lg flex items-center justify-center gap-2"}>
                      {link.value}
                      {copied ? (
                        <Check size={18} className="text-green-600" />
                      ) : (
                        <Copy size={18} className={isNeo ? "text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" : "text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"} />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};