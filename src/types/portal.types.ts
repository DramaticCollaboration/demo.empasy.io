export type ProductCategoryKey = 'flagship' | 'data-ai' | 'security' | 'operations';

export type ReachState = 'CHECKING' | 'REACHABLE' | 'UNREACHABLE';

export interface DemoAccountItem {
  roleTitle: string;
  accountId: string;
  demoAccessCode: string;
  scopeSummary: string;
}

export interface ProductEntryLink {
  id: string;
  label: string;
  description?: string;
  badgeText: string;
  cloudUrl: string;
  downloadUrl?: string;
  buttonLabel?: string;
  isDownload?: boolean;
  isMobileViewport?: boolean;
  isPrimary?: boolean;
}

export interface ProductRichFeatureItem {
  badgeNo: string;
  title: string;
  description: string;
}

export interface ProductProcessStepItem {
  stepNo: number;
  title: string;
  description: string;
}

export interface ProductFaqItem {
  question: string;
  answer: string;
}

export interface ProductCliSimulation {
  command: string;
  roleTag: string;
  roleSummary: string;
  outputLines: string[];
}

export type DemoMode = 'live' | 'download' | 'hybrid' | 'none';

export interface ProductDownloadAsset {
  id: string;
  label: string;
  versionBadge: string;
  platformBadge: string;
  description: string;
  downloadUrl: string;
  buttonLabel?: string;
  isDirectDownload?: boolean;
  isPrimary?: boolean;
  channelType?: 'demo' | 'official' | 'source';
  targetServerLabel?: string;
  resetWarning?: string;
}

export interface ProductCatalogItem {
  id: string;
  name: string;
  subtitle: string;
  englishRoleBadge: string;
  category: ProductCategoryKey;
  tierBadge: string;
  integrationBadge?: string;
  subdomain: string;
  repoPath: string;
  canonicalApiPrefix: string;
  docUrl: string;
  proposalPdfUrl?: string;
  demoMode?: DemoMode;
  externalDemoUrl?: string;
  externalDemoLabel?: string;
  downloadAssets?: ProductDownloadAsset[];
  iconBoxClass: string;
  faIconClass: string;
  techTags: string[];
  summary: string;
  coreCapabilities: string[];
  vsLegacyTitle: string;
  vsLegacyPoints: string[];
  vsAgentTitle: string;
  vsAgentPoints: string[];
  richFeatures: ProductRichFeatureItem[];
  processSteps: ProductProcessStepItem[];
  faqs: ProductFaqItem[];
  cliSimulation: ProductCliSimulation;
  mcpTools: string[];
  dbTables: string[];
  demoAccounts: DemoAccountItem[];
  entryLinks: ProductEntryLink[];
}

export interface ProductGroupItem {
  key: ProductCategoryKey;
  navLabel: string;
  title: string;
  description: string;
}

export interface GuidedScenarioAccountHint {
  roleLabel: string;
  accountId?: string;
  accessCode?: string;
  altAccountsNote?: string;
  isPublicAccess?: boolean;
}

export interface GuidedScenarioSecondaryLink {
  label: string;
  url: string;
}

export interface GuidedScenarioStep {
  stepOrder: number;
  productId: string;
  productName: string;
  integrationBadge?: string;
  actionTitle: string;
  actionDetail: string;
  subdomain: string;
  demoUrl?: string;
  secondaryLink?: GuidedScenarioSecondaryLink;
  menuPath?: string;
  tryPoint?: string;
  recommendedAccount?: GuidedScenarioAccountHint;
  isMobileViewport?: boolean;
  mobilePreviewLabel?: string;
}

export interface GuidedScenarioItem {
  id: string;
  categoryBadge?: string;
  title: string;
  painPoint?: string;
  expectedOutcome?: string;
  targetPersona: string;
  summary: string;
  estimatedMinutes: number;
  workflowFlowLabel?: string;
  roleSwitchTip?: string;
  hasApprovalGuideLink?: boolean;
  steps: GuidedScenarioStep[];
}

export type ArchitectureZoneKey = 'flagship' | 'data-ai' | 'security' | 'operations';

export interface TopologyNodeItem {
  id: string;
  productId: string;
  label: string;
  tierLevel: number;
  roleSummary: string;
  shortTag?: string;
  architectureZone?: ArchitectureZoneKey;
  isHub?: boolean;
  isFoundation?: boolean;
  subdomain: string;
  connectedTo: string[];
  protocolLabel: string;
}

export interface InfraServiceItem {
  id: string;
  name: string;
  roleSummary: string;
  cloudUrl: string;
  portBadge: string;
  demoAccountHint: string;
}

export interface ProvenImpactItem {
  id: string;
  clientBadge: string;
  metricValue: string;
  metricTitle: string;
  summary: string;
  highlightNote: string;
  productId: string;
}

export interface PatentHighlightItem {
  code: string;
  title: string;
  statusBadge: string;
  linkedProducts: string[];
  docUrl: string;
}

export interface PortalCatalogPayload {
  portalMeta: {
    title: string;
    portalSubdomain: string;
    corporateSiteUrl: string;
    techDocsUrl: string;
    resetScheduleNotice: string;
    defaultMasterId: string;
    defaultMasterCode: string;
  };
  productGroups: ProductGroupItem[];
  scenarios: GuidedScenarioItem[];
  topologyNodes: TopologyNodeItem[];
  products: ProductCatalogItem[];
  infraServices: InfraServiceItem[];
  provenImpacts?: ProvenImpactItem[];
  patentHighlights?: PatentHighlightItem[];
}

export interface ReachResult {
  linkId: string;
  state: ReachState;
  latencyMs: number | null;
  checkedAt: string;
  diagnosticNote: string;
}
