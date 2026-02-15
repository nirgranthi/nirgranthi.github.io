import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's build something <span className="text-purple-400">awesome</span>.</h2>
        <p className="text-slate-400 mb-12">I'm currently looking for new opportunities. My inbox is always open.</p>

        <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 text-left">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-slate-400 mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                placeholder="Full Name"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                placeholder="email@example.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-slate-400 mb-2 text-sm font-medium">Message</label>
            <textarea
              required
              rows="4"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
              placeholder="What's on your mind?"
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
          <button className={`w-full py-4 rounded-xl font-bold transition-all 
            ${sent
              ? 'bg-green-600 text-white'
              : 'bg-purple-600 hover:bg-purple-700 text-white hover:scale-[1.02] active:scale-[0.98]'}`}>
            {sent ? 'Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}