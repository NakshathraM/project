import Link from "next/link";

export default function Dashboard() {
  const stats = [
    { name: "Task Completion", value: "84%", change: "+12%", changeType: "positive", color: "from-blue-500 to-cyan-500" },
    { name: "Focus Duration", value: "4.2 hrs", change: "+0.8h today", changeType: "positive", color: "from-indigo-500 to-purple-500" },
    { name: "Weekly Target", value: "32 / 40", change: "80% done", changeType: "neutral", color: "from-emerald-500 to-teal-500" },
    { name: "AI Suggestions Used", value: "14", change: "92% match", changeType: "positive", color: "from-rose-500 to-pink-500" },
  ];

  const recentActivity = [
    { title: "Completed: Database design draft", time: "2 hours ago", category: "Tech", status: "Done" },
    { title: "AI Optimisation applied to Calendar", time: "4 hours ago", category: "AI", status: "Auto" },
    { title: "Review session with Forge review board", time: "Yesterday", category: "Milestone", status: "Pending" },
  ];

  return (
    <div className="space-y-8">
      {/* Dashboard Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Here is a summary of your performance, tasks, and recent AI actions.</p>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="p-6 rounded-2xl bg-card border border-border flex flex-col justify-between space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{stat.name}</span>
              <div className="text-3xl font-extrabold text-white">{stat.value}</div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                stat.changeType === "positive" 
                  ? "bg-emerald-500/10 text-emerald-400" 
                  : "bg-neutral-800 text-muted-foreground"
              }`}>
                {stat.change}
              </span>
              <div className={`w-8 h-1.5 rounded-full bg-gradient-to-r ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Core Project Status / Weekly Progress */}
        <div className="p-6 rounded-2xl bg-card border border-border lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-white">Weekly Performance Flow</h3>
            <span className="text-xs text-muted-foreground">Target: 40 tasks</span>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Development (Sprint 1)</span>
                <span className="font-medium text-white">90%</span>
              </div>
              <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full" style={{ width: "90%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">AI Review Optimization</span>
                <span className="font-medium text-white">65%</span>
              </div>
              <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-rose-500 h-full rounded-full" style={{ width: "65%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Forge/Conesta Alignment</span>
                <span className="font-medium text-white">80%</span>
              </div>
              <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-rose-500 to-emerald-500 h-full rounded-full" style={{ width: "80%" }} />
              </div>
            </div>
          </div>
          <div className="pt-2 flex items-center justify-between">
            <p className="text-xs text-muted-foreground">Overall completion index is ahead by 4.2% compared to last week.</p>
            <Link href="/tasks" className="text-xs text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200">
              Manage Tasks &rarr;
            </Link>
          </div>
        </div>

        {/* Recent Activity Log */}
        <div className="p-6 rounded-2xl bg-card border border-border space-y-6">
          <h3 className="font-semibold text-white">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex items-start justify-between gap-2 border-b border-border/50 pb-3 last:border-b-0 last:pb-0">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-white line-clamp-1">{activity.title}</p>
                  <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {activity.time}
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-secondary text-muted-foreground">
                  {activity.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
