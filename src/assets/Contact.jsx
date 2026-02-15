import { useState } from "react";
import { userData } from "./userDate";
import { Check, Copy, Mail, ExternalLink, Instagram } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(userData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMailto = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Hi Saurabh,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`);
    window.location.href = `mailto:${userData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Side: Info */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Let's <span className="text-purple-400">Connect</span>.</h2>
            <p className="text-slate-400 mb-8 text-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer" onClick={copyEmail}>
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl group-hover:border-purple-500/50 transition-all">
                  <Mail className="text-purple-400" />
                </div>
                <div>
                  <div className="text-slate-500 text-sm">Email me at</div>
                  <div className="text-white font-medium flex items-center gap-2">
                    {userData.email}
                    {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-slate-500" />}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl group-hover:border-cyan-400/50 transition-all">
                  <Instagram className="text-cyan-400" />
                </div>
                <div>
                  <div className="text-slate-500 text-sm">Instagram</div>
                  <a href={`https://www.instagram.com/${userData.instagram}`} className="text-white font-medium hover:text-cyan-400">@{userData.instagram}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Direct Action Form */}
          <form onSubmit={handleMailto} className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
            <div className="space-y-6 mb-8">
              <input
                placeholder="Your Name" required
                value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 outline-none"
              />
              <input
                placeholder="Your Email" type="email" required
                value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 outline-none"
              />
              <textarea
                placeholder="Project Details" rows="4" required
                value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 outline-none resize-none"
              />
            </div>
            <button className="w-full py-4 bg-linear-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2">
              Send via Email Client <ExternalLink size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};