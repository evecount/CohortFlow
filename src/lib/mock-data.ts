
export interface Academy {
  id: string;
  name: string;
  subdomain: string;
}

export interface Cohort {
  id: string;
  academyId: string;
  name: string;
  startDate: string;
  endDate: string;
  theme: string;
}

export interface Application {
  id: string;
  academyId: string;
  studentName: string;
  email: string;
  status: 'pending' | 'approved' | 'rejected';
  appliedDate: string;
  motivation: string;
}

export interface Session {
  id: string;
  cohortId: string;
  title: string;
  description: string;
  startTime: string;
  link: string;
  type: 'live' | 'deadline';
}

export interface PeerReview {
  id: string;
  cohortId: string;
  reviewerId: string;
  revieweeId: string;
  feedback: string;
  status: 'pending' | 'completed';
}

export interface Alumni {
  id: string;
  academyId: string;
  name: string;
  bio: string;
  role: string;
  company: string;
  cohortName: string;
  linkedIn: string;
}

export const MOCK_ACADEMY: Academy = {
  id: 'academy-1',
  name: 'DataScience Pro Academy',
  subdomain: 'datasciencepro',
};

export const MOCK_COHORTS: Cohort[] = [
  {
    id: 'cohort-1',
    academyId: 'academy-1',
    name: 'Spring 2026 Data Science Accelerator',
    startDate: '2026-03-01T09:00:00Z',
    endDate: '2026-06-01T17:00:00Z',
    theme: 'Machine Learning & Big Data',
  },
  {
    id: 'cohort-2',
    academyId: 'academy-1',
    name: 'Winter 2025 AI Leadership',
    startDate: '2025-11-01T09:00:00Z',
    endDate: '2026-02-15T17:00:00Z',
    theme: 'AI Management & Strategy',
  }
];

export const MOCK_APPLICATIONS: Application[] = [
  {
    id: 'app-1',
    academyId: 'academy-1',
    studentName: 'John Doe',
    email: 'john@example.com',
    status: 'pending',
    appliedDate: '2025-10-15',
    motivation: 'I want to transition my career into AI engineering and lead teams in the tech industry.',
  },
  {
    id: 'app-2',
    academyId: 'academy-1',
    studentName: 'Sarah Jenkins',
    email: 'sarah.j@techcorp.com',
    status: 'approved',
    appliedDate: '2025-10-10',
    motivation: 'To gain the technical rigor required for senior data roles.',
  }
];

export const MOCK_SESSIONS: Session[] = [
  {
    id: 'session-1',
    cohortId: 'cohort-1',
    title: 'Intro to Neural Networks',
    description: 'Live interactive session on backpropagation.',
    startTime: '2026-03-05T18:00:00Z',
    link: 'https://zoom.us/j/123456789',
    type: 'live',
  },
  {
    id: 'session-2',
    cohortId: 'cohort-1',
    title: 'Assignment 1: Gradient Descent',
    description: 'Submit your Jupyter notebook by midnight.',
    startTime: '2026-03-08T23:59:59Z',
    link: '#',
    type: 'deadline',
  }
];

export const MOCK_ALUMNI: Alumni[] = [
  {
    id: 'alum-1',
    academyId: 'academy-1',
    name: 'Alex Rivera',
    bio: 'Former software lead, now Head of Data at CloudScale.',
    role: 'Head of Data',
    company: 'CloudScale',
    cohortName: 'Spring 2024 Data Science',
    linkedIn: 'https://linkedin.com/in/arivera',
  },
  {
    id: 'alum-2',
    academyId: 'academy-1',
    name: 'Priya Sharma',
    bio: 'Expert in NLP and conversational AI.',
    role: 'AI Researcher',
    company: 'DeepThought',
    cohortName: 'Winter 2024 AI Mastery',
    linkedIn: 'https://linkedin.com/in/psharmaa',
  }
];
