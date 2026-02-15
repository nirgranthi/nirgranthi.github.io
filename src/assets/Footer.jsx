import { userData } from "./userDate";
import { Mail, Github, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {userData.name}. Designed with care.
        </div>
        <div className="flex gap-6">
          <a href={`mailto:${userData.email}`} target="_blank" className="text-slate-400 hover:text-white transition-colors"><Mail size={20} /></a>
          <a href={`https://github.com/${userData.username}`} target="_blank" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
          <a href={`https://instagram.com/${userData.instagram}`} target="_blank" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
        </div>
      </div>
    </footer>
  );
}