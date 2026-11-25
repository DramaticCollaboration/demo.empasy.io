export interface ProductScreenSlide {
  idx: number;
  tabLabel: string;
  title: string;
  route: string;
  demoUrl?: string;
  summary: string;
  rawUrl: string;
  annotatedUrl: string;
}

export interface ProductQuickTryPoint {
  step: number;
  menuPath: string;
  title: string;
  tip: string;
}

export interface ProductVisualGuide {
  productId: string;
  roleEasyLabel: string;
  standaloneHomepagePath: string;
  impactMetric?: {
    value: string;
    title: string;
    detail: string;
  };
  quickTryPoints: ProductQuickTryPoint[];
  screenshots: ProductScreenSlide[];
}
