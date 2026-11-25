import { $t, getActivePortalLocale, localeToSlug, stripLocalePrefix, withLocalePath, type PortalLocale } from '@/locales';
import type { PortalCatalogPayload, ProductCatalogItem } from '@/types/portal.types';

const SITE_ORIGIN = 'https://demo.empasy.io';
const DEFAULT_IMAGE = `${SITE_ORIGIN}/images/screenshots/sync-verse/screen_01.png`;
const GA_MEASUREMENT_ID = 'G-6BNPM5TX7C';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | IArguments>;
    gtag?: (...args: unknown[]) => void;
  }
}

function setMetaContent(selector: string, attrName: 'name' | 'property', attrValue: string, content: string): void {
  if (typeof document === 'undefined') return;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonicalUrl(url: string): void {
  if (typeof document === 'undefined') return;
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

function setHreflangLinks(basePath: string): void {
  if (typeof document === 'undefined') return;
  const existing = document.head.querySelectorAll('link[rel="alternate"][hreflang]');
  existing.forEach((node) => node.remove());

  const pairs: Array<{ lang: string; href: string }> = [
    { lang: 'ko', href: `${SITE_ORIGIN}${withLocalePath(basePath, 'ko-KR')}` },
    { lang: 'en', href: `${SITE_ORIGIN}${withLocalePath(basePath, 'en-US')}` },
    { lang: 'ja', href: `${SITE_ORIGIN}${withLocalePath(basePath, 'ja-JP')}` },
    { lang: 'x-default', href: `${SITE_ORIGIN}${withLocalePath(basePath, 'ko-KR')}` },
  ];

  for (const pair of pairs) {
    const link = document.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('hreflang', pair.lang);
    link.setAttribute('href', pair.href);
    link.setAttribute('data-dynamic-hreflang', 'true');
    document.head.appendChild(link);
  }
}

function setDynamicJsonLd(schemaObj: Record<string, unknown> | null): void {
  if (typeof document === 'undefined') return;
  const scriptId = 'dynamic-route-jsonld';
  let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
  if (!schemaObj) {
    if (scriptEl) {
      scriptEl.remove();
    }
    return;
  }
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = scriptId;
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }
  scriptEl.textContent = JSON.stringify(schemaObj);
}

export function trackPageView(path: string, title: string): void {
  if (typeof window === 'undefined') return;
  const fullUrl = `${SITE_ORIGIN}${path.startsWith('/') ? path : `/${path}`}`;

  if (typeof window.gtag === 'function') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: title,
      page_path: path,
      page_location: fullUrl,
    });
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: 'virtual_pageview',
      page_title: title,
      page_path: path,
      page_location: fullUrl,
      site_domain: window.location.hostname || 'demo.empasy.io',
    });
  }
}

export function trackDemoLaunch(productId: string, label: string, targetUrl: string): void {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'demo_launch', {
      event_category: 'engagement',
      product_id: productId,
      demo_label: label,
      destination_url: targetUrl,
    });
  }
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: 'demo_launch',
      product_id: productId,
      demo_label: label,
      destination_url: targetUrl,
    });
  }
}

export function trackDownloadAsset(
  productId: string,
  label: string,
  fileName: string,
  channelType: string,
  url: string,
): void {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'file_download', {
      event_category: 'downloads',
      product_id: productId,
      asset_label: label,
      file_name: fileName,
      channel_type: channelType,
      link_url: url,
    });
  }
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: 'file_download',
      product_id: productId,
      asset_label: label,
      file_name: fileName,
      channel_type: channelType,
      link_url: url,
    });
  }
}

export function trackCredentialCopy(productId: string, field: string): void {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'copy_demo_credential', {
      event_category: 'engagement',
      product_id: productId,
      credential_field: field,
    });
  }
}

function ogLocaleOf(locale: PortalLocale): string {
  if (locale === 'en-US') return 'en_US';
  if (locale === 'ja-JP') return 'ja_JP';
  return 'ko_KR';
}

