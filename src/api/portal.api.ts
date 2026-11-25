import { $t, getActivePortalLocale, localeToSlug, type PortalLocale } from '@/locales';
import type {
  PortalCatalogPayload,
  ProductEntryLink,
  ReachResult,
} from '@/types/portal.types';

export function resolveCatalogPath(locale: PortalLocale): string {
  const slug = localeToSlug(locale);
  if (slug === 'en') return '/data/portal-catalog.en.json';
  if (slug === 'ja') return '/data/portal-catalog.ja.json';
  return '/data/portal-catalog.json';
}

export async function fetchPortalCatalog(locale: PortalLocale = getActivePortalLocale()): Promise<PortalCatalogPayload> {
  const response = await fetch(resolveCatalogPath(locale), {
    method: 'GET',
    headers: { Accept: 'application/json' },
    cache: 'no-cache',
  });

  if (!response.ok) {
    throw new Error(
      $t('portal.k1ce628c4', { p0: response.status }),
    );
  }

  const payload = (await response.json()) as PortalCatalogPayload;
  const isValid =
    payload &&
    Array.isArray(payload.products) &&
    payload.products.length > 0 &&
    Array.isArray(payload.productGroups) &&
    Array.isArray(payload.scenarios) &&
    Array.isArray(payload.topologyNodes);
  if (!isValid) {
    throw new Error($t('portal.k24f16745'));
  }
  return payload;
}

/**
 * 데모 사이트의 응답 여부를 실측한다.
 * 교차 출처 응답 본문은 읽을 수 없으므로 no-cors 요청의 성공(서버 응답 수신)과
 * 네트워크 실패(연결 거부, 이름 해석 실패, 시간 초과)만 구분한다.
 */

export async function copyTextToClipboard(text: string): Promise<boolean> {
  if (!text) {
    return false;
  }
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to textarea execCommand fallback
    }
  }
  try {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.left = '-9999px';
    document.body.appendChild(area);
    area.focus();
    area.select();
    const copied = document.execCommand('copy');
    document.body.removeChild(area);
    return copied;
  } catch {
    return false;
  }
}
