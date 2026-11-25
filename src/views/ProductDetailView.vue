<template>
  <div v-if="product" class="portal-page">
    <section class="portal-hero">
      <div class="container">
        <div class="breadcrumb">
          <RouterLink :to="homePath">{{ t('portal.k1902e9f4') }}</RouterLink>
          <span>/</span>
          <span>{{ product.name }}</span>
        </div>

        <div class="hero-copy" style="margin-top: 16px">
          <p class="hero-eyebrow">
            {{ product.englishRoleBadge }}
            <span v-if="product.integrationBadge" class="integration-tag" style="margin-left: 8px">{{ product.integrationBadge }}</span>
          </p>
          <h1 class="hero-title">{{ product.name }}</h1>
          <p class="hero-subtitle">{{ product.subtitle }}</p>
          <p v-if="product.id === 'sync-insight'" class="integration-notice">
            {{ t('portal.insightIntegratedNotice') }}
          </p>
          <div class="hero-actions">
            <a
              v-if="primaryEntry"
              :href="primaryEntry.cloudUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary btn-lg"
            >
              {{ primaryEntry.buttonLabel || t('portal.ka50ad6f1') }}
            </a>
            <a
              :href="standaloneUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline btn-lg"
            >
              {{ t('portal.kedc56ce8') }}
            </a>
          </div>
        </div>

        <div v-if="visualGuide && visualGuide.screenshots.length" class="detail-showcase">
          <div class="filter-tabs" role="tablist">
            <button
              v-for="(sl, idx) in visualGuide.screenshots"
              :key="sl.idx"
              type="button"
              role="tab"
              class="filter-tab"
              :class="{ active: activeSlideIdx === idx }"
              @click="activeSlideIdx = idx"
            >
              {{ sl.tabLabel }}
            </button>
          </div>
          <div v-if="activeSlide" class="showcase-frame">
            <div class="showcase-bar">
              <strong>{{ activeSlide.title }}</strong>
              <div class="showcase-bar-actions">
                <button type="button" class="zoom-trigger-btn" @click="lightboxOpen = true">
                  {{ t('portal.kd3a02ef5') }}
                </button>
                <a
                  v-if="activeSlide.demoUrl"
                  :href="activeSlide.demoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-link"
                >
                  {{ t('portal.k5ada3c64') }}
                </a>
              </div>
            </div>
            <button
              type="button"
              class="showcase-img-btn"
              :aria-label="t('portal.k8b78d498', { p0: product.name, p1: activeSlide.title })"
              @click="lightboxOpen = true"
            >
              <img :src="activeSlide.rawUrl" :alt="`${product.name} - ${activeSlide.title}`" class="showcase-img" />
            </button>
          </div>
          <p v-if="activeSlide" class="showcase-caption">{{ activeSlide.summary }}</p>

          <Teleport to="body">
            <div
              v-if="lightboxOpen && activeSlide"
              class="img-lightbox"
              role="dialog"
              aria-modal="true"
              :aria-label="t('portal.k99240217', { p0: product.name, p1: activeSlide.title })"
              @click.self="lightboxOpen = false"
            >
              <div class="img-lightbox-bar">
                <span class="img-lightbox-title">{{ activeSlide.title }}</span>
                <button type="button" class="img-lightbox-close" :aria-label="t('portal.kc3ec9a11')" @click="lightboxOpen = false">
                  {{ t('portal.k94b7dba1') }}
                </button>
              </div>
              <div class="img-lightbox-stage">
                <img :src="activeSlide.rawUrl" :alt="`${product.name} - ${activeSlide.title}`" class="img-lightbox-img" />
              </div>
              <p class="img-lightbox-hint">{{ t('portal.k5dd8e012') }}</p>
            </div>
          </Teleport>
        </div>
      </div>
    </section>

    <section id="demo-console-section" class="section section-tinted">
      <div class="container">
        <div class="section-head">
          <p class="section-kicker">{{ t('portal.k4fdda89f') }}</p>
          <h2 class="section-title">{{ product.name }} {{ t('portal.k1d9bcf8a') }}</h2>
          <p class="section-desc">{{ catalog?.portalMeta.resetScheduleNotice }}</p>
        </div>

        <div class="demo-grid-2">
          <div class="detail-box">
            <h3>{{ t('portal.kc1e83cfe') }}</h3>
            <div class="entry-stack">
              <div
                v-for="el in product.entryLinks"
                :key="el.id"
                class="entry-row"
                :class="{ 'is-primary': !el.isDownload && el.isPrimary }"
              >
                <div>
                  <div class="entry-title">{{ el.label }}</div>
                  <p v-if="el.description" class="entry-desc">{{ el.description }}</p>
                  <div class="entry-url">{{ el.badgeText }}</div>
                </div>
                <a
                  :href="el.cloudUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  :class="!el.isDownload && (!hasPrimaryConsole || el.isPrimary) ? 'btn btn-primary btn-sm' : 'btn btn-outline btn-sm'"
                >
                  {{ el.buttonLabel || t('portal.ke5637183') }}
                </a>
              </div>
              <div v-for="dl in uniqueDownloadAssets" :key="dl.id" class="entry-row">
                <div>
                  <div class="entry-title">{{ dl.label }}</div>
                  <div class="entry-url">{{ dl.versionBadge }}</div>
                </div>
                <a :href="dl.downloadUrl" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                  {{ dl.buttonLabel || t('portal.k5c5095ab') }}
                </a>
              </div>
              <div v-if="product.docUrl" class="entry-row">
                <div>
                  <div class="entry-title">{{ t('portal.kda5c6b97') }}</div>
                  <div class="entry-url">{{ t('portal.kf19b3bb5') }}</div>
                </div>
                <a :href="product.docUrl" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                  {{ t('portal.k323a23d8') }}
                </a>
              </div>
            </div>
          </div>

          <div class="detail-box">
            <h3>{{ t('portal.k68f2faff') }}</h3>
            <div class="entry-stack">
              <div v-for="acc in product.demoAccounts" :key="acc.roleTitle + acc.accountId" class="cred-row">
                <div class="entry-title">{{ acc.roleTitle }}</div>
                <p class="entry-url" style="margin-bottom: 8px">{{ acc.scopeSummary }}</p>
                <div class="copy-row">
                  <button
                    type="button"
                    class="copy-btn"
                    :class="{ 'is-copied': isCopied(`detail-${product.id}-${acc.accountId}-id`) }"
                    @click="copyWithToast(acc.accountId, t('portal.idFieldSuffix', { p0: acc.roleTitle }), `detail-${product.id}-${acc.accountId}-id`)"
                  >
                    <span class="copy-label">ID</span>
                    <code>{{ acc.accountId }}</code>
                    <span class="copy-act">{{ isCopied(`detail-${product.id}-${acc.accountId}-id`) ? t('portal.ke5c85b17') : t('portal.ka55b1ecb') }}</span>
                  </button>
                  <button
                    type="button"
                    class="copy-btn"
                    :class="{ 'is-copied': isCopied(`detail-${product.id}-${acc.accountId}-pw`) }"
                    @click="copyWithToast(acc.demoAccessCode, t('portal.pwFieldSuffix', { p0: acc.roleTitle }), `detail-${product.id}-${acc.accountId}-pw`)"
                  >
                    <span class="copy-label">PW</span>
                    <code>{{ acc.demoAccessCode }}</code>
                    <span class="copy-act">{{ isCopied(`detail-${product.id}-${acc.accountId}-pw`) ? t('portal.ke5c85b17') : t('portal.ka55b1ecb') }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { getProductVisualGuide } from '@/data/productScreenshots';
import { localeToSlug, normalizePortalLocale, withLocalePath } from '@/locales';
import { usePortalStore } from '@/store/portalStore';
import { buildProductHomepageUrl } from '@/utils/productLinks';

const { t, locale } = useI18n();
const props = defineProps<{ productId: string }>();
const { catalog, ensureCatalogLoaded, findProduct, isCopied, copyWithToast } = usePortalStore();

const activeSlideIdx = ref(0);
const lightboxOpen = ref(false);

function handleKeydown(e: KeyboardEvent): void {
  if (e.key === 'Escape' && lightboxOpen.value) {
    lightboxOpen.value = false;
  }
}

watch(lightboxOpen, (open) => {
  document.documentElement.classList.toggle('portal-menu-open', open);
  document.body.classList.toggle('portal-menu-open', open);
});

onMounted(() => {
  void ensureCatalogLoaded();
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
  document.documentElement.classList.remove('portal-menu-open');
  document.body.classList.remove('portal-menu-open');
});

watch(() => props.productId, () => {
  activeSlideIdx.value = 0;
  lightboxOpen.value = false;
});

const currentLocale = computed(() => normalizePortalLocale(locale.value));
const langSlug = computed(() => localeToSlug(currentLocale.value));
const homePath = computed(() => withLocalePath('/', currentLocale.value));
const product = computed(() => findProduct(props.productId));
const visualGuide = computed(() => getProductVisualGuide(props.productId, currentLocale.value));
const activeSlide = computed(() => visualGuide.value?.screenshots[activeSlideIdx.value] ?? visualGuide.value?.screenshots[0]);
const hasPrimaryConsole = computed(() => {
  return (product.value?.entryLinks ?? []).some((item) => !item.isDownload && item.isPrimary);
});
const primaryEntry = computed(() => {
  const links = product.value?.entryLinks ?? [];
  return links.find((item) => !item.isDownload && item.isPrimary) ?? links.find((item) => !item.isDownload) ?? links[0];
});
const uniqueDownloadAssets = computed(() => {
  const existingUrls = new Set((product.value?.entryLinks ?? []).map((item) => item.cloudUrl));
  return (product.value?.downloadAssets ?? []).filter((dl) => !existingUrls.has(dl.downloadUrl));
});
const standaloneUrl = computed(() => {
  if (!product.value) return catalog.value?.portalMeta.corporateSiteUrl ?? 'https://empasy.io/';
  return buildProductHomepageUrl(
    product.value.id,
    langSlug.value,
    catalog.value?.portalMeta.corporateSiteUrl,
  );
});
</script>
