import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const terminalLogs = [
    "Initializing Conquerer_Ultimate... Teaching the AI to trash-talk....",
    "Loading Local-Slave WASM modules...",
    "Mounting Models on Local-Slave...",
    "Compiling Aurora-OS kernels...",
    "Connecting to Web3 infrastructure...",
    "Local-Slave is judging your prompts. Be nice.",
    "System ready. Awaiting your questionable commands..."
];

export const MiniTerminal = () => {
    const [logs, setLogs] = useState([]);
    const [currentLogIndex, setCurrentLogIndex] = useState(0);

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
            className="w-full max-w-md bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl overflow-hidden shadow-2xl font-mono text-xs sm:text-sm text-green-400 text-left"
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
        >
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-2 bg-slate-800/80 border-b border-slate-700">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="ml-4 text-slate-400 text-xs">system_boot.sh</div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 h-48 overflow-y-auto flex flex-col justify-end space-y-1">
                {logs.map((log, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-purple-400">root@nirgranthi:~$</span> {log}
                    </motion.div>
                ))}
                {currentLogIndex < terminalLogs.length && (
                    <motion.div
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-2 h-4 bg-green-400 inline-block align-middle ml-1"
                    />
                )}
            </div>
        </motion.div>
    );
};
