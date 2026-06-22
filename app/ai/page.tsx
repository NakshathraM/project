export default function AiPage() {
  const recommendations = [
    {
      title: "Consolidate Code Review Windows",
      impact: "High Impact",
      duration: "Save ~45m daily",
      description: "Analyzing your commit activity logs suggests checking pull requests in batches twice a day rather than reacting to notifications decreases context switching cost.",
      category: "Focus Window",
      color: "border-blue-500/20 text-blue-400 bg-blue-500/5",
    },
    {
      title: "Batch Boilerplate Setup Steps",
      impact: "Medium Impact",
      duration: "Save ~30m daily",
      description: "Preparing your initial spec, layout, and environment variables concurrently prevents task duplication. Day 1 templates should be fully initialized first.",
      category: "Efficiency",
      color: "border-rose-500/20 text-rose-400 bg-rose-500/5",
    },
    {
      title: "Shift Heavy Development to Mornings",
      impact: "High Impact",
      duration: "Gain +15% performance",
      description: "Based on active hours, your focus intensity index is highest between 09:00 and 12:00. Prioritize core typescript task scaffolding during these hours.",
      category: "Cognitive Load",
      color: "border-amber-500/20 text-amber-400 bg-amber-500/5",
    },
  ];

  const tips = [
    "💡 Use the pomodoro framework specifically for code debugging tasks to retain active short-term memory.",
    "💡 Keep TypeScript strict rules activated early to identify object mapping mismatches prior to builds.",
    "💡 Document your environment parameters in a sample file to expedite onboarding on review days.",
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">AI Assistant</h1>
        <p className="text-muted-foreground mt-1">Get customized cognitive diagnostics, recommendations, and time optimization analysis.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recommendation Cards */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>✨</span> Aura Insights & Recommendations
          </h2>

          <div className="space-y-4">
            {recommendations.map((item, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl bg-card border ${item.color} flex flex-col sm:flex-row sm:items-start justify-between gap-4`}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-secondary border border-neutral-800 text-muted-foreground">
                      {item.category}
                    </span>
                    <span className="text-xs font-bold text-white">&middot;</span>
                    <span className="text-xs font-semibold text-white">{item.impact}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-white">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
                <div className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white self-start sm:self-auto">
                  {item.duration}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tip Feed & Analysis Mock */}
        <div className="space-y-6">
          {/* Diagnostic Stats */}
          <div className="p-6 rounded-2xl bg-card border border-border space-y-4">
            <h3 className="font-semibold text-white">Focus Diagnosis</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>Context Switching</span>
                  <span className="text-emerald-400 font-semibold">Low (Good)</span>
                </div>
                <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: "25%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>Deep Work Blocks</span>
                  <span className="text-blue-400 font-semibold">Optimal</span>
                </div>
                <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: "85%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>Meeting Overlap</span>
                  <span className="text-amber-400 font-semibold">Moderate</span>
                </div>
                <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full" style={{ width: "45%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Quick tips list */}
          <div className="p-6 rounded-2xl bg-card border border-border space-y-4">
            <h3 className="font-semibold text-white">Daily Tips Feed</h3>
            <ul className="space-y-3">
              {tips.map((tip, i) => (
                <li key={i} className="text-xs text-muted-foreground leading-relaxed">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
