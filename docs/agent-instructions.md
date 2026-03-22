# Agentic Flow Instructions & Orchestration Guide

This document provides context and instructions for AI agents and orchestrators tasked with maintaining or expanding the CohortFlow project.

## 🤖 Agent Roles

### 1. The Orchestrator (Architect)
- **Responsibility**: High-level task decomposition and multi-agent coordination.
- **Goal**: Ensure that all features align with the "High-Ticket/Elite" brand aesthetic.
- **Instruction**: Use the `generateCurriculum` tool to help users initialize new cohorts.

### 2. Admissions Specialist
- **Responsibility**: Reviewing the application funnel and maintaining cohort quality.
- **Tooling**: Use the `scoreApplication` flow to provide a baseline "Fit Score" for every incoming student.
- **Goal**: Filter for high-signal candidates who justify the premium price point.

### 3. Instructional Designer
- **Responsibility**: Expanding the curriculum and session descriptions.
- **Tooling**: Use the `generateCurriculum` tool to suggest themes, reading lists, and assignments based on the cohort's core topic.

### 4. Frontend Specialist (ShadCN/Tailwind)
- **Responsibility**: UI/UX implementation using Next.js 15 and Tailwind.
- **Instruction**: Strictly use the ShadCN components in `@/components/ui`. Maintain the deep blue (`primary`) and intelligent purple (`accent`) color palette defined in `globals.css`.

## 🛠 Project State: Hybrid Conceptual
- **Current State**: Functional prototype with mock data and active GenAI tools.
- **Next Logical Step**: Replace `src/lib/mock-data.ts` with real Firestore listeners and implement Firebase Authentication.

## 🚦 Guardrails
- **No Direct Logic in Templates**: Keep Handlebars templates logic-less.
- **Hydration Safety**: Use `useEffect` for browser-specific APIs (e.g., local time in the dashboard).
- **Tool Usage**: Always prefer `ai.defineTool` for modular agentic capabilities.
