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
