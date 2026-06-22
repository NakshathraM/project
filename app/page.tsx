import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      {/* Visual Accent/Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-40 left-1/3 w-64 h-64 bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 border border-neutral-800 text-xs text-muted-foreground mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Day 1 Foundation Release
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-none">
          Work Smarter with{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-rose-400 bg-clip-text text-transparent">
            Aura AI
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
          The minimalist task and productivity ecosystem powered by local AI. Organize, execute, and analyze your day without friction.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/dashboard"
            className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-white/5 text-sm"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/tasks"
            className="px-6 py-3 rounded-xl bg-secondary hover:bg-neutral-800 text-white font-semibold border border-neutral-800 transition-all duration-200 hover:-translate-y-0.5 text-sm"
          >
            View My Tasks
          </Link>
        </div>
      </div>

      {/* Feature Quick Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mt-16 w-full text-left">
        <div className="p-6 rounded-2xl bg-card/40 border border-border backdrop-blur-sm space-y-2 hover:border-neutral-800 transition-all duration-200">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold mb-2">
            📊
          </div>
          <h3 className="font-semibold text-white">Visual Analytics</h3>
          <p className="text-sm text-muted-foreground">
            Track focus scoring, weekly completions, and core metrics in real-time.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-card/40 border border-border backdrop-blur-sm space-y-2 hover:border-neutral-800 transition-all duration-200">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold mb-2">
            ✅
          </div>
          <h3 className="font-semibold text-white">Task Management</h3>
          <p className="text-sm text-muted-foreground">
            Organize tasks with clean status categorization and priority levels.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-card/40 border border-border backdrop-blur-sm space-y-2 hover:border-neutral-800 transition-all duration-200">
          <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400 font-bold mb-2">
            ✨
          </div>
          <h3 className="font-semibold text-white">AI Assistant</h3>
          <p className="text-sm text-muted-foreground">
            Get personalized context-driven suggestions and workflow optimization.
          </p>
        </div>
      </div>
    </div>
  );
}
