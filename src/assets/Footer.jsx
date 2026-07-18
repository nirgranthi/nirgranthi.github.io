import { userData, activeStyle } from "./userData";
import { Mail, Github, Instagram } from "lucide-react";

export const Footer = () => {
  const isNeo = activeStyle === "neobrutalism";
  const isSwiss = activeStyle === "swiss";

  return (
    <footer className={isNeo 
      ? "py-12 px-6 bg-[#FFDE4D] border-t-4 border-black text-black" 
      : isSwiss
        ? "py-12 px-6 bg-black text-white border-t border-black rounded-none"
        : "py-12 px-6 bg-slate-950 border-t border-slate-900"}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className={isNeo 
          ? "text-black font-black text-sm uppercase tracking-wider" 
          : isSwiss
            ? "text-white font-bold text-xs uppercase tracking-widest"
            : "text-slate-500 text-sm"}>
          © {new Date().getFullYear()} {userData.username}. ⚔️ Always ready.
        </div>
        <div className="flex gap-6">
          <a 
            href={`mailto:${userData.email}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={isNeo 
              ? "text-black bg-white border-2 border-black rounded-lg p-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_rgba(0,0,0,1)] hover:bg-[#FFC7EA] active:translate-y-[2px] active:shadow-none transition-all" 
              : isSwiss
                ? "text-black bg-white border border-black rounded-none p-2 hover:bg-[#D82B27] hover:text-white hover:border-[#D82B27] transition-all duration-150"
                : "text-slate-400 hover:text-white transition-colors"}>
            <Mail size={20} />
          </a>
          <a 
            href={`https://instagram.com/${userData.instagram}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={isNeo 
              ? "text-black bg-white border-2 border-black rounded-lg p-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_rgba(0,0,0,1)] hover:bg-[#FFC7EA] active:translate-y-[2px] active:shadow-none transition-all" 
              : isSwiss
                ? "text-black bg-white border border-black rounded-none p-2 hover:bg-[#D82B27] hover:text-white hover:border-[#D82B27] transition-all duration-150"
                : "text-slate-400 hover:text-white transition-colors"}>
            <Instagram size={20} />
          </a>
          <a 
            href={`https://github.com/${userData.username}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={isNeo 
              ? "text-black bg-white border-2 border-black rounded-lg p-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_rgba(0,0,0,1)] hover:bg-[#FFC7EA] active:translate-y-[2px] active:shadow-none transition-all" 
              : isSwiss
                ? "text-black bg-white border border-black rounded-none p-2 hover:bg-[#D82B27] hover:text-white hover:border-[#D82B27] transition-all duration-150"
                : "text-slate-400 hover:text-white transition-colors"}>
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}