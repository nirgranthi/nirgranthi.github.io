import { useState } from "react";
import { userData } from "./userData";
import { Check, Copy, Mail, Instagram, Github } from "lucide-react";
import { BackgroundGrid } from "./BackgroundGrid";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

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
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-slate-950">
      <BackgroundGrid />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <h2 className="text-5xl font-black text-white mb-6 tracking-tight">
          Let's <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">Connect</span>.
        </h2>
        <p className="text-slate-400 mb-16 text-lg max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {links.map((link, i) => (
            <div
              key={i}
              onClick={link.action}
              className={`group cursor-pointer p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${link.color}`}
            >
              <div className="flex flex-col items-center gap-5">
                <div className={`p-4 rounded-2xl bg-slate-800/50 transition-colors text-slate-400 ${link.iconColor}`}>
                  {link.icon}
                </div>
                <div>
                  <div className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wider">{link.label}</div>
                  {link.href ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white font-bold text-lg hover:underline decoration-2 underline-offset-4">
                      {link.value}
                    </a>
                  ) : (
                    <div className="text-white font-bold text-lg flex items-center justify-center gap-2">
                      {link.value}
                      {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} className="text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};