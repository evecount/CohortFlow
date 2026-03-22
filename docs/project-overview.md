# Project Overview: CohortFlow

This document captures the original vision and requirements used to initialize the CohortFlow project.

## Core Vision
To build a "white-label" LMS platform tailored for high-ticket, time-bound educational accelerators. Unlike generic LMS platforms (Moodle/Canvas), CohortFlow focuses on community, peer-to-peer learning, and high-touch administrative control.

## Original Requirements & Prompt Essence

### 1. User Personas
- **Admins**: Need to filter through applications (the "funnel") and see high-level cohort health.
- **Students**: Need a "home base" for their schedule, assignments, and networking.

### 2. Key Modules
- **Application System**: A public-facing form for potential students.
- **Dashboard**: A split interface for Admin (metrics/approvals) and Students (deadlines/sessions).
- **AI Integration**: A peer-review summarizer that uses LLMs to help students digest feedback from multiple classmates without getting overwhelmed.
- **Networking**: An Alumni Directory to facilitate the "lifelong value" promise of high-ticket cohorts.

### 3. Design Aesthetic
- **Professional & Trustworthy**: Use a palette of deep blues (Primary) and intelligent purples (Accent).
- **Clean Layouts**: Use ShadCN for a modern, high-quality feel that justifies a premium price point.

### 4. Technical Constraints
- Next.js 15 for performance and modern routing.
- Genkit for structured AI output.
- Mobile-responsive sidebars and tables.
- Placeholder image strategy for rapid prototyping.
