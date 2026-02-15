import { useState, useEffect } from "react";
import { userData } from "./userDate";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 
    ${scrolled
                ? 'bg-slate-950/80 backdrop-blur-md py-4 border-b border-slate-800'
                : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="text-2xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {userData.username}.
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-slate-300 font-medium">
                    {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
                            {item}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 py-6 px-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4">
                    {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-300 text-lg" onClick={() => setIsOpen(false)}>
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}