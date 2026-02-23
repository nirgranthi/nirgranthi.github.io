import { useState } from "react";
import { userData } from "./userData";
import { Check, Copy, Mail, Instagram, Github } from "lucide-react";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(userData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section id="contact" className="py-24 px-6 bg-slate-950">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Info */}
          <div className="w-full">
            <h2 className="text-4xl font-bold text-white mb-6">Let's <span className="text-purple-400">Connect</span>.</h2>
            <p className="text-slate-400 mb-8 text-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6 flex flex-col items-center">
              <div className="flex items-center justify-start w-full max-w-xs mx-auto gap-4 group cursor-pointer" onClick={copyEmail}>
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl group-hover:border-purple-500/50 transition-all">
                  <Mail className="text-purple-400" />
                </div>
                <div className="text-left">
                  <div className="text-slate-500 text-sm">Email me at</div>
                  <div className="text-white font-medium flex items-center gap-2">
                    {userData.email || "Email not provided"}
                    {copied
                      ? <Check size={16} className="text-green-400" />
                      : <Copy size={16} className="text-slate-500" />}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-start w-full max-w-xs mx-auto gap-4 group">
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl group-hover:border-cyan-400/50 transition-all">
                  <Instagram className="text-cyan-400" />
                </div>
                <div className="text-left">
                  <div className="text-slate-500 text-sm">Instagram</div>
                  <a href={`https://www.instagram.com/${userData.instagram}`} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-cyan-400">
                    @{userData.instagram}
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-start w-full max-w-xs mx-auto gap-4 group">
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl group-hover:border-gray-400/50 transition-all">
                  <Github className="text-gray-400" />
                </div>
                <div className="text-left">
                  <div className="text-slate-500 text-sm">GitHub</div>
                  <a href={`https://github.com/${userData.username}`} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-gray-400">
                    @{userData.username}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};