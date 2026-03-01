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
                                {project.animation}
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
