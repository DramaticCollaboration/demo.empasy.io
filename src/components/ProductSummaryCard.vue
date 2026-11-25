<template>
  <article class="demo-card">
    <RouterLink
      v-if="previewScreenUrl"
      :to="productDetailPath"
      class="demo-card-thumb"
      :title="t('portal.kcc66fdf6', { p0: product.name })"
    >
      <img :src="previewScreenUrl" :alt="t('portal.kdfd18bcd', { p0: product.name })" loading="lazy" />
    </RouterLink>

    <div class="demo-card-body">
      <div class="demo-card-meta">
        <span class="demo-card-role">{{ visualGuide?.roleEasyLabel ?? product.tierBadge }}</span>
        <span v-if="product.category === 'flagship'" class="flagship-tag">{{ t('portal.k4038619b') }}</span>
        <span v-else-if="product.integrationBadge" class="integration-tag">{{ product.integrationBadge }}</span>
        <span v-else-if="categoryGroupLabel" class="category-pill-tag">{{ categoryGroupLabel }}</span>
      </div>
      <div class="demo-card-head">
        <h3 class="demo-card-title">
          <RouterLink :to="productDetailPath">{{ product.name }}</RouterLink>
        </h3>
        <a
          :href="homepageUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="demo-card-home-link"
        >
          {{ t('portal.k21eaf823') }}
        </a>
      </div>
      <p class="demo-card-desc">{{ product.subtitle }}</p>
    </div>

    <div class="demo-card-actions">
      <RouterLink
        :to="productDetailPath"
        class="btn btn-outline btn-sm"
      >
        {{ t('portal.kb4e4ba41') }}
      </RouterLink>
      <a
        v-if="primaryActionUrl"
        :href="primaryActionUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-primary btn-sm"
      >
        {{ primaryActionLabel }}
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { getProductVisualGuide } from '@/data/productScreenshots';
import { localeToSlug, normalizePortalLocale, withLocalePath } from '@/locales';
import { usePortalStore } from '@/store/portalStore';
import type { ProductCatalogItem } from '@/types/portal.types';
import { buildProductHomepageUrl, getPrimaryConsoleEntry } from '@/utils/productLinks';

const { t, locale } = useI18n();
const { catalog } = usePortalStore();

const props = defineProps<{
  product: ProductCatalogItem;
}>();

const currentLocale = computed(() => normalizePortalLocale(locale.value));
const langSlug = computed(() => localeToSlug(currentLocale.value));
const visualGuide = computed(() => getProductVisualGuide(props.product.id, currentLocale.value));
const previewScreenUrl = computed(() => visualGuide.value?.screenshots[0]?.rawUrl);
const productDetailPath = computed(() => withLocalePath(`/products/${props.product.id}`, currentLocale.value));
const categoryGroupLabel = computed(
  () => catalog.value?.productGroups.find((grp) => grp.key === props.product.category)?.navLabel ?? '',
);

const homepageUrl = computed(() =>
  buildProductHomepageUrl(props.product.id, langSlug.value, catalog.value?.portalMeta.corporateSiteUrl),
);

const primaryLink = computed(() => getPrimaryConsoleEntry(props.product));
const primaryActionUrl = computed(() => primaryLink.value?.cloudUrl ?? '');
const primaryActionLabel = computed(() => primaryLink.value?.buttonLabel || t('portal.keb069a6c'));
</script>
