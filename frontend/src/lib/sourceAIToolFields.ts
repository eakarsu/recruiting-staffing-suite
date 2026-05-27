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
