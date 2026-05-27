import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Database,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  FileText,
  Files,
  LayoutDashboard,
  LucideIcon,
  PackageCheck,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
} from 'lucide-react';

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type FeatureDefinition = { title: string; href: string; category: string; summary: string; bullets: string[] };
export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};
export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const features = [
  {
    slug: 'candidates',
    title: 'Candidates',
    href: '/candidates',
    category: 'Talent',
    icon: BriefcaseBusiness,
    summary: 'Candidates workflow normalized for the Recruiting Staffing suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Candidates queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Candidates', value: '24', note: 'Active' }, { label: 'Exceptions', value: '3', note: 'Need review' }, { label: 'Due Soon', value: '5', note: 'Next 14 days' }],
  },
  {
    slug: 'jobs',
    title: 'Jobs',
    href: '/jobs',
    category: 'Talent',
    icon: Users,
    summary: 'Jobs workflow normalized for the Recruiting Staffing suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Jobs queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Jobs', value: '35', note: 'Active' }, { label: 'Exceptions', value: '4', note: 'Need review' }, { label: 'Due Soon', value: '6', note: 'Next 14 days' }],
  },
  {
    slug: 'pipelines',
    title: 'Pipelines',
    href: '/pipelines',
    category: 'Talent',
    icon: ClipboardList,
    summary: 'Pipelines workflow normalized for the Recruiting Staffing suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Pipelines queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Pipelines', value: '46', note: 'Active' }, { label: 'Exceptions', value: '5', note: 'Need review' }, { label: 'Due Soon', value: '7', note: 'Next 14 days' }],
  },
  {
    slug: 'interviews',
    title: 'Interviews',
    href: '/interviews',
    category: 'Talent',
    icon: CalendarCheck,
    summary: 'Interviews workflow normalized for the Recruiting Staffing suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Interviews queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Interviews', value: '57', note: 'Active' }, { label: 'Exceptions', value: '6', note: 'Need review' }, { label: 'Due Soon', value: '8', note: 'Next 14 days' }],
  },
  {
    slug: 'scorecards',
    title: 'Scorecards',
    href: '/scorecards',
    category: 'Operations',
    icon: Activity,
    summary: 'Scorecards workflow normalized for the Recruiting Staffing suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Scorecards queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Scorecards', value: '68', note: 'Active' }, { label: 'Exceptions', value: '7', note: 'Need review' }, { label: 'Due Soon', value: '9', note: 'Next 14 days' }],
  },
  {
    slug: 'offers',
    title: 'Offers',
    href: '/offers',
    category: 'Operations',
    icon: Workflow,
    summary: 'Offers workflow normalized for the Recruiting Staffing suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Offers queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Offers', value: '79', note: 'Active' }, { label: 'Exceptions', value: '8', note: 'Need review' }, { label: 'Due Soon', value: '10', note: 'Next 14 days' }],
  },
  {
    slug: 'clients',
    title: 'Clients',
    href: '/clients',
    category: 'Operations',
    icon: FileText,
    summary: 'Clients workflow normalized for the Recruiting Staffing suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Clients queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Clients', value: '90', note: 'Active' }, { label: 'Exceptions', value: '9', note: 'Need review' }, { label: 'Due Soon', value: '11', note: 'Next 14 days' }],
  },
  {
    slug: 'placements',
    title: 'Placements',
    href: '/placements',
    category: 'Operations',
    icon: ShieldCheck,
    summary: 'Placements workflow normalized for the Recruiting Staffing suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Placements queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Placements', value: '101', note: 'Active' }, { label: 'Exceptions', value: '10', note: 'Need review' }, { label: 'Due Soon', value: '12', note: 'Next 14 days' }],
  },
  {
    slug: 'background-checks',
    title: 'Background Checks',
    href: '/background-checks',
    category: 'Governance',
    icon: BarChart3,
    summary: 'Background Checks workflow normalized for the Recruiting Staffing suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Background Checks queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Background Checks', value: '112', note: 'Active' }, { label: 'Exceptions', value: '11', note: 'Need review' }, { label: 'Due Soon', value: '13', note: 'Next 14 days' }],
  },
  {
    slug: 'sourcing',
    title: 'Sourcing',
    href: '/sourcing',
    category: 'Governance',
    icon: PackageCheck,
    summary: 'Sourcing workflow normalized for the Recruiting Staffing suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Sourcing queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Sourcing', value: '123', note: 'Active' }, { label: 'Exceptions', value: '12', note: 'Need review' }, { label: 'Due Soon', value: '14', note: 'Next 14 days' }],
  },
  {
    slug: 'forecasts',
    title: 'Forecasts',
    href: '/forecasts',
    category: 'Intelligence Layer',
    icon: Bell,
    summary: 'Forecasts workflow normalized for the Recruiting Staffing suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Forecasts queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Forecasts', value: '134', note: 'Active' }, { label: 'Exceptions', value: '13', note: 'Need review' }, { label: 'Due Soon', value: '15', note: 'Next 14 days' }],
  },
  {
    slug: 'reports',
    title: 'Reports',
    href: '/reports',
    category: 'Intelligence Layer',
    icon: Files,
    summary: 'Reports workflow normalized for the Recruiting Staffing suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Reports queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Reports', value: '145', note: 'Active' }, { label: 'Exceptions', value: '14', note: 'Need review' }, { label: 'Due Soon', value: '16', note: 'Next 14 days' }],
  },
  {
    slug: "candidate-screening",
    title: "Candidate Screening",
    href: "/candidate-screening",
    category: "Recruiter Screener",
    icon: Workflow,
    summary: "Candidate Screening elevated from the Recruiter Screener source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Candidate Screening queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Candidate Screening", value: "24", note: 'Active' },
      { label: 'Review', value: "4", note: 'Needs attention' },
      { label: 'Due Soon', value: "3", note: 'Next 14 days' },
    ],
  },
  {
    slug: "resume-role-fit",
    title: "Resume Role Fit",
    href: "/resume-role-fit",
    category: "Recruiter Screener",
    icon: Workflow,
    summary: "Resume Role Fit elevated from the Recruiter Screener source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Resume Role Fit queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Resume Role Fit", value: "33", note: 'Active' },
      { label: 'Review', value: "5", note: 'Needs attention' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "interview-shortlist",
    title: "Interview Shortlist",
    href: "/interview-shortlist",
    category: "Recruiter Screener",
    icon: Workflow,
    summary: "Interview Shortlist elevated from the Recruiter Screener source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Interview Shortlist queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Interview Shortlist", value: "42", note: 'Active' },
      { label: 'Review', value: "6", note: 'Needs attention' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: 'documents',
    title: 'Documents',
    href: '/documents',
    category: 'Core Platform',
    icon: Files,
    summary: 'Recruiting Staffing documents, packets, evidence, attachments, and exports.',
    bullets: ['Documents', 'Uploads', 'Exports'],
    metrics: [{ label: 'Documents', value: '640', note: 'Tracked' }, { label: 'In Review', value: '42', note: 'Open' }, { label: 'Uploaded', value: '88', note: 'This month' }],
  },
  {
    slug: 'notifications',
    title: 'Notifications',
    href: '/notifications',
    category: 'Core Platform',
    icon: Bell,
    summary: 'Recruiting Staffing alerts, reminders, exceptions, and approvals.',
    bullets: ['Alerts', 'Reminders', 'Exceptions'],
    metrics: [{ label: 'Unread', value: '34', note: 'Needs review' }, { label: 'Critical', value: '7', note: 'Escalated' }, { label: 'Resolved', value: '211', note: 'This week' }],
  },
  {
    slug: 'integrations',
    title: 'Integrations',
    href: '/integrations',
    category: 'Core Platform',
    icon: Plug,
    summary: 'Recruiting Staffing source-system connector health and sync status.',
    bullets: ['Connectors', 'Sync', 'Warnings'],
    metrics: [{ label: 'Connectors', value: '12', note: 'Configured' }, { label: 'Warnings', value: '3', note: 'Need attention' }, { label: 'Last Sync', value: '5m', note: 'Source data' }],
  },
  {
    slug: 'profiles',
    title: 'Profiles',
    href: '/profiles',
    category: 'Core Platform',
    icon: UserRound,
    summary: 'Recruiting Staffing users, roles, teams, permissions, and ownership settings.',
    bullets: ['Users', 'Roles', 'Teams'],
    metrics: [{ label: 'Users', value: '72', note: 'Active' }, { label: 'Teams', value: '9', note: 'Configured' }, { label: 'Access Reviews', value: '5', note: 'Open' }],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: 'Recruiting Staffing assistant for triage, summaries, drafting, recommendations, and operational review.',
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '128', note: 'Last 24 hours' },
      { label: 'Drafts', value: '204', note: 'Generated' },
      { label: 'Escalations', value: '14', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: 'Targeted AI tools for scoring, classification, extraction, exception review, and reporting.',
    bullets: ['Scoring', 'Classification', 'Exception review'],
    metrics: [
      { label: 'Runs', value: '318', note: 'Last 24 hours' },
      { label: 'Signals', value: '88', note: 'New alerts' },
      { label: 'Accepted', value: '117', note: 'Reviewer accepted' },
    ],
  },
] as const;

