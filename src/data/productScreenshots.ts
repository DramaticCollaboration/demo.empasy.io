import { getActivePortalLocale, normalizePortalLocale, type PortalLocale } from '@/locales';
import type {
  ProductQuickTryPoint,
  ProductScreenSlide,
  ProductVisualGuide,
} from './productScreenshots.types';
import { PRODUCT_VISUAL_GUIDES_KO } from './productScreenshots.ko';
import { PRODUCT_VISUAL_GUIDES_EN } from './productScreenshots.en';
import { PRODUCT_VISUAL_GUIDES_JA } from './productScreenshots.ja';

export type { ProductQuickTryPoint, ProductScreenSlide, ProductVisualGuide };

export const PRODUCT_VISUAL_GUIDES_BY_LOCALE: Record<PortalLocale, Record<string, ProductVisualGuide>> = {
  'ko-KR': PRODUCT_VISUAL_GUIDES_KO,
  'en-US': PRODUCT_VISUAL_GUIDES_EN,
  'ja-JP': PRODUCT_VISUAL_GUIDES_JA,
};

export const PRODUCT_VISUAL_GUIDES: Record<string, ProductVisualGuide> = PRODUCT_VISUAL_GUIDES_BY_LOCALE['ko-KR'];

export function getProductVisualGuide(productId: string, locale?: PortalLocale): ProductVisualGuide | undefined {
  const active = locale ? normalizePortalLocale(locale) : getActivePortalLocale();
  return PRODUCT_VISUAL_GUIDES_BY_LOCALE[active]?.[productId] ?? PRODUCT_VISUAL_GUIDES_BY_LOCALE['ko-KR'][productId];
}
