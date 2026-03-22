# CohortFlow | High-Ticket Learning Management System

CohortFlow is a professional, white-label management system designed specifically for cohort-based educational bootcamps and high-ticket accelerators. It streamlines the entire student lifecycle from application to alumni networking.

## 🚀 Key Features

### 💎 Landing & Admissions
- **High-Conversion Landing Page**: Optimized for elite educational programs.
- **Application Funnel**: Structured intake process for vetting high-quality candidates.

### 👑 Admin Management
- **Admissions Dashboard**: Review, approve, or reject student applications.
- **Cohort Overview**: Monitor active program metrics, completion rates, and revenue.
- **Operational Control**: Manage schedules and program themes centrally.

### 🎓 Student Experience
- **Personalized Dashboard**: Real-time schedule tracking and local time synchronization.
- **AI Peer Review Engine**: Submit assignments and receive AI-summarized feedback from peers using Genkit and Google Gemini.
- **Live Session Integration**: One-click access to workshops and interactive sessions.
- **Alumni Directory**: Exclusive networking access to past graduates for career growth.

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [ShadCN UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **AI/GenAI**: [Genkit](https://github.com/firebase/genkit) with Google Gemini
- **Database/Auth**: [Firebase](https://firebase.google.com/)

## 🤖 Agentic Readiness
This project is designed to be maintained by AI agents. For specific instructions on orchestration and agent roles, see:
- [Agent Instructions & Orchestration](docs/agent-instructions.md)
- [Project Vision & Original Prompt](docs/project-overview.md)

## 🏁 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Configure Environment**: Create a `.env` file with your Google API Key for Genkit.
3. **Run the development server**:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/ai`: Genkit flows and AI logic.
- `src/components`: Reusable UI components (ShadCN).
- `src/lib`: Mock data and utility functions.
- `docs`: Project documentation, vision archives, and agent instructions.
