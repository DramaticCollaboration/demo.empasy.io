import { createI18n } from 'vue-i18n';
import koKR from './lang/ko-KR';
import enUS from './lang/en-US';
import jaJP from './lang/ja-JP';

export type PortalLocale = 'ko-KR' | 'en-US' | 'ja-JP';
export type PortalLangSlug = 'ko' | 'en' | 'ja';

const STORAGE_KEY = 'sync_portal_locale';
const SITE_COOKIE_NAME = 'empasy_site_locale';
const ADMIN_COOKIE_NAME = 'empasy_locale';

export function normalizePortalLocale(raw?: string | null): PortalLocale {
  if (!raw) return 'ko-KR';
  const norm = raw.trim().replace('_', '-').toLowerCase();
  if (norm === 'ja' || norm.startsWith('ja-')) return 'ja-JP';
  if (norm === 'en' || norm.startsWith('en-')) return 'en-US';
  return 'ko-KR';
}

export function localeToSlug(locale: PortalLocale): PortalLangSlug {
  if (locale === 'en-US') return 'en';
  if (locale === 'ja-JP') return 'ja';
  return 'ko';
}

export function slugToLocale(slug?: string | null): PortalLocale {
  return normalizePortalLocale(slug);
}

export function detectLocaleFromPath(pathname: string): PortalLocale | null {
  const clean = pathname || '/';
  if (clean === '/en' || clean.startsWith('/en/')) return 'en-US';
  if (clean === '/ja' || clean.startsWith('/ja/')) return 'ja-JP';
  if (clean === '/ko' || clean.startsWith('/ko/')) return 'ko-KR';
  return null;
}

export function stripLocalePrefix(pathname: string): string {
  const clean = pathname || '/';
  const stripped = clean.replace(/^\/(ko|en|ja)(?=\/|$)/i, '');
  return stripped.startsWith('/') ? stripped : `/${stripped}`;
}

export function withLocalePath(pathname: string, locale: PortalLocale): string {
  const base = stripLocalePrefix(pathname);
  const slug = localeToSlug(locale);
  if (slug === 'ko') {
    return base === '' ? '/' : base;
  }
  if (base === '/' || base === '') {
    return `/${slug}/`;
  }
  return `/${slug}${base}`;
}

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return m ? decodeURIComponent(m[1]) : null;
}

function writeWildcardCookie(name: string, value: string): void {
  if (typeof document === 'undefined') return;
  const maxAge = 60 * 60 * 24 * 365;
  let cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    if (host === 'empasy.io' || host.endsWith('.empasy.io')) {
      cookie += '; Domain=.empasy.io';
    }
  }
  document.cookie = cookie;
}

export function readStoredPreference(): PortalLocale | null {
  const siteCookie = readCookie(SITE_COOKIE_NAME);
  if (siteCookie) return normalizePortalLocale(siteCookie);
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return normalizePortalLocale(saved);
  } catch {
    // ignore storage errors
  }
  const adminCookie = readCookie(ADMIN_COOKIE_NAME);
  if (adminCookie) return normalizePortalLocale(adminCookie);
  return null;
}

function applyHtmlLang(locale: PortalLocale): void {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('lang', localeToSlug(locale));
}

function detectInitialLocale(): PortalLocale {
  if (typeof window !== 'undefined') {
    const pathLocale = detectLocaleFromPath(window.location.pathname);
    if (pathLocale) return pathLocale;
  }
  const stored = readStoredPreference();
  if (stored) return stored;
  return 'ko-KR';
}

const initialLocale = detectInitialLocale();
applyHtmlLang(initialLocale);

export const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: 'ko-KR',
  messages: {
    'ko-KR': koKR,
    'en-US': enUS,
    'ja-JP': jaJP,
  },
  silentTranslationWarn: true,
  missingWarn: false,
  silentFallbackWarn: true,
});

export function getActivePortalLocale(): PortalLocale {
  return normalizePortalLocale((i18n.global.locale as { value: string }).value);
}

export function setPortalLocale(locale: PortalLocale, persist = true): void {
  const normalized = normalizePortalLocale(locale);
  (i18n.global.locale as { value: string }).value = normalized;
  applyHtmlLang(normalized);
  if (!persist) return;
  try {
    localStorage.setItem(STORAGE_KEY, normalized);
  } catch {
    // ignore
  }
  writeWildcardCookie(SITE_COOKIE_NAME, normalized);
  // Admin consoles support ko-KR and en-US; default ja-JP users to en-US in admin consoles
  writeWildcardCookie(ADMIN_COOKIE_NAME, normalized === 'ko-KR' ? 'ko-KR' : 'en-US');
}

export function $t(key: string, params?: Record<string, unknown>): string {
  if (!key) return '';
  return params ? (i18n.global.t as (k: string, p?: Record<string, unknown>) => string)(key, params) : (i18n.global.t as (k: string) => string)(key);
}
