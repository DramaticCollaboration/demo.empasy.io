<template>
  <div class="portal-page">
    <section class="portal-hero">
      <div class="container">
        <div class="hero-copy">
          <p class="hero-eyebrow">{{ t('portal.k4fdda89f') }}</p>
          <h1 class="hero-title">{{ t('portal.k94d889d1') }}</h1>
          <p class="hero-subtitle">
            {{ t('portal.k6e7a7d1e') }}
          </p>
        </div>

        <div class="cred-table-wrap">
          <table class="cred-table">
            <thead>
              <tr>
                <th>{{ t('portal.k5ab9da94') }}</th>
                <th>{{ t('portal.kc1e83cfe') }}</th>
                <th>{{ t('portal.kcf2c0ea8') }}</th>
                <th>{{ t('portal.k0448a340') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="prod in products" :key="prod.id">
                <td :data-label="t('portal.k5ab9da94')" class="cred-col-prod">
                  <strong>
                    <RouterLink :to="productPath(prod.id)" class="table-prod-link">{{ prod.name }}</RouterLink>
                  </strong>
                  <div class="table-sub">
                    {{ prod.tierBadge }}
                    <template v-if="prod.integrationBadge">
                      <span aria-hidden="true">·</span>
                      <span class="integration-tag">{{ prod.integrationBadge }}</span>
                    </template>
                    <span aria-hidden="true">·</span>
                    <RouterLink :to="productPath(prod.id)" class="table-guide-link">{{ t('portal.kb4e4ba41') }}</RouterLink>
                  </div>
                </td>
                <td :data-label="t('portal.kc1e83cfe')" class="cred-col-entry">
                  <div>{{ primaryConsoleEntry(prod)?.label }}</div>
                  <div v-if="downloadEntry(prod)" class="table-sub">
                    {{ downloadEntry(prod)?.label }} {{ t('portal.kb2ead0fd') }}
                  </div>
                </td>
                <td :data-label="t('portal.kcf2c0ea8')" class="cred-col-account">
                  <div v-if="prod.demoAccounts[0]" class="copy-row">
                    <button
                      type="button"
                      class="copy-btn"
                      :class="{ 'is-copied': isCopied(`guide-${prod.id}-id`) }"
                      @click="copyWithToast(prod.demoAccounts[0].accountId, t('portal.idFieldSuffix', { p0: prod.name }), `guide-${prod.id}-id`)"
                    >
                      <span class="copy-label">ID</span>
                      <code>{{ prod.demoAccounts[0].accountId }}</code>
                      <span class="copy-act">{{ isCopied(`guide-${prod.id}-id`) ? t('portal.ke5c85b17') : t('portal.ka55b1ecb') }}</span>
                    </button>
                    <button
                      type="button"
                      class="copy-btn"
                      :class="{ 'is-copied': isCopied(`guide-${prod.id}-pw`) }"
                      @click="copyWithToast(prod.demoAccounts[0].demoAccessCode, t('portal.pwFieldSuffix', { p0: prod.name }), `guide-${prod.id}-pw`)"
                    >
                      <span class="copy-label">PW</span>
                      <code>{{ prod.demoAccounts[0].demoAccessCode }}</code>
                      <span class="copy-act">{{ isCopied(`guide-${prod.id}-pw`) ? t('portal.ke5c85b17') : t('portal.ka55b1ecb') }}</span>
                    </button>
                  </div>
                </td>
                <td :data-label="t('portal.k0448a340')" class="cred-col-actions">
                  <div class="table-action-row">
                    <a
                      v-if="primaryConsoleEntry(prod)"
                      :href="primaryConsoleEntry(prod)?.cloudUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="btn btn-primary btn-sm"
                    >
                      {{ downloadEntry(prod) ? t('portal.k766cd649') : t('portal.ke5637183') }} &#8599;
                    </a>
                    <a
                      v-if="downloadEntry(prod)"
                      :href="downloadEntry(prod)?.cloudUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="btn btn-outline btn-sm"
                    >
                      {{ t('portal.k5935ad57') }}
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p v-if="catalog?.portalMeta.resetScheduleNotice" class="reset-note" style="margin-top: 20px">
          {{ catalog.portalMeta.resetScheduleNotice }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { normalizePortalLocale, withLocalePath } from '@/locales';
import { usePortalStore } from '@/store/portalStore';
import { getDownloadEntry, getPrimaryConsoleEntry } from '@/utils/productLinks';

const { t, locale } = useI18n();
const { catalog, products, ensureCatalogLoaded, isCopied, copyWithToast } = usePortalStore();
const currentLocale = computed(() => normalizePortalLocale(locale.value));

function productPath(productId: string): string {
  return withLocalePath(`/products/${productId}`, currentLocale.value);
}

const primaryConsoleEntry = getPrimaryConsoleEntry;
const downloadEntry = getDownloadEntry;

onMounted(() => {
  void ensureCatalogLoaded();
});
</script>