function buildProductSchema(product: ProductCatalogItem, locale: PortalLocale): Record<string, unknown> {
  const slug = localeToSlug(locale);
  const canonicalUrl = `${SITE_ORIGIN}${withLocalePath(`/products/${product.id}`, locale)}`;
  const homeUrl = `${SITE_ORIGIN}${withLocalePath('/', locale)}`;
  const isEta = product.id === 'sync-eta';
  const primaryAccount = product.demoAccounts[0];

  const softwareApp: Record<string, unknown> = {
    '@type': 'SoftwareApplication',
    '@id': `${canonicalUrl}#software`,
    name: `${product.name} (${product.subtitle})`,
    alternateName: [product.name, product.subtitle, $t('portal.k16902a18', { p0: product.name }), `Empasy ${product.name}`],
    applicationCategory: product.category === 'operations' || product.category === 'flagship' ? 'BusinessApplication' : 'DeveloperApplication',
    operatingSystem: isEta ? 'Windows 10, Windows 11, macOS 12+, Web' : 'Web, Linux, Cloud, On-Premise',
    softwareVersion: isEta ? '0.0.58' : '2026.1',
    inLanguage: slug,
    url: canonicalUrl,
    description: `${product.subtitle} — ${product.summary}`,
    publisher: {
      '@id': 'https://empasy.io/#organization',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'KRW',
      description: $t('portal.kac74f514'),
    },
    featureList: product.richFeatures.map((f) => `${f.title}: ${f.description}`),
  };

  if (product.downloadAssets && product.downloadAssets.length > 0) {
    const primaryAsset = product.downloadAssets[0];
    softwareApp.downloadUrl = primaryAsset.downloadUrl.startsWith('http')
      ? primaryAsset.downloadUrl
      : `${SITE_ORIGIN}${primaryAsset.downloadUrl}`;
  }

  const breadcrumb: Record<string, unknown> = {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: $t('portal.ka696b743'),
        item: homeUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: `${product.name} — ${product.subtitle}`,
        item: canonicalUrl,
      },
    ],
  };

  const faqEntities: Array<Record<string, unknown>> = [
    {
      '@type': 'Question',
      name: $t('portal.kbfa19d80', { p0: product.name, p1: product.subtitle }),
      acceptedAnswer: {
        '@type': 'Answer',
        text: `${product.subtitle}. ${product.summary}`,
      },
    },
    ...product.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  ];

  if (primaryAccount) {
    faqEntities.push({
      '@type': 'Question',
      name: $t('portal.k5209b2cd', { p0: product.name }),
      acceptedAnswer: {
        '@type': 'Answer',
        text: $t('portal.k6a39b1ec', { p0: product.subdomain, p1: primaryAccount.accountId, p2: primaryAccount.demoAccessCode, p3: primaryAccount.roleTitle }),
      },
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      softwareApp,
      breadcrumb,
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        mainEntity: faqEntities,
      },
    ],
  };
}

export function applyRouteSeoAndAnalytics(
  routePath: string,
  routeName: string | symbol | null | undefined,
  productIdParam: string | undefined,
  catalog: PortalCatalogPayload | null,
): void {
  const locale = getActivePortalLocale();
  const cleanPath = routePath.split('?')[0].split('#')[0] || '/';
  const basePath = stripLocalePrefix(cleanPath);
  const canonicalUrl = `${SITE_ORIGIN}${withLocalePath(basePath, locale)}`;
  const routeNameStr = typeof routeName === 'string' ? routeName : '';

  const defaultTitle = $t('portal.seoDefaultTitle');
  const defaultDesc = $t('portal.seoDefaultDesc');
  const defaultKeywords = $t('portal.seoDefaultKeywords');

  let title = defaultTitle;
  let description = defaultDesc;
  let keywords = defaultKeywords;
  let dynamicSchema: Record<string, unknown> | null = null;

  if (routeNameStr.startsWith('product-detail') && productIdParam) {
    const product = catalog?.products.find((p) => p.id === productIdParam);
    if (product) {
      title = $t('portal.k16c38de0', { p0: product.name });
      description = $t('portal.kbf865a54', { p0: product.name, p1: product.subtitle, p2: product.summary });
      keywords = $t('portal.k106e9440', { p0: product.name, p1: product.subtitle, p2: product.name, p3: product.name, p4: product.englishRoleBadge, p5: defaultKeywords });
      dynamicSchema = buildProductSchema(product, locale);
    } else {
      title = $t('portal.k16c38de0', { p0: productIdParam.toUpperCase() });
    }
  } else if (routeNameStr.startsWith('demo-guide')) {
    title = $t('portal.ka325f80a');
    description = $t('portal.k29677ca5');
    keywords = $t('portal.kd59c36d2');
    dynamicSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: $t('portal.ka696b743'),
          item: `${SITE_ORIGIN}${withLocalePath('/', locale)}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: $t('portal.kc52b7097'),
          item: canonicalUrl,
        },
      ],
    };
  }

  if (typeof document !== 'undefined') {
    document.title = title;
  }

  setCanonicalUrl(canonicalUrl);
  setHreflangLinks(basePath);
  setMetaContent('meta[name="description"]', 'name', 'description', description);
  setMetaContent('meta[name="keywords"]', 'name', 'keywords', keywords);
  setMetaContent('meta[property="og:locale"]', 'property', 'og:locale', ogLocaleOf(locale));
  setMetaContent('meta[property="og:site_name"]', 'property', 'og:site_name', $t('portal.k3cc4bce0'));
  setMetaContent('meta[property="og:title"]', 'property', 'og:title', title);
  setMetaContent('meta[property="og:description"]', 'property', 'og:description', description);
  setMetaContent('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
  setMetaContent('meta[property="og:image"]', 'property', 'og:image', DEFAULT_IMAGE);
  setMetaContent('meta[name="twitter:title"]', 'name', 'twitter:title', title);
  setMetaContent('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  setMetaContent('meta[name="twitter:image"]', 'name', 'twitter:image', DEFAULT_IMAGE);
  setDynamicJsonLd(dynamicSchema);

  trackPageView(cleanPath, title);
}
