<template>
  <footer class="portal-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a :href="corporateHomeUrl" :aria-label="t('portal.k533f88fc')">
            <img src="/images/logo.svg" alt="Empasy" class="footer-logo" />
          </a>
          <p class="footer-desc">
            {{ t('portal.kaa32c2f7') }}
          </p>
        </div>

        <div class="footer-col">
          <h4>{{ t('portal.kb4e4ba41') }}</h4>
          <ul>
            <li><RouterLink :to="homePath">{{ t('portal.k8a19d632') }}</RouterLink></li>
            <li><RouterLink :to="{ path: homePath, hash: '#scenarios' }">{{ t('portal.k04e095a8') }}</RouterLink></li>
            <li><RouterLink :to="guidePath">{{ t('portal.k4fdda89f') }}</RouterLink></li>
            <li><a :href="etaDownloadUrl" target="_blank" rel="noopener noreferrer">{{ t('portal.kf9bda77b') }}</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>{{ t('portal.ke76fe454') }}</h4>
          <ul>
            <li><a :href="corporateHomeUrl" target="_blank" rel="noopener noreferrer">{{ t('portal.kd079149a') }}</a></li>
            <li><a :href="contactUrl" target="_blank" rel="noopener noreferrer">{{ t('portal.k4e9c5ff2') }}</a></li>
            <li><a :href="techDocsUrl" target="_blank" rel="noopener noreferrer">{{ t('portal.kcbbc4fed') }}</a></li>
            <li><a :href="termsUrl" target="_blank" rel="noopener noreferrer">{{ t('portal.k3b9e30dd') }}</a></li>
            <li><a :href="privacyUrl" target="_blank" rel="noopener noreferrer">{{ t('portal.k532136c0') }}</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <address class="footer-company">
          <span class="company-seg"><strong>{{ t('portal.k317d5490') }}</strong></span>
          <span class="company-seg">{{ t('portal.k712e88d1') }}</span>
          <span class="company-seg">{{ t('portal.kfe76f720') }}</span>
          <span class="company-seg is-wrap">{{ t('portal.kde5a39d7') }}</span>
          <span class="company-seg is-wrap">{{ t('portal.kdbc35235') }}</span>
          <span class="company-seg">{{ t('portal.k0fc1eee5') }} <a href="mailto:poh@empasy.com">poh@empasy.com</a></span>
          <span class="company-seg">{{ t('portal.k6a894328') }} <a :href="t('portal.phoneHref')">{{ t('portal.phoneDisplay') }}</a></span>
        </address>
        <p class="footer-copy">&copy; 2026 Empasy Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { usePortalStore } from '@/store/portalStore';
import { localeToSlug, normalizePortalLocale, withLocalePath } from '@/locales';

const { t, locale } = useI18n();
const { catalog } = usePortalStore();

const currentLocale = computed(() => normalizePortalLocale(locale.value));
const langSlug = computed(() => localeToSlug(currentLocale.value));
const corporateSiteUrl = computed(() => catalog.value?.portalMeta.corporateSiteUrl ?? 'https://empasy.io');
const corporateHomeUrl = computed(() =>
  langSlug.value === 'ko' ? `${corporateSiteUrl.value}/` : `${corporateSiteUrl.value}/${langSlug.value}/pages/index.html`,
);
const techDocsUrl = computed(() => {
  if (catalog.value?.portalMeta.techDocsUrl) return catalog.value.portalMeta.techDocsUrl;
  return langSlug.value === 'ko' ? 'https://doc.empasy.com/' : `https://doc.empasy.com/${langSlug.value}/`;
});
const contactUrl = computed(() => `${corporateSiteUrl.value}/${langSlug.value}/pages/contact.html`);
const etaDownloadUrl = computed(() => `${corporateSiteUrl.value}/${langSlug.value}/download_eta.html`);
const termsUrl = computed(() => `${corporateSiteUrl.value}/${langSlug.value}/pages/terms.html`);
const privacyUrl = computed(() => `${corporateSiteUrl.value}/${langSlug.value}/pages/privacy.html`);
const homePath = computed(() => withLocalePath('/', currentLocale.value));
const guidePath = computed(() => withLocalePath('/guide', currentLocale.value));
</script>
