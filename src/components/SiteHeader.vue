<template>
  <header class="portal-header" ref="headerRef">
    <div class="container header-inner">
      <div class="brand-lockup">
        <a :href="corporateHomeUrl" class="brand-logo-link" :aria-label="t('header.corporateAria')">
          <img src="/images/logo.svg" alt="Empasy" class="brand-logo" />
        </a>
        <span class="brand-sep" aria-hidden="true">/</span>
        <RouterLink :to="homePath" class="brand-portal-name" @click="closeAllMenus">
          {{ t('header.portalName') }}
        </RouterLink>
      </div>

      <div class="header-drawer" :class="{ open: menuOpen }">
        <nav class="header-nav" :aria-label="t('header.navAria')">
          <div class="nav-mega-wrap">
            <button
              type="button"
              class="nav-mega-trigger"
              :class="{ open: megaOpen }"
              :aria-expanded="megaOpen"
              aria-haspopup="true"
              :aria-label="t('header.productMenuAria')"
              @click="toggleMega"
            >
              <span>{{ t('header.allProducts') }}</span>
              <span class="nav-count-badge">{{ products.length }}</span>
              <svg class="nav-chevron" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polyline points="4 6 8 10 12 6" />
              </svg>
            </button>

            <div
              v-if="megaOpen"
              class="product-mega-menu"
              role="region"
              :aria-label="t('header.productMenuAria')"
            >
              <div class="mega-search-bar">
                <svg class="mega-search-icon" viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <circle cx="9" cy="9" r="6" />
                  <line x1="13.5" y1="13.5" x2="18" y2="18" />
                </svg>
                <input
                  ref="searchInputRef"
                  v-model="searchQuery"
                  type="search"
                  class="mega-search-input"
                  :placeholder="t('header.searchPlaceholder')"
                  :aria-label="t('header.searchPlaceholder')"
                />
                <button
                  v-if="searchQuery"
                  type="button"
                  class="mega-search-clear"
                  :aria-label="t('header.clearSearch')"
                  @click.stop="clearSearch"
                >
                  &times;
                </button>
                <kbd v-else class="mega-kbd">{{ t('header.searchShortcut') }}</kbd>
              </div>

              <div v-if="filteredProductGroups.length > 0" class="mega-groups-grid">
                <div
                  v-for="grp in filteredProductGroups"
                  :key="grp.key"
                  class="mega-group-col"
                >
                  <div class="mega-group-title">
                    <span>{{ grp.navLabel }}</span>
                    <span class="mega-group-count">{{ grp.items.length }}</span>
                  </div>
                  <ul class="mega-prod-list">
                    <li v-for="item in grp.items" :key="item.product.id" class="mega-prod-item">
                      <RouterLink
                        :to="productPath(item.product.id)"
                        class="mega-prod-link"
                        @click="closeAllMenus"
                      >
                        <div class="mega-prod-name-row">
                          <span class="mega-prod-name">{{ item.product.name }}</span>
                          <span v-if="item.product.integrationBadge" class="mega-prod-badge">
                            {{ item.product.integrationBadge }}
                          </span>
                        </div>
                        <span class="mega-prod-role">{{ item.roleLabel }}</span>
                      </RouterLink>
                      <a
                        v-if="item.primaryUrl"
                        :href="item.primaryUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="mega-prod-open"
                        :title="t('portal.archDirectOpenAria', { p0: item.product.name })"
                        @click="closeAllMenus"
                      >
                        {{ t('header.quickOpen') }} &#8599;
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p v-else class="mega-empty">{{ t('header.noSearchResults') }}</p>

              <div class="mega-footer">
                <div class="mega-cred-inline">
                  <span class="mega-cred-label">{{ t('header.sharedAccountLabel') }}</span>
                  <button
                    type="button"
                    class="mini-copy"
                    :class="{ 'is-copied': isCopied('mega-id') }"
                    @click="copyWithToast(defaultMasterId, t('portal.defaultIdLabel'), 'mega-id')"
                  >
                    ID <code>{{ defaultMasterId }}</code>
                  </button>
                  <button
                    type="button"
                    class="mini-copy"
                    :class="{ 'is-copied': isCopied('mega-pw') }"
                    @click="copyWithToast(defaultMasterCode, t('portal.defaultPwLabel'), 'mega-pw')"
                  >
                    PW <code>{{ defaultMasterCode }}</code>
                  </button>
                </div>
                <div class="mega-footer-links">
                  <RouterLink :to="{ path: homePath, hash: '#architecture' }" class="text-link" @click="closeAllMenus">
                    {{ t('header.viewArchitecture') }}
                  </RouterLink>
                  <RouterLink :to="guidePath" class="text-link" @click="closeAllMenus">
                    {{ t('header.viewAllAccounts') }}
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>

          <RouterLink :to="{ path: homePath, hash: '#scenarios' }" @click="closeAllMenus">{{ t('header.scenarios') }}</RouterLink>
          <RouterLink :to="guidePath" active-class="is-current" @click="closeAllMenus">{{ t('header.demoGuide') }}</RouterLink>
          <a :href="etaDownloadUrl" target="_blank" rel="noopener noreferrer" @click="closeAllMenus">{{ t('header.downloadEta') }} &#8599;</a>
        </nav>

        <div class="header-actions">
          <div class="lang-switch" role="navigation" :aria-label="t('header.langSwitch')">
            <button
              v-for="item in langOptions"
              :key="item.locale"
              type="button"
              class="lang-btn"
              :class="{ active: currentLocale === item.locale }"
              :aria-current="currentLocale === item.locale ? 'page' : undefined"
              @click="switchLocale(item.locale)"
            >
              {{ item.label }}
            </button>
          </div>
          <a :href="corporateHomeUrl" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" @click="closeAllMenus">
            {{ t('header.empasyHome') }}
          </a>
          <a :href="contactUrl" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" @click="closeAllMenus">
            {{ t('header.contactUs') }}
          </a>
        </div>
      </div>

      <button
        type="button"
        class="mobile-toggle"
        :aria-label="menuOpen ? t('header.closeMenu') : t('header.openMenu')"
        :aria-expanded="menuOpen"
        @click="toggleMenu"
      >
        <svg v-if="!menuOpen" viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        <svg v-else viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
    <div v-if="menuOpen" class="mobile-backdrop" aria-hidden="true" @click="closeAllMenus" />
  </header>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { getProductVisualGuide } from '@/data/productScreenshots';
