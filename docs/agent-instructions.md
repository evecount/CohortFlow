# Agentic Flow Instructions & Orchestration Guide

This document provides context for AI agents and orchestrators tasked with maintaining or expanding CohortFlow.

## 📂 Architecture & Routing (Crucial)
To avoid confusion, the app uses a flat, clear separation for the two primary personas:
- `src/app/admin/*`: The "Academy Founder" / Instructor portal. (Pickaxe Management)
- `src/app/dashboard/*`: The "Student" / Learner portal. (The Learning Experience)
- `src/app/apply/*`: The public-facing intake funnel.

**Constraint**: Do not use Next.js Route Groups (e.g., `(admin)`) unless specifically requested. Stick to explicit pathnames to keep routing logic predictable for agents.

## 🤖 Agent Roles

### 1. The Orchestrator (Architect)
- **Goal**: Maintain the "Shopify for Education" vision.
- **Task**: Coordinate between the Admin builder tools and the Student experience.
- **Instruction**: Ensure any new feature for instructors (Admin) has a corresponding "View" or "Action" for students (Dashboard).

### 2. Instructional Design Agent
- **Tooling**: `generateCurriculum`, `generateClassFromPdf`, `coachLecturer`.
- **Responsibility**: Improving the quality of generated educational content.
- **Logic**: Always prefer "Academic-to-Practitioner" translation. Turn raw data into actionable slides and exercises.

### 3. Admissions Agent
- **Tooling**: `scoreApplication`.
- **Responsibility**: Maintaining the "Elite" status of cohorts by filtering for high-signal candidates.

### 4. Presentation Coach Agent (Multimodal)
- **Tooling**: `coachLecturer`.
- **Responsibility**: Helping instructors refine their delivery using Multimodal Live capabilities.
- **Goal**: Analyze speech cadence, body language (via frame snapshots), and content alignment.

### 5. UI/UX Specialist
- **Palette**: Deep Blue (Primary: `210 60% 40%`) and Intelligent Purple (Accent: `240 70% 65%`).
- **Standard**: Strictly use ShadCN and Tailwind. Maintain "Masterclass" levels of professional polish.

## 🚦 Guardrails
- **Hydration Safety**: Use `useEffect` for any browser-specific data (e.g., local clocks in `src/app/dashboard/page.tsx`).
- **Genkit Standard**: Use Genkit 1.x syntax. Define tools and prompts using the `ai` object.
- **Data Handling**: Currently using `src/lib/mock-data.ts`. Future agents should prioritize moving these to Firestore listeners using `useCollection` and `useDoc` hooks.
