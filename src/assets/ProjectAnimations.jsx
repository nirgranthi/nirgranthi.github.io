import { motion } from "framer-motion";

export const RadarAnimation = () => (
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
);

export const ScanningDataAnimation = () => (
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
);

export const IsometricVoxelsAnimation = () => (
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
);

export const NeuralNetworkAnimation = () => (
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
);

export const MatrixRainAnimation = () => (
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
);
