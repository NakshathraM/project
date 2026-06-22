export interface Task {
  id: string;
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  status: "Completed" | "In Progress" | "Backlog";
  category: string;
  dueDate: string;
}

const sampleTasks: Task[] = [
  {
    id: "task-1",
    title: "Configure App Router and layout foundations",
    description: "Structure navigation links, setup root layout, globals.css custom parameters, and navbar design guidelines.",
    priority: "High",
    status: "Completed",
    category: "Foundation",
    dueDate: "2026-06-22",
  },
  {
    id: "task-2",
    title: "Implement Forge & Conesta spec review requirements",
    description: "Ensure no placeholders, verify local compilation, standard configurations, and complete clean-structured files.",
    priority: "High",
    status: "In Progress",
    category: "Review Prep",
    dueDate: "2026-06-23",
  },
  {
    id: "task-3",
    title: "Integrate mock AI productivity analyzer model",
    description: "Generate static analytics metrics, tips feeds, and optimization ideas context maps on client side.",
    priority: "Medium",
    status: "In Progress",
    category: "Feature Design",
    dueDate: "2026-06-24",
  },
  {
    id: "task-4",
    title: "Design dark-mode dashboard graphs & progress indicators",
    description: "Write raw inline layouts and Tailwind CSS structures for visual activity trackers without heavy dependencies.",
    priority: "Low",
    status: "Completed",
    category: "UI Design",
    dueDate: "2026-06-21",
  },
  {
    id: "task-5",
    title: "Write comprehensive README project walkthrough",
    description: "Detail local setup parameters, project file maps, tech stack, and Day 1 alignment milestone checklists.",
    priority: "Medium",
    status: "Backlog",
    category: "Documentation",
    dueDate: "2026-06-25",
  },
];

export default function TasksPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Tasks</h1>
          <p className="text-muted-foreground mt-1">Review, monitor, and organize your development milestone steps.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Total: {sampleTasks.length} tasks</span>
        </div>
      </div>

      {/* Task List Container */}
      <div className="space-y-4">
        {sampleTasks.map((task) => {
          // Badges styling mappings
          const priorityStyles = {
            High: "bg-rose-500/10 text-rose-400 border-rose-500/20",
            Medium: "bg-amber-500/10 text-amber-400 border-amber-500/20",
            Low: "bg-blue-500/10 text-blue-400 border-blue-500/20",
          };

          const statusStyles = {
            Completed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
            "In Progress": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
            Backlog: "bg-neutral-800 text-muted-foreground border-neutral-700/50",
          };

          return (
            <div
              key={task.id}
              className="p-6 rounded-2xl bg-card border border-border hover:border-neutral-800 transition-all duration-200 flex flex-col md:flex-row md:items-start justify-between gap-4"
            >
              <div className="space-y-2 md:max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${priorityStyles[task.priority]}`}>
                    {task.priority} Priority
                  </span>
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${statusStyles[task.status]}`}>
                    {task.status}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                    {task.category}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-white">{task.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{task.description}</p>
              </div>

              <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-2 border-t md:border-t-0 border-border pt-3 md:pt-0">
                <span className="text-xs text-muted-foreground">Due Date</span>
                <span className="text-sm font-semibold text-white">{task.dueDate}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
