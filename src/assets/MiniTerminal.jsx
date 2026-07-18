import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { activeStyle } from "./userData";

const terminalLogs = [
    "Initializing Conquerer_Ultimate... Teaching the AI to trash-talk....",
    "Loading Local-LLM WASM modules...",
    "Mounting Models on Local-LLM...",
    "Compiling Aurora-OS kernels...",
    "Connecting to Web3 infrastructure...",
    "Local-LLM is judging your prompts. Be nice.",
    "System ready. Awaiting your questionable commands..."
];

export const MiniTerminal = () => {
    const [logs, setLogs] = useState([]);
    const [currentLogIndex, setCurrentLogIndex] = useState(0);
    const isNeo = activeStyle === "neobrutalism";
    const isSwiss = activeStyle === "swiss";
    const isGlass = activeStyle === "glassmorphism";
    const isNeomorphic = activeStyle === "neomorphism";

    useEffect(() => {
        if (currentLogIndex < terminalLogs.length) {
            const timeout = setTimeout(() => {
                setLogs(prev => [...prev, terminalLogs[currentLogIndex]]);
                setCurrentLogIndex(prev => prev + 1);
            }, Math.random() * 1000 + 1500); // Random delay between 500ms and 1500ms

            return () => clearTimeout(timeout);
        } else {
            // Optional: Reset logs to loop the animation
            const timeout = setTimeout(() => {
                setLogs([]);
                setCurrentLogIndex(0);
            }, 3000);
            return () => clearTimeout(timeout);
        }
    }, [currentLogIndex]);

    return (
        <motion.div
            className={isNeo
                ? "w-full max-w-md bg-white border-3 sm:border-4 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_rgba(0,0,0,1)] font-mono text-xs sm:text-sm text-black text-left"
                : isSwiss
                    ? "w-full max-w-md bg-white border border-black rounded-none overflow-hidden font-mono text-xs sm:text-sm text-black text-left"
                    : isGlass
                        ? "w-full max-w-md glass-strong rounded-2xl overflow-hidden font-mono text-xs sm:text-sm text-[#1A2E1F] text-left"
                        : isNeomorphic
                            ? "w-full max-w-md neo-raised-heavy p-2 overflow-hidden font-mono text-xs sm:text-sm text-[#2d3748] text-left"
                            : "w-full max-w-md bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl overflow-hidden shadow-2xl font-mono text-xs sm:text-sm text-green-400 text-left"}
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
        >
            {/* Terminal Header */}
            <div className={isNeo
                ? "flex items-center px-4 py-3 bg-[#FFDE4D] border-b-3 sm:border-b-4 border-black"
                : isSwiss
                    ? "flex items-center px-4 py-2.5 bg-black border-b border-black text-white"
                    : isGlass
                        ? "flex items-center px-4 py-2.5 bg-white/40 border-b border-white/50"
                        : isNeomorphic
                            ? "flex items-center px-4 py-2.5 border-b border-slate-300/40"
                            : "flex items-center px-4 py-2 bg-slate-800/80 border-b border-slate-700"}>
                <div className="flex space-x-2">
                    {isSwiss ? (
                        <>
                            <div className="w-2.5 h-2.5 bg-[#D82B27]"></div>
                            <div className="w-2.5 h-2.5 bg-white"></div>
                            <div className="w-2.5 h-2.5 bg-neutral-600"></div>
                        </>
                    ) : isGlass ? (
                        <>
                            <div className="w-3 h-3 rounded-full bg-red-500/70 border border-red-600/40"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/70 border border-yellow-600/40"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/70 border border-green-600/40"></div>
                        </>
                    ) : isNeomorphic ? (
                        <>
                            <div className="w-2.5 h-2.5 rounded-full bg-[#a3b1c6]/60 shadow-inner"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-[#a3b1c6]/60 shadow-inner"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-[#a3b1c6]/60 shadow-inner"></div>
                        </>
                    ) : (
                        <>
                            <div className={`w-3 h-3 rounded-full ${isNeo ? 'bg-[#FF5F9E] border-2 border-black' : 'bg-red-500/80'}`}></div>
                            <div className={`w-3 h-3 rounded-full ${isNeo ? 'bg-[#FFDE4D] border-2 border-black' : 'bg-yellow-500/80'}`}></div>
                            <div className={`w-3 h-3 rounded-full ${isNeo ? 'bg-[#38E54D] border-2 border-black' : 'bg-green-500/80'}`}></div>
                        </>
                    )}
                </div>
                <div className={isNeo
                    ? "ml-4 text-black font-black text-xs uppercase tracking-wider"
                    : isSwiss
                        ? "ml-4 text-white font-bold text-[10px] uppercase tracking-widest"
                        : isGlass
                            ? "ml-4 text-[#3D4F3F] text-xs font-semibold"
                            : isNeomorphic
                                ? "ml-4 text-[#4a5568] text-xs font-bold uppercase tracking-wider font-neo-display"
                                : "ml-4 text-slate-400 text-xs"}>system_boot.sh</div>
            </div>

            {/* Terminal Body */}
            <div className={isNeomorphic
                ? "p-4 h-44 overflow-y-auto flex flex-col justify-end space-y-1 neo-sunken m-2 text-[#2d3748] font-neo-body"
                : `p-4 h-48 overflow-y-auto flex flex-col justify-end space-y-1 ${isNeo ? 'bg-[#FFFDF6]' : isSwiss ? 'bg-[#F9F9F9]' : isGlass ? 'bg-white/20' : ''}`}>
                {logs.map((log, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className={isNeo ? "text-purple-800 font-bold" : isSwiss ? "text-[#D82B27] font-bold" : isGlass ? "text-[#6B4EFF] font-bold" : isNeomorphic ? "text-[#2f66ff] font-bold" : "text-purple-400"}>root@nirgranthi:~$</span> {log}
                    </motion.div>
                ))}
                {currentLogIndex < terminalLogs.length && (
                    <motion.div
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className={`w-2 h-4 inline-block align-middle ml-1 ${isNeo ? 'bg-black' : isSwiss ? 'bg-[#D82B27]' : isGlass ? 'bg-[#6B4EFF]' : isNeomorphic ? 'bg-[#2f66ff]' : 'bg-green-400'}`}
                    />
                )}
            </div>
        </motion.div>
    );
};
