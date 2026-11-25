<template>
  <section class="page-header" style="min-height: 70vh; display: flex; align-items: center">
    <div class="container">
      <span class="badge">404</span>
      <h1 class="page-title">{{ t('portal.k6cbd6d3c') }}</h1>
      <p class="page-subtitle">
        {{ t('portal.k23d5a312') }} {{ route.fullPath }} {{ t('portal.kcf50f7af') }}
      </p>
      <div class="hero-actions">
        <RouterLink :to="homePath" class="btn btn-primary btn-lg">{{ t('portal.keb4a7ee4') }}</RouterLink>
        <RouterLink :to="guidePath" class="btn btn-outline btn-lg">{{ t('portal.kc52b7097') }}</RouterLink>
      </div>
      <div class="tag-row" style="margin-top: 2.5rem">
        <RouterLink
          v-for="item in products"
          :key="item.id"
          :to="withLocalePath(`/products/${item.id}`, currentLocale)"
          class="tech-tag"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { normalizePortalLocale, withLocalePath } from '@/locales';
import { usePortalStore } from '@/store/portalStore';

const { t, locale } = useI18n();
const route = useRoute();
const { products } = usePortalStore();
const currentLocale = computed(() => normalizePortalLocale(locale.value));
const homePath = computed(() => withLocalePath('/', currentLocale.value));
const guidePath = computed(() => withLocalePath('/guide', currentLocale.value));

onMounted(() => {
  document.title = t('portal.k11f3b65c');
});
</script>
