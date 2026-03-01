import { useEffect, useRef, useState } from "react";

export const BackgroundGrid = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        const handleWindowMouseMove = (e) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };
        window.addEventListener("mousemove", handleWindowMouseMove);
        return () => window.removeEventListener("mousemove", handleWindowMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-slate-950"
        >
            <style>{`
        @keyframes travelRight {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        @keyframes travelDown {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .animate-travel-right {
          animation: travelRight 12s linear infinite;
        }
        .animate-travel-down {
          animation: travelDown 14s linear infinite;
        }
        .delay-2000 { animation-delay: 2s; }
        .delay-4000 { animation-delay: 4s; }
        .delay-6000 { animation-delay: 6s; }
        .delay-8000 { animation-delay: 8s; }
      `}</style>

            {/* Grid Pattern */}
            <svg
                className="absolute inset-0 h-full w-full opacity-30"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id="grid-pattern"
                        width="60"
                        height="60"
                        patternUnits="userSpaceOnUse"
                        patternTransform="translate(0 0)"
                    >
                        <path d="M0 60V.5H60" fill="none" stroke="currentColor" className="stroke-slate-700" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>

            {/* Occasional travelling light beams */}
            <div className="absolute top-[20%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 animate-travel-right drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            <div className="absolute top-[60%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 animate-travel-right delay-4000 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

            <div className="absolute top-0 left-[30%] w-[2px] h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-0 animate-travel-down delay-2000 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            <div className="absolute top-0 left-[75%] w-[2px] h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-0 animate-travel-down delay-8000 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]" />

            {/* Vignette mask to fade the grid towards edges so it doesn't just cut off abruptly */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,theme(colors.slate.950)_80%)]" />

            {/* Interactive mouse beam */}
            <div
                className="absolute inset-0 transition-opacity duration-300 z-20 mix-blend-screen"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(126, 34, 206, 0.15), transparent 40%)`
                }}
            />
        </div>
    );
};
