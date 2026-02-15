export const Stats = () => {
  const stats = [
    { label: "Projects Completed", value: "20+" },
    { label: "Experience", value: "2 Years" },
    { label: "Commit Count", value: "500+" },
  ];
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 max-w-5xl mx-auto py-20 px-6">
      {stats.map((stat, i) => (
        <div key={i} className="text-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
          <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-slate-500 text-sm uppercase tracking-widest">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}