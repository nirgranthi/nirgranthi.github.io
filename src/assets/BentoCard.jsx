import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { activeStyle } from "./userData";

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const BentoCard = ({ project, className }) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const isNeo = activeStyle === "neobrutalism";
    const isSwiss = activeStyle === "swiss";
    const isGlass = activeStyle === "glassmorphism";

    const handleMouseMove = (e) => {
        if (!divRef.current || isFocused || isNeo || isSwiss) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        if (isNeo || isSwiss) return;
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        if (isNeo || isSwiss) return;
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        if (isNeo || isSwiss) return;
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        if (isNeo || isSwiss) return;
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                isNeo
                    ? "relative rounded-3xl border-3 sm:border-4 border-black bg-white overflow-hidden group shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] transition-all duration-200"
                    : isSwiss
                        ? "relative rounded-none border border-black bg-white overflow-hidden group hover:border-[#D82B27] transition-all duration-200"
                        : isGlass
                            ? "glass-mid relative rounded-3xl overflow-hidden group shadow-[0_8px_32px_rgba(26,46,31,0.04)] hover:bg-white/50 transition-all duration-300 hover:translate-y-[-4px]"
                            : "relative rounded-3xl border border-slate-800 bg-slate-900 overflow-hidden group",
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {!(isNeo || isSwiss) && (
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                    style={{
                        opacity,
                        background: isGlass
                            ? `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(107,78,255,0.07), transparent 40%)`
                            : `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(168,85,247,.1), transparent 40%)`,
                    }}
                />
            )}
            <div className="relative flex h-full flex-col justify-between p-8 z-10">
                <div>
                    <div className="flex justify-between items-start mb-6">
                        <div className={isNeo
                            ? "p-3 bg-[#FFDE4D] text-black border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                            : isSwiss
                                ? "p-3 bg-neutral-100 text-black border border-black rounded-none"
                                : isGlass
                                    ? "p-3 bg-[#6B4EFF]/10 text-[#6B4EFF] border border-[#6B4EFF]/20 rounded-2xl"
                                    : "p-3 bg-slate-800/50 text-slate-300 rounded-2xl group-hover:bg-purple-500/10 group-hover:text-purple-400 transition-colors"}>
                            {project.icon}
                        </div>
                        <div className="flex gap-3">
                            {project.github && (
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className={isNeo
                                        ? "p-2.5 text-black bg-white border-2 border-black rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-[#FFC7EA] active:translate-y-[2px] active:shadow-none transition-all"
                                        : isSwiss
                                            ? "p-2.5 text-black bg-white border border-black rounded-none hover:bg-black hover:text-white transition-all duration-200"
                                            : isGlass
                                                ? "p-2.5 text-[#3D4F3F] bg-white/40 hover:bg-white/80 border border-white/60 rounded-full hover:translate-y-[-2px] transition-all duration-200"
                                                : "p-2 text-slate-500 hover:text-white transition-colors bg-slate-950/50 rounded-full backdrop-blur-md"}>
                                    {project.githubIcon}
                                </a>
                            )}
                            {project.demo && (
                                <a 
                                    href={project.demo} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className={isNeo
                                        ? "p-2.5 text-black bg-white border-2 border-black rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-[#FFC7EA] active:translate-y-[2px] active:shadow-none transition-all"
                                        : isSwiss
                                            ? "p-2.5 text-black bg-white border border-black rounded-none hover:bg-black hover:text-white transition-all duration-200"
                                            : isGlass
                                                ? "p-2.5 text-[#3D4F3F] bg-white/40 hover:bg-white/80 border border-white/60 rounded-full hover:translate-y-[-2px] transition-all duration-200"
                                                : "p-2 text-slate-500 hover:text-white transition-colors bg-slate-950/50 rounded-full backdrop-blur-md"}>
                                    {project.demoIcon}
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Image / Mockup Area */}
                    <div className={isNeo
                        ? "w-full aspect-video bg-slate-950 border-2 border-black rounded-xl mb-6 overflow-hidden relative"
                        : isSwiss
                            ? "w-full aspect-video bg-black border border-black rounded-none mb-6 overflow-hidden relative"
                            : isGlass
                                ? "w-full aspect-video bg-slate-950 border border-white/20 rounded-2xl mb-6 overflow-hidden relative shadow-inner"
                                : "w-full aspect-video bg-slate-900/40 backdrop-blur-md rounded-xl mb-6 overflow-hidden relative border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"}>
                        {project.image ? (
                            <img src={project.image} alt={`${project.title} preview`} className="w-full h-full object-cover" />
                        ) : (
                            <div className={cn(
                                "w-full h-full flex items-center justify-center relative overflow-hidden",
                                isNeo ? "bg-slate-950" : isSwiss ? "bg-black" : isGlass ? "bg-slate-950" : "bg-linear-to-br from-slate-800/50 to-slate-900/50"
                            )}>
                                {project.animation}
                            </div>
                        )}
                    </div>

                    <h3 className={isNeo
                        ? "text-2xl font-black text-black mb-3 group-hover:text-[#590696] transition-colors"
                        : isSwiss
                            ? "text-2xl font-black text-black mb-3 group-hover:text-[#D82B27] transition-colors uppercase tracking-tighter"
                            : isGlass
                                ? "font-glass-serif text-2xl font-normal text-[#1A2E1F] mb-3 group-hover:text-[#6B4EFF] transition-colors leading-tight"
                                : "text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors"}>{project.title}</h3>
                    <p className={isNeo ? "text-black/80 font-bold mb-6" : isSwiss ? "text-black/85 font-medium text-sm mb-6" : isGlass ? "font-glass-sans text-[13px] text-[#3D4F3F] mb-6 leading-relaxed" : "text-slate-400 mb-6"}>{project.description}</p>
                </div>

                <div className={cn(
                    "flex flex-wrap gap-2 mt-auto pt-6",
                    isNeo ? "border-t-2 border-black" : isSwiss ? "border-t border-black" : isGlass ? "border-t border-white/40" : "border-t border-slate-800/50"
                )}>
                    {project.tech.map((t, j) => (
                        <span 
                            key={j} 
                            className={isNeo
                                ? "px-3 py-1 bg-[#BFF6C3] text-black text-xs font-black rounded-lg border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-[#A3ECA8] transition-all"
                                : isSwiss
                                    ? "px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-none border border-black hover:bg-[#D82B27] hover:text-white hover:border-[#D82B27] transition-colors duration-150"
                                    : isGlass
                                        ? "px-3 py-1 font-glass-sans text-[11px] font-semibold bg-white/20 text-[#3D4F3F] rounded-full border border-white/60 hover:bg-[#6B4EFF]/10 hover:text-[#6B4EFF] hover:border-[#6B4EFF]/20 transition-all duration-200"
                                        : "px-3 py-1 bg-slate-950/50 text-slate-400 text-xs rounded-lg border border-slate-800 backdrop-blur-sm transition-colors group-hover:border-slate-700"}>
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
