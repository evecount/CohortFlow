# Project Overview: CohortFlow

This document captures the original vision and requirements used to initialize the CohortFlow project.

## Core Vision
To build a "white-label" LMS platform tailored for high-ticket, time-bound educational accelerators. Unlike generic LMS platforms (Moodle/Canvas), CohortFlow focuses on community, peer-to-peer learning, and high-touch administrative control.

## The GenAI Value Proposition
Generative AI is the core differentiator for CohortFlow. It solves two primary "founder" problems:
1. **The Blank Page Problem**: Use the `Curriculum Generator` to turn a topic into a structured, pedagogical experience.
2. **The Gating Problem**: Use the `Admissions Scorer` to automate the vetting of hundreds of applicants, ensuring only high-quality peers enter the network.

## Inspirations & Reference Models
- **Maven**: The primary model for the cohort-based landing page and the "funnel" approach to student enrollment.
- **Reforge / Section**: For the professional, deep-blue aesthetic and the focus on "high-signal" peer networking.
- **Masterclass**: For the premium, "justifies the price" UI components and typography.

## Key Modules
- **Application System**: A public-facing form for potential students.
- **Dashboard**: A split interface for Admin (metrics/approvals) and Students (deadlines/sessions).
- **AI Peer Review Engine**: A summarizer that helps students digest feedback from multiple classmates.
- **AI Admissions**: Automated scoring of applications to assist admin decision-making.

## Technical Constraints
- Next.js 15 for performance and modern routing.
- Genkit for structured AI output and agentic tools.
- ShadCN for a modern, high-quality feel.
