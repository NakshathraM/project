# Aura AI - AI Productivity Suite (Day 1 Spec & Foundation Scaffold)

A minimalist, high-performance task management and cognitive optimization dashboard built to satisfy the Forge/Conesta Day 1 foundation criteria.

## Features & Screens

1. **Home Page (`/`)**: High-converting visual hero landing showcasing Core Features, Call-To-Action entry routes, and project indicators.
2. **Dashboard (`/dashboard`)**: Summary cards with key metrics (Focus Hours, Task Completion rate, Weekly performance benchmarks) and recent activities.
3. **Tasks Page (`/tasks`)**: Task tracking console detailing categories, status flags (Completed, In Progress, Backlog), and priority parameters (High, Medium, Low).
4. **AI Assistant (`/ai`)**: Simulated performance diagnostic dashboard providing daily tips and high-impact focus recommendations.

## Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org) (App Router Structure)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (Premium modern dark theme)
- **Components**: [React 19](https://react.dev)

## Local Development

Follow these steps to run the application locally:

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to interact with the application.

### 3. Build & Compile Checks
```bash
npm run build
```

---

## Day 1 Milestone Alignment Status

| Requirement / Spec | Status | Description |
| :--- | :---: | :--- |
| **App Router `/app` Structure** | ✅ Done | Utilizes standard layouts and client/server page segregation. |
| **Tailwind Styling & Dark Theme** | ✅ Done | Premium dark UI theme initialized with a harmonious palette (`#09090b` zinc-950 base). |
| **Layout & Navbar Integration** | ✅ Done | Navigation layout handles active path identification dynamically without glitches. |
| **Compile & Build Checklist** | ✅ Done | Zero TypeScript warnings, placeholder comments, or build errors. |
| **No External API Dependencies** | ✅ Done | Built completely client-side utilizing stable mock structures. |
