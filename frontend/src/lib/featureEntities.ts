export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  ['candidates', 'Candidates Records', 'Candidates priority queue', 'Open', 'Candidates exception list', 'Talent Lead', '$0'],
  ['jobs', 'Jobs Records', 'Jobs priority queue', 'Review', 'Jobs exception list', 'Talent Lead', '$0'],
  ['pipelines', 'Pipelines Records', 'Pipelines priority queue', 'Action needed', 'Pipelines exception list', 'Talent Lead', '$0'],
  ['interviews', 'Interviews Records', 'Interviews priority queue', 'Open', 'Interviews exception list', 'Talent Lead', '$0'],
  ['scorecards', 'Scorecards Records', 'Scorecards priority queue', 'Review', 'Scorecards exception list', 'Operations Lead', '$0'],
  ['offers', 'Offers Records', 'Offers priority queue', 'Action needed', 'Offers exception list', 'Operations Lead', '$0'],
  ['clients', 'Clients Records', 'Clients priority queue', 'Open', 'Clients exception list', 'Operations Lead', '$0'],
  ['placements', 'Placements Records', 'Placements priority queue', 'Review', 'Placements exception list', 'Operations Lead', '$0'],
  ['background-checks', 'Background Checks Records', 'Background Checks priority queue', 'Action needed', 'Background Checks exception list', 'Governance Lead', '$0'],
  ['sourcing', 'Sourcing Records', 'Sourcing priority queue', 'Open', 'Sourcing exception list', 'Governance Lead', '$0'],
  ['forecasts', 'Forecasts Records', 'Forecasts priority queue', 'Review', 'Forecasts exception list', 'Intelligence Layer Lead', '$0'],
  ['reports', 'Reports Records', 'Reports priority queue', 'Action needed', 'Reports exception list', 'Intelligence Layer Lead', '$0'],
  ["candidate-screening","Candidate Screening Records","Candidate Screening operating queue","Open","Candidate Screening follow-up list","Recruiter Screener","$0"],
  ["resume-role-fit","Resume Role Fit Records","Resume Role Fit operating queue","Review","Resume Role Fit follow-up list","Recruiter Screener","$0"],
  ["interview-shortlist","Interview Shortlist Records","Interview Shortlist operating queue","Review","Interview Shortlist follow-up list","Recruiter Screener","$0"],
  ['documents', 'Documents Records', 'Documents priority queue', 'Open', 'Documents exception list', 'Core Platform Lead', '$0'],
  ['notifications', 'Notifications Records', 'Notifications priority queue', 'Review', 'Notifications exception list', 'Core Platform Lead', '$0'],
  ['integrations', 'Integrations Records', 'Integrations priority queue', 'Action needed', 'Integrations exception list', 'Core Platform Lead', '$0'],
  ['profiles', 'Profiles Records', 'Profiles priority queue', 'Open', 'Profiles exception list', 'Core Platform Lead', '$0'],
  ['ai-assistant', 'AI Assistant Records', 'AI Assistant priority queue', 'Review', 'AI Assistant exception list', 'Intelligence Layer Lead', '$0'],
  ['ai-tools', 'AI Tools Records', 'AI Tools priority queue', 'Action needed', 'AI Tools exception list', 'Intelligence Layer Lead', '$0'],
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-05-27', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-05-29', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} exception queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
