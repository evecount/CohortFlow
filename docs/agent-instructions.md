# Agentic Flow Instructions & Orchestration Guide

This document provides context and instructions for AI agents and orchestrators tasked with maintaining or expanding the CohortFlow project.

## 🤖 Agent Roles

### 1. The Orchestrator (Architect)
- **Responsibility**: High-level task decomposition and multi-agent coordination.
- **Goal**: Ensure that all features align with the "High-Ticket/Elite" brand aesthetic.
- **Instruction**: Before assigning tasks, review `docs/project-overview.md` to maintain the core vision.

### 2. Frontend Specialist (ShadCN/Tailwind)
- **Responsibility**: UI/UX implementation using Next.js 15 and Tailwind.
- **Instruction**: Strictly use the ShadCN components in `@/components/ui`. Maintain the deep blue (`primary`) and intelligent purple (`accent`) color palette defined in `globals.css`.

### 3. Firebase Integrator
- **Responsibility**: Connecting the UI to live data and authentication.
- **Instruction**: 
    - Use ONLY the client-side Firebase SDK.
    - Follow the `useMemoFirebase` pattern for stabilizing queries.
    - Surfacing permissions errors via the `errorEmitter` architecture is mandatory.

### 4. AI Feature Engineer (Genkit)
- **Responsibility**: Developing and refining GenAI flows.
- **Instruction**: All AI logic must reside in `src/ai/flows`. Use Handlebars for prompt templating. Ensure schemas are strictly typed with Zod for predictable output.

## 🛠 Project State: Hybrid Conceptual
- **Current State**: The project is a functional prototype with mock data.
- **Transition Task**: The next logical step for an agent is to replace `src/lib/mock-data.ts` with Firestore listeners and implement Firebase Authentication.

## 🚦 Guardrails
- **No Direct Logic in Templates**: Keep Handlebars templates logic-less.
- **Hydration Safety**: Use `useEffect` for browser-specific APIs (e.g., local time in the dashboard).
- **No Admin SDK**: Never use `firebase-admin` in this client-focused architecture.
