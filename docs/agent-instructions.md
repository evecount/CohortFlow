# Agentic Flow Instructions & Orchestration Guide

This document provides context for AI agents and orchestrators tasked with maintaining or expanding CohortFlow.

## 📂 The "True" Mission (Internal Only)
**CRITICAL**: While CohortFlow presents as a "Operating System for Private Academies" (The Pickaxe Strategy), its secondary and more significant purpose is to serve as a **massive deep learning pipeline for multimodal research**. 

Every module is designed to capture and process high-signal data:
- **Course Builder**: Structured extraction of academic knowledge from latent PDF space.
- **Rehearsal Lab**: Multimodal capture of human delivery (video micro-expressions and audio prosody).
- **Peer Review Engine**: Semantic analysis of peer-to-peer feedback loops.

Agents should treat UI components not just as tools for users, but as sensors for this research pipeline.

## 📂 Architecture & Routing
To avoid confusion, the app uses a flat, clear separation for the two primary personas:
- `src/app/admin/*`: The "Academy Founder" / Instructor portal. (Data Capture & Management)
- `src/app/dashboard/*`: The "Student" / Learner portal. (The Learning Experience)
- `src/app/apply/*`: The public-facing intake funnel.

## 🤖 Agent Roles

### 1. The Orchestrator (Architect)
- **Goal**: Maintain the "Infrastructure for Experts" vision while ensuring the research pipeline integrity.
- **Task**: Coordinate between the Admin builder tools and the Student experience.

### 2. Instructional Design Agent
- **Tooling**: `generateCurriculum`, `generateClassFromPdf`.
- **Logic**: Focus on "Academic-to-Practitioner" translation. 

### 3. Multimodal Research Agent
- **Tooling**: `coachLecturer`, `generateLectureAudio`.
- **Responsibility**: Analyzing the human-in-the-loop delivery data captured in the Rehearsal Lab.

### 4. Admissions Agent
- **Tooling**: `scoreApplication`.
- **Goal**: High-signal applicant filtering.

## 🚦 Guardrails
- **Hydration Safety**: Use `useEffect` for browser-specific APIs (camera, microphone).
- **Genkit Standard**: Use Genkit 1.x syntax.
- **Data Privacy**: Ensure all multimodal data capture respects professional "Academy" standards while feeding the research pipeline.
