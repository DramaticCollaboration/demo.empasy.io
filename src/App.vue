<template>
  <div class="portal-root">
    <SiteHeader />

    <main class="portal-main">
      <div v-if="loadError" class="container" style="padding: 6rem 0">
        <div class="card surface-card" style="border-color: rgba(239, 68, 68, 0.5)">
          <h2 style="color: #fca5a5; font-size: 1.3rem">{{ t('portal.kefef5350') }}</h2>
          <p style="color: var(--text-secondary); line-height: 1.8">{{ loadError }}</p>
          <p style="color: var(--text-tertiary); font-size: 0.88rem">
            {{ t('portal.k19ae1415') }}
          </p>
          <button type="button" class="btn btn-primary btn-sm" @click="reload">{{ t('portal.kad8db664') }}</button>
        </div>
      </div>

      <div v-else-if="loading && !catalog" class="container" style="padding: 8rem 0; text-align: center; color: var(--text-secondary)">
        {{ t('portal.kafdec087') }}
      </div>

      <RouterView v-else-if="catalog" />
    </main>

    <SiteFooter />

    <div
      v-if="toastMessage"
      class="copy-toast"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {{ toastMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import SiteFooter from '@/components/SiteFooter.vue';
import SiteHeader from '@/components/SiteHeader.vue';
import { usePortalStore } from '@/store/portalStore';
import { applyRouteSeoAndAnalytics } from '@/utils/seoAndAnalytics';

const { t, locale } = useI18n();
const route = useRoute();
const { catalog, loadError, loading, toastMessage, ensureCatalogLoaded } = usePortalStore();

function syncDocumentFavicon(): void {
  const existing = document.querySelectorAll<HTMLLinkElement>("link[rel*='icon']");
  existing.forEach((node) => node.parentNode?.removeChild(node));

  const svgLink = document.createElement('link');
  svgLink.rel = 'icon';
  svgLink.type = 'image/svg+xml';
  svgLink.href = '/favicon.svg';
  document.head.appendChild(svgLink);

  const icoLink = document.createElement('link');
  icoLink.rel = 'alternate icon';
  icoLink.type = 'image/x-icon';
  icoLink.href = '/favicon.ico';
  document.head.appendChild(icoLink);
}

async function reload(): Promise<void> {
  await ensureCatalogLoaded();
}

watch(
  [() => route.path, () => route.name, () => route.params.productId, catalog, locale],
  ([path, name, productId, cat]) => {
    const pid = typeof productId === 'string' ? productId : undefined;
    applyRouteSeoAndAnalytics(path, name, pid, cat);
  },
  { immediate: true },
);

onMounted(() => {
  syncDocumentFavicon();
  void ensureCatalogLoaded();
});
</script>
