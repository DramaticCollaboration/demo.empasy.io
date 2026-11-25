import { $t, getActivePortalLocale, i18n, normalizePortalLocale, type PortalLocale } from '@/locales';
import { computed, ref, watch } from 'vue';
import {
  copyTextToClipboard,
  fetchPortalCatalog,
} from '@/api/portal.api';
import type {
  PortalCatalogPayload,
  ProductCatalogItem,
} from '@/types/portal.types';

const catalogCache = new Map<PortalLocale, PortalCatalogPayload>();
const pendingLoads = new Map<PortalLocale, Promise<void>>();

const catalog = ref<PortalCatalogPayload | null>(null);
const loadedLocale = ref<PortalLocale | null>(null);
const loadError = ref<string | null>(null);
const loading = ref<boolean>(false);
const toastMessage = ref<string>('');
const copiedKey = ref<string>('');
let toastTimer: number | null = null;
let copiedTimer: number | null = null;

async function ensureCatalogLoaded(targetLocale?: PortalLocale): Promise<void> {
  const locale = targetLocale ? normalizePortalLocale(targetLocale) : getActivePortalLocale();
  const cached = catalogCache.get(locale);
  if (cached) {
    if (getActivePortalLocale() === locale) {
      catalog.value = cached;
      loadedLocale.value = locale;
      loadError.value = null;
    }
    return;
  }

  let promise = pendingLoads.get(locale);
  if (!promise) {
    loading.value = true;
    promise = fetchPortalCatalog(locale)
      .then((payload) => {
        catalogCache.set(locale, payload);
        if (getActivePortalLocale() === locale) {
          catalog.value = payload;
          loadedLocale.value = locale;
          loadError.value = null;
        }
      })
      .catch((err: unknown) => {
        if (getActivePortalLocale() === locale) {
          loadError.value =
            err instanceof Error ? err.message : $t('portal.k61e72422');
        }
      })
      .finally(() => {
        pendingLoads.delete(locale);
        if (pendingLoads.size === 0) {
          loading.value = false;
        }
      });
    pendingLoads.set(locale, promise);
  }
  await promise;
}

watch(
  () => (i18n.global.locale as { value: string }).value,
  (nextLocale) => {
    void ensureCatalogLoaded(normalizePortalLocale(nextLocale));
  },
);

async function copyWithToast(value: string, label: string, buttonKey?: string): Promise<void> {
  const ok = await copyTextToClipboard(value);
  if (toastTimer) {
    window.clearTimeout(toastTimer);
  }
  toastMessage.value = ok
    ? $t('portal.k5695cb8f', { p0: label, p1: value })
    : $t('portal.k80472c3a', { p0: label });
  toastTimer = window.setTimeout(() => {
    toastMessage.value = '';
  }, 2600);

  if (ok && buttonKey) {
    if (copiedTimer) {
      window.clearTimeout(copiedTimer);
    }
    copiedKey.value = buttonKey;
    copiedTimer = window.setTimeout(() => {
      copiedKey.value = '';
    }, 2000);
  }
}

export function usePortalStore() {
  const products = computed<ProductCatalogItem[]>(() => catalog.value?.products ?? []);

  function findProduct(productId: string): ProductCatalogItem | undefined {
    return products.value.find((item) => item.id === productId);
  }

  function productsOfGroup(groupKey: string): ProductCatalogItem[] {
    return products.value.filter((item) => item.category === groupKey);
  }

  function isCopied(buttonKey: string): boolean {
    return copiedKey.value === buttonKey;
  }

  return {
    catalog,
    loadedLocale,
    loadError,
    loading,
    toastMessage,
    copiedKey,
    products,
    ensureCatalogLoaded,
    findProduct,
    productsOfGroup,
    isCopied,
    copyWithToast,
  };
}