import { usePortalStore } from '@/store/portalStore';
import {
  localeToSlug,
  normalizePortalLocale,
  setPortalLocale,
  withLocalePath,
  type PortalLocale,
} from '@/locales';
import type { ProductCatalogItem } from '@/types/portal.types';
import { getPrimaryConsoleEntry } from '@/utils/productLinks';

const { t, locale } = useI18n();
const route = useRoute();
const router = useRouter();
const { catalog, products, productsOfGroup, isCopied, copyWithToast } = usePortalStore();

const headerRef = ref<HTMLElement | null>(null);
const searchInputRef = ref<HTMLInputElement | null>(null);
const menuOpen = ref(false);
const megaOpen = ref(false);
const searchQuery = ref('');

const langOptions: Array<{ locale: PortalLocale; label: string }> = [
  { locale: 'ko-KR', label: 'KO' },
  { locale: 'en-US', label: 'EN' },
  { locale: 'ja-JP', label: 'JA' },
];

const currentLocale = computed<PortalLocale>(() => normalizePortalLocale(locale.value));
const langSlug = computed(() => localeToSlug(currentLocale.value));
const corporateSiteUrl = computed(() => catalog.value?.portalMeta.corporateSiteUrl ?? 'https://empasy.io');
const corporateHomeUrl = computed(() =>
  langSlug.value === 'ko' ? `${corporateSiteUrl.value}/` : `${corporateSiteUrl.value}/${langSlug.value}/pages/index.html`,
);
const contactUrl = computed(() => `${corporateSiteUrl.value}/${langSlug.value}/pages/contact.html`);
const etaDownloadUrl = computed(() => `${corporateSiteUrl.value}/${langSlug.value}/download_eta.html`);
const homePath = computed(() => withLocalePath('/', currentLocale.value));
const guidePath = computed(() => withLocalePath('/guide', currentLocale.value));
const defaultMasterId = computed(() => catalog.value?.portalMeta.defaultMasterId ?? 'admin');
const defaultMasterCode = computed(() => catalog.value?.portalMeta.defaultMasterCode ?? '123456');

