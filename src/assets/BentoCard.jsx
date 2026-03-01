import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const BentoCard = ({ project, className }) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
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
                "relative rounded-3xl border border-slate-800 bg-slate-900 overflow-hidden group",
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(168,85,247,.1), transparent 40%)`,
                }}
            />
            <div className="relative flex h-full flex-col justify-between p-8 z-10">
                <div>
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-slate-800/50 text-slate-300 rounded-2xl group-hover:bg-purple-500/10 group-hover:text-purple-400 transition-colors">
                            {project.icon}
                        </div>
                        <div className="flex gap-3">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 hover:text-white transition-colors bg-slate-950/50 rounded-full backdrop-blur-md">
                                    {project.githubIcon}
                                </a>
                            )}
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 hover:text-white transition-colors bg-slate-950/50 rounded-full backdrop-blur-md">
                                    {project.demoIcon}
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Image / Mockup Area */}
                    <div className="w-full aspect-video bg-slate-900/40 backdrop-blur-md rounded-xl mb-6 overflow-hidden relative border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                        {project.image ? (
                            <img src={project.image} alt={`${project.title} preview`} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-linear-to-br from-slate-800/50 to-slate-900/50">
                                {/* Username-Hunter: Radar Animation */}
                                {(project.title === "Username-Hunter") && (
                                    <div className="relative flex items-center justify-center w-full h-full">
                                        <div className="absolute w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(34,211,238,0.4)_360deg)] animate-[spin_4s_linear_infinite] origin-center opacity-30"></div>
                                        <div className="w-32 h-32 rounded-full border border-cyan-500/20 absolute"></div>
                                        <div className="w-48 h-48 rounded-full border border-cyan-500/10 absolute"></div>
                                        <div className="w-64 h-64 rounded-full border border-cyan-500/5 absolute"></div>
                                        <motion.div
                                            className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                                            animate={{ scale: [1, 2, 1], opacity: [1, 0.5, 1] }}
                                            transition={{ repeat: Infinity, duration: 2 }}
                                        />
                                    </div>
                                )}

                                {/* Memecoin-Scraper & Security: Scanning Data */}
                                {(project.title === "Memecoin-Scraper" || project.title === "Password-Bruteforcers") && (
                                    <div className="relative w-full h-full overflow-hidden flex flex-wrap content-start p-2 opacity-60">
                                        {Array.from({ length: 150 }).map((_, idx) => (
                                            <span key={idx} className="text-[10px] font-mono leading-none text-slate-400 opacity-50 px-[2px]">
                                                {Math.random() > 0.5 ? "1" : "0"}
                                            </span>
                                        ))}
                                        {/* Scanning Laser */}
                                        <motion.div
                                            className="absolute left-0 right-0 h-12 bg-linear-to-b from-transparent via-cyan-400/20 to-cyan-400 shadow-[0_2px_15px_rgba(34,211,238,0.5)] border-b border-cyan-400"
                                            initial={{ top: "-20%" }}
                                            animate={{ top: "120%" }}
                                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                        />
                                    </div>
                                )}

                                {/* Game Dev/Optimization: Isometric Voxels */}
                                {(project.type?.includes("Game Dev")) && (
                                    <div className="relative w-full h-full flex items-center justify-center -rotate-x-45 rotate-z-45 scale-125 origin-center">
                                        <div className="grid grid-cols-5 gap-2">
                                            {Array.from({ length: 25 }).map((_, idx) => {
                                                const isPurple = Math.random() > 0.7;
                                                return (
                                                    <motion.div
                                                        key={idx}
                                                        className={`w-6 h-6 border shadow-sm ${isPurple ? "bg-purple-500/30 border-purple-500/50" : "bg-slate-400/10 border-slate-400/30"}`}
                                                        animate={{
                                                            translateZ: [0, Math.random() * 20 + 10, 0],
                                                            opacity: [0.5, 0.8, 0.5]
                                                        }}
                                                        transition={{
                                                            repeat: Infinity,
                                                            duration: Math.random() * 2 + 2,
                                                            ease: "easeInOut",
                                                            delay: Math.random() * 2
                                                        }}
                                                        style={{ transformStyle: 'preserve-3d' }}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* Conquerer_Ultimate: Neural Network */}
                                {(project.title === "Conquerer_Ultimate") && (
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <svg width="100%" height="100%" className="absolute inset-0">
                                            <line x1="20%" y1="30%" x2="50%" y2="20%" stroke="rgba(148,163,184,0.2)" strokeWidth="1" />
                                            <line x1="50%" y1="20%" x2="80%" y2="40%" stroke="rgba(148,163,184,0.2)" strokeWidth="1" />
                                            <line x1="80%" y1="40%" x2="60%" y2="80%" stroke="rgba(148,163,184,0.2)" strokeWidth="1" />
                                            <line x1="60%" y1="80%" x2="30%" y2="70%" stroke="rgba(148,163,184,0.2)" strokeWidth="1" />
                                            <line x1="30%" y1="70%" x2="20%" y2="30%" stroke="rgba(148,163,184,0.2)" strokeWidth="1" />
                                            <line x1="50%" y1="20%" x2="60%" y2="80%" stroke="rgba(148,163,184,0.2)" strokeWidth="1" />
                                            <line x1="20%" y1="30%" x2="80%" y2="40%" stroke="rgba(148,163,184,0.2)" strokeWidth="1" />

                                            <motion.circle r="3" fill="#a855f7"
                                                animate={{
                                                    cx: ["20%", "50%", "80%", "60%", "30%", "20%"],
                                                    cy: ["30%", "20%", "40%", "80%", "70%", "30%"]
                                                }}
                                                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                                            />
                                            <motion.circle r="2" fill="#22d3ee"
                                                animate={{
                                                    cx: ["80%", "50%", "20%", "30%", "60%", "80%"],
                                                    cy: ["40%", "20%", "30%", "70%", "80%", "40%"]
                                                }}
                                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                                            />
                                        </svg>

                                        <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-slate-400 rounded-full shadow-[0_0_8px_rgba(148,163,184,0.5)] -translate-x-1/2 -translate-y-1/2"></div>
                                        <div className="absolute top-[20%] left-[50%] w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)] -translate-x-1/2 -translate-y-1/2"></div>
                                        <div className="absolute top-[40%] left-[80%] w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)] -translate-x-1/2 -translate-y-1/2"></div>
                                        <div className="absolute top-[80%] left-[60%] w-3 h-3 bg-slate-400 rounded-full shadow-[0_0_8px_rgba(148,163,184,0.5)] -translate-x-1/2 -translate-y-1/2"></div>
                                        <div className="absolute top-[70%] left-[30%] w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)] -translate-x-1/2 -translate-y-1/2"></div>
                                    </div>
                                )}

                                {/* Default/Matrix: Local-Slave & Fallback */}
                                {(!project.title || (project.title !== "Username-Hunter" && project.title !== "Memecoin-Scraper" && project.title !== "Password-Bruteforcers" && project.title !== "Conquerer_Ultimate" && !project.type?.includes("Game Dev"))) && (
                                    <div className="relative w-full h-full flex justify-around overflow-hidden opacity-40">
                                        {Array.from({ length: 15 }).map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex flex-col text-[10px] font-mono leading-tight text-cyan-400/50"
                                                initial={{ y: "-100%" }}
                                                animate={{ y: "100%" }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: Math.random() * 5 + 3,
                                                    ease: "easeInOut",
                                                    delay: Math.random() * -5,
                                                }}
                                            >
                                                {Array.from({ length: 20 }).map((_, j) => (
                                                    <span key={j} style={{ opacity: Math.random() }}>
                                                        {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
                                                    </span>
                                                ))}
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                    <p className="text-slate-400 mb-6">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-800/50">
                    {project.tech.map((t, j) => (
                        <span key={j} className="px-3 py-1 bg-slate-950/50 text-slate-400 text-xs rounded-lg border border-slate-800 backdrop-blur-sm transition-colors group-hover:border-slate-700">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
