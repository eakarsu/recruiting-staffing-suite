export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "resume-job-search",
    "label": "Resume Job Search",
    "description": "Open Resume Job Search workflows elevated from AiResumeJobApplication, AICodingInterviewAgent, AICareerPathAgentForStudents.",
    "href": "/resume-optimizer",
    "sourceProjects": [
      "AiResumeJobApplication",
      "AICodingInterviewAgent",
      "AICareerPathAgentForStudents"
    ],
    "examples": [
      "Resume Optimizer",
      "Application Tracker",
      "Interview Prep",
      "Career Path Plan"
    ],
    "count": 3
  },
  {
    "id": "recruiter-screener",
    "label": "Recruiter Screener",
    "description": "Open Recruiter Screener workflows elevated from AiRecruiterScreener.",
    "href": "/candidate-screening",
    "sourceProjects": [
      "AiRecruiterScreener"
    ],
    "examples": [
      "Candidate Screening",
      "Resume Role Fit",
      "Interview Shortlist"
    ],
    "count": 1
  }
];
