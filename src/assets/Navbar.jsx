import { useState, useEffect } from "react";
import { userData, uiChanger } from "./userData";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const isNeo = uiChanger === "neobrutalism";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 
    ${isNeo
        ? scrolled
            ? 'bg-[#FFDE4D] py-3 border-b-4 border-black text-black shadow-[0_4px_0_rgba(0,0,0,1)]'
            : 'bg-transparent py-5 text-black'
        : scrolled
            ? 'bg-slate-950/80 backdrop-blur-md py-4 border-b border-slate-800 text-slate-300'
            : 'bg-transparent py-6 text-slate-300'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className={isNeo 
                    ? "text-2xl font-black text-black border-3 border-black bg-white px-3 py-1 shadow-[3px_3px_0px_rgba(0,0,0,1)] select-none rotate-[-1deg]" 
                    : "text-2xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"}>
                    {userData.username}.
                </div>

                {/* Desktop Menu */}
                <div className={`hidden md:flex space-x-6 items-center ${isNeo ? 'text-black' : 'text-slate-300 font-medium'}`}>
                    {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`} 
                            className={isNeo 
                                ? "font-black text-sm uppercase tracking-wider border-2 border-transparent hover:border-black hover:bg-white hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] px-3 py-1.5 rounded-lg transition-all" 
                                : "hover:text-purple-400 transition-colors"}>
                            {item}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button 
                    aria-label="Toggle Menu" 
                    className={isNeo 
                        ? "md:hidden text-black border-2 border-black p-1.5 bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none" 
                        : "md:hidden text-slate-300"} 
                    onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className={`md:hidden absolute top-full left-0 w-full py-6 px-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 
                    ${isNeo 
                        ? 'bg-[#FFDE4D] border-b-4 border-t-4 border-black text-black shadow-[0_4px_0_rgba(0,0,0,1)]' 
                        : 'bg-slate-900 border-b border-slate-800 text-slate-300'}`}>
                    {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`} 
                            className={isNeo 
                                ? "text-black text-lg font-black uppercase tracking-wide border-2 border-black bg-white px-4 py-2 shadow-[3px_3px_0px_rgba(0,0,0,1)] text-center rounded-lg" 
                                : "text-slate-300 text-lg"} 
                            onClick={() => setIsOpen(false)}>
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}