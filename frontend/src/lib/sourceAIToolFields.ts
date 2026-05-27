export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "resume-job-search-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve the Resume Job Search workflow and produce a decision-ready output.",
      "placeholder": "Describe the goal, customer, case, or decision needed",
      "options": [],
      "required": true,
      "source": "AiResumeJobApplication, AICodingInterviewAgent, AICareerPathAgentForStudents"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste notes, records, documents, metrics, transcript text, or source details for Resume Job Search.",
      "placeholder": "Paste the source context to analyze",
      "options": [],
      "required": true,
      "source": "AiResumeJobApplication, AICodingInterviewAgent, AICareerPathAgentForStudents"
    },
    {
      "name": "workflow_focus",
      "label": "Workflow Focus",
      "type": "select",
      "defaultValue": "Resume Optimizer",
      "placeholder": "Select the workflow",
      "options": [
        "Resume Optimizer",
        "Application Tracker",
        "Interview Prep",
        "Career Path Plan"
      ],
      "required": true,
      "source": "AiResumeJobApplication, AICodingInterviewAgent, AICareerPathAgentForStudents"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Professional action plan",
      "placeholder": "Select output format",
      "options": [
        "Professional action plan",
        "Evidence table",
        "Risk review",
        "Checklist",
        "Executive summary"
      ],
      "required": true,
      "source": "AiResumeJobApplication, AICodingInterviewAgent, AICareerPathAgentForStudents"
    }
  ],
  "recruiter-screener-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve the Recruiter Screener workflow and produce audit-ready next actions.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AiRecruiterScreener"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste Recruiter Screener source details, notes, records, or documents.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "AiRecruiterScreener"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "AiRecruiterScreener"
    }
  ]
};