const allFeatures = [...features, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({ label: feature.title, href: feature.href, icon: feature.icon }));
export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({ title: feature.title, href: feature.href, category: feature.category, summary: feature.summary, bullets: [...feature.bullets] }));

export const featureFamilies = [
  { name: 'Talent', features: ['Candidates', 'Jobs', 'Pipelines', 'Interviews'] },
  { name: 'Operations', features: ['Scorecards', 'Offers', 'Clients', 'Placements'] },
  { name: 'Governance', features: ['Background Checks', 'Sourcing'] },
  { name: 'Recruiter Screener', features: ["Candidate Screening","Resume Role Fit","Interview Shortlist"] },
  { name: 'Intelligence Layer', features: ['Forecasts', 'Reports', 'AI Assistant', 'AI Tools'] },
  { name: 'Core Platform', features: ['Documents', 'Notifications', 'Integrations', 'Profiles'] },
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: `${feature.title} is normalized from source applications into one merged suite workflow.`,
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries(features.map((feature) => [feature.slug, toPage(feature)]));
export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(aiFeatures.map((feature) => [feature.slug, toPage(feature)]));
export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: ['AIRecruitingAssistant', 'AICandidateScreening where applicable'],
      operatingQueues: [`${feature.title} records`, `${feature.title} approvals`, `${feature.title} exceptions`],
      outputs: [`${feature.title} dashboard`, `${feature.title} export`, `${feature.title} audit trail`],
      relatedRoutes: [{ label: 'Dashboard', href: '/dashboard' }, { label: 'All Features', href: '/features' }, { label: 'Reports', href: '/reports' }],
    },
  ]),
);