const topologyTagByProduct = computed(() => {
  const map = new Map<string, string>();
  for (const node of catalog.value?.topologyNodes ?? []) {
    map.set(node.productId, `${node.roleSummary} ${node.shortTag ?? ''}`.trim());
  }
  return map;
});

interface EnrichedMenuProduct {
  product: ProductCatalogItem;
  roleLabel: string;
  primaryUrl: string;
  searchableText: string;
}

const filteredProductGroups = computed(() => {
  const groups = catalog.value?.productGroups ?? [];
  const q = searchQuery.value.trim().toLowerCase();

  return groups
    .map((grp) => {
      const items: EnrichedMenuProduct[] = productsOfGroup(grp.key)
        .map((prod) => {
          const guide = getProductVisualGuide(prod.id, currentLocale.value);
          const roleLabel = guide?.roleEasyLabel ?? prod.subtitle;
          const primaryUrl = getPrimaryConsoleEntry(prod)?.cloudUrl ?? '';
          const topoText = topologyTagByProduct.value.get(prod.id) ?? '';
          const searchableText = [
            prod.name,
            prod.id,
            prod.subtitle,
            prod.englishRoleBadge,
            prod.summary,
            prod.subdomain,
            roleLabel,
            topoText,
          ]
            .join(' ')
            .toLowerCase();
          return { product: prod, roleLabel, primaryUrl, searchableText };
        })
        .filter((item) => !q || item.searchableText.includes(q));

      return {
        key: grp.key,
        navLabel: grp.navLabel,
        items,
      };
    })
    .filter((grp) => grp.items.length > 0);
});

function productPath(productId: string): string {
  return withLocalePath(`/products/${productId}`, currentLocale.value);
}

function switchLocale(target: PortalLocale): void {
  setPortalLocale(target, true);
  const nextPath = withLocalePath(route.path, target);
  if (nextPath !== route.path) {
    void router.push({ path: nextPath, hash: route.hash });
  }
  closeAllMenus();
}

function closeAllMenus(): void {
  menuOpen.value = false;
  megaOpen.value = false;
}

function toggleMenu(): void {
  menuOpen.value = !menuOpen.value;
  if (menuOpen.value) {
    megaOpen.value = true;
  } else {
    megaOpen.value = false;
  }
}

function toggleMega(): void {
  megaOpen.value = !megaOpen.value;
  if (megaOpen.value) {
    void nextTick(() => {
      searchInputRef.value?.focus();
    });
  }
}

function clearSearch(): void {
  searchQuery.value = '';
  searchInputRef.value?.focus();
}

function handleDocumentClick(e: MouseEvent): void {
  if (!megaOpen.value || menuOpen.value) return;
  const target = e.target as Node | null;
  if (headerRef.value && target && !headerRef.value.contains(target)) {
    megaOpen.value = false;
  }
}

function handleKeydown(e: KeyboardEvent): void {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    if (window.innerWidth <= 768) {
      menuOpen.value = true;
    }
    megaOpen.value = true;
    void nextTick(() => {
      searchInputRef.value?.focus();
      searchInputRef.value?.select();
    });
    return;
  }
  if (e.key === 'Escape' && (menuOpen.value || megaOpen.value)) {
    closeAllMenus();
  }
}

function handleResize(): void {
  if (window.innerWidth > 768 && menuOpen.value) {
    menuOpen.value = false;
    megaOpen.value = false;
  }
}

watch(
  () => route.fullPath,
  () => {
    closeAllMenus();
  },
);

watch(menuOpen, (open) => {
  document.documentElement.classList.toggle('portal-menu-open', open);
  document.body.classList.toggle('portal-menu-open', open);
});

onMounted(() => {
  document.addEventListener('click', handleDocumentClick);
  document.addEventListener('keydown', handleKeydown);
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  document.removeEventListener('click', handleDocumentClick);
  document.removeEventListener('keydown', handleKeydown);
  window.removeEventListener('resize', handleResize);
  document.documentElement.classList.remove('portal-menu-open');
  document.body.classList.remove('portal-menu-open');
});
</script>
