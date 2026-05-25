export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AIRecruitingAssistant', ownership: 'Candidates source capabilities and workflows', coverage: ['Candidates', 'Jobs', 'Pipelines'] },
  { name: 'AICandidateScreening', ownership: 'Jobs source capabilities and workflows', coverage: ['Interviews', 'Scorecards', 'Offers'] },
  { name: 'AIInterviewScheduler', ownership: 'Pipelines source capabilities and workflows', coverage: ['Clients', 'Placements', 'Background Checks'] },
  { name: 'AIStaffingAgencyCRM', ownership: 'Interviews source capabilities and workflows', coverage: ['Sourcing', 'Forecasts', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Candidates', value: '84', note: 'Active' },
  { label: 'Jobs', value: '61', note: 'Open' },
  { label: 'Pipelines', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Candidates operating view', 'Jobs operating view', 'Pipelines operating view', 'Interviews operating view', 'Scorecards operating view', 'Offers operating view', 'Clients operating view', 'Placements operating view'];
export const workflowHighlights = ['Candidates workflow with records, approvals, audit, and reporting', 'Jobs workflow with records, approvals, audit, and reporting', 'Pipelines workflow with records, approvals, audit, and reporting', 'Interviews workflow with records, approvals, audit, and reporting', 'Scorecards workflow with records, approvals, audit, and reporting'];
