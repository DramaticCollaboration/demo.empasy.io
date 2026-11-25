<template>
  <div class="portal-page">
    <section class="portal-hero">
      <div class="container">
        <div class="hero-copy">
          <p class="hero-eyebrow">{{ t('portal.k3cc4bce0') }}</p>
          <h1 class="hero-title">{{ t('portal.k19a1c185') }}</h1>
          <p class="hero-subtitle">
            {{ t('portal.kf3c88cda') }}
          </p>
          <div class="hero-actions">
            <a href="#architecture" class="btn btn-primary btn-lg">{{ t('portal.heroArchCta') }}</a>
            <RouterLink :to="guidePath" class="btn btn-outline btn-lg">{{ t('portal.k64a6aff0') }}</RouterLink>
          </div>
        </div>

        <div class="quick-cred-banner">
          <div class="quick-cred-banner-info">
            <span class="quick-cred-title">{{ t('portal.unifiedCredTitle') }}</span>
            <p class="quick-cred-sub">{{ t('portal.unifiedCredSub') }}</p>
          </div>
          <div class="copy-row quick-cred-banner-actions">
            <button
              type="button"
              class="copy-btn"
              :class="{ 'is-copied': isCopied('home-common-id') }"
              @click="copyWithToast('admin', t('portal.defaultIdLabel'), 'home-common-id')"
            >
              <span class="copy-label">ID</span>
              <code>admin</code>
              <span class="copy-act">{{ isCopied('home-common-id') ? t('portal.ke5c85b17') : t('portal.ka55b1ecb') }}</span>
            </button>
            <button
              type="button"
              class="copy-btn"
              :class="{ 'is-copied': isCopied('home-common-pw') }"
              @click="copyWithToast('123456', t('portal.defaultPwLabel'), 'home-common-pw')"
            >
              <span class="copy-label">PW</span>
              <code>123456</code>
              <span class="copy-act">{{ isCopied('home-common-pw') ? t('portal.ke5c85b17') : t('portal.ka55b1ecb') }}</span>
            </button>
          </div>
        </div>

        <p v-if="resetScheduleNotice" class="reset-note">{{ resetScheduleNotice }}</p>
      </div>
    </section>

    <section v-if="loadError" class="section">
      <div class="container">
        <div class="error-banner">{{ t('portal.k04d854d2') }} {{ loadError }}</div>
      </div>
    </section>

    <ArchitectureMapSection @select-scenario="handleSelectScenario" />

    <section id="flagship" class="section">
      <div class="container">
        <div class="section-head">
          <p class="section-kicker">{{ t('portal.k8f79bbbe') }}</p>
          <h2 class="section-title">{{ t('portal.k9017e000') }}</h2>
          <p class="section-desc">
            {{ t('portal.k4f4e9cd1') }}
          </p>
        </div>

        <div class="demo-grid-2">
          <ProductSummaryCard
            v-for="prod in productsOfGroup('flagship')"
            :key="prod.id"
            :product="prod"
          />
        </div>
      </div>
    </section>

    <section id="modules" class="section section-tinted">
      <div class="container">
        <div class="section-head">
          <p class="section-kicker">{{ t('portal.k49628906') }}</p>
          <h2 class="section-title">{{ t('portal.k86656f3c') }}</h2>
          <p class="section-desc">
            {{ t('portal.k8793bc9a') }}
          </p>
        </div>

        <div class="filter-tabs" role="tablist" :aria-label="t('portal.k1a5cbed3')">
          <button
            v-for="tab in extensionTabs"
            :key="tab.key"
            type="button"
            role="tab"
            class="filter-tab"
            :class="{ active: activeExtTab === tab.key }"
            :aria-selected="activeExtTab === tab.key"
            @click="activeExtTab = tab.key"
          >
            {{ tab.label }} ({{ tab.count }})
          </button>
        </div>

        <div class="demo-grid-3">
          <ProductSummaryCard
            v-for="prod in visibleExtensionProducts"
            :key="prod.id"
            :product="prod"
          />
        </div>
      </div>
    </section>

    <section id="scenarios" v-if="scenarios.length > 0" class="section">
      <div class="container">
        <div class="section-head">
          <p class="section-kicker">{{ t('portal.k04e095a8') }}</p>
          <h2 class="section-title">{{ t('portal.kb05b9409') }}</h2>
          <p class="section-desc">{{ t('portal.k54b79217') }}</p>
        </div>

        <div class="scenario-tabs" role="tablist" :aria-label="t('portal.scenarioTablistLabel')">
          <button
            v-for="(sc, idx) in scenarios"
            :id="`scenario-tab-${sc.id}`"
            :key="sc.id"
            type="button"
            role="tab"
            class="scenario-tab-btn"
            :class="{ active: activeScenarioIdx === idx }"
            :aria-selected="activeScenarioIdx === idx"
            :aria-controls="`scenario-panel-${sc.id}`"
            @click="activeScenarioIdx = idx"
          >
            <span class="scenario-tab-meta">
              <span class="scenario-tab-no">0{{ idx + 1 }}</span>
              <span class="scenario-tab-steps">{{ t('portal.scenarioStepCount', { p0: sc.steps.length }) }}</span>
            </span>
            <span class="scenario-tab-title">{{ sc.title }}</span>
          </button>
        </div>

        <div
          v-if="currentScenario"
          :id="`scenario-panel-${currentScenario.id}`"
          role="tabpanel"
          :aria-labelledby="`scenario-tab-${currentScenario.id}`"
          class="scenario-panel"
        >
          <div class="scenario-top">
            <div class="scenario-top-meta">
              <span class="demo-card-role">{{ currentScenario.categoryBadge }}</span>
              <div class="scenario-meta-chips">
                <span v-if="currentScenario.targetPersona" class="scenario-meta-chip">{{ currentScenario.targetPersona }}</span>
                <span v-if="currentScenario.estimatedMinutes" class="scenario-meta-chip">
                  {{ t('portal.scenarioEtaMinutes', { p0: currentScenario.estimatedMinutes }) }}
                </span>
              </div>
            </div>
            <h3>{{ currentScenario.title }}</h3>
            <p class="scenario-summary">{{ currentScenario.summary }}</p>
            <p class="scenario-flow">{{ currentScenario.workflowFlowLabel }}</p>
          </div>

          <div
            class="scenario-steps"
            :class="[
              currentScenario.steps.length === 2 ? 'is-two-col' : 'is-three-col',
              { 'has-secondary-link': currentScenarioHasSecondaryLink },
            ]"
          >
            <div v-for="step in currentScenario.steps" :key="`${currentScenario.id}-${step.stepOrder}`" class="scenario-step-card">
              <div class="step-meta">
                <div class="step-meta-main">
                  <span class="step-no">STEP 0{{ step.stepOrder }}</span>
                  <span class="step-prod">{{ step.productName }}</span>
                  <span v-if="step.integrationBadge" class="integration-tag">{{ step.integrationBadge }}</span>
                </div>
                <RouterLink :to="productPath(step.productId)" class="step-guide-link">
                  {{ t('portal.kb4e4ba41') }}
                </RouterLink>
              </div>
              <h4>{{ step.actionTitle }}</h4>
              <p class="step-detail">{{ step.actionDetail }}</p>
              <div v-if="step.menuPath || step.tryPoint" class="step-guide-box">
                <div v-if="step.menuPath" class="step-guide-row">
                  <span class="step-guide-label">{{ t('portal.scenarioMenuLabel') }}</span>
                  <span class="step-guide-val">{{ step.menuPath }}</span>
                </div>
                <div v-if="step.tryPoint" class="step-guide-row">
                  <span class="step-guide-label">{{ t('portal.scenarioTryLabel') }}</span>
                  <span class="step-guide-val">{{ step.tryPoint }}</span>
                </div>
              </div>
              <div v-if="step.recommendedAccount" class="step-cred">
                <span class="step-cred-info">
                  {{ t('portal.k77a195b1') }}
                  <code>{{ step.recommendedAccount.accountId }}</code> / <code>{{ step.recommendedAccount.accessCode }}</code>
                </span>
                <div class="step-cred-actions">
                  <button
                    type="button"
                    class="mini-copy"
                    :class="{ 'is-copied': isCopied(`sc-${currentScenario.id}-${step.stepOrder}-id`) }"
                    @click="copyWithToast(step.recommendedAccount.accountId || '', t('portal.idFieldSuffix', { p0: step.productName }), `sc-${currentScenario.id}-${step.stepOrder}-id`)"
                  >
                    {{ isCopied(`sc-${currentScenario.id}-${step.stepOrder}-id`) ? t('portal.ke5c85b17') : t('portal.kc7711745') }}
                  </button>
                  <button
                    type="button"
                    class="mini-copy"
                    :class="{ 'is-copied': isCopied(`sc-${currentScenario.id}-${step.stepOrder}-pw`) }"
                    @click="copyWithToast(step.recommendedAccount.accessCode || '', t('portal.pwFieldSuffix', { p0: step.productName }), `sc-${currentScenario.id}-${step.stepOrder}-pw`)"
                  >
                    {{ isCopied(`sc-${currentScenario.id}-${step.stepOrder}-pw`) ? t('portal.ke5c85b17') : t('portal.k14843212') }}
                  </button>
                </div>
              </div>
              <div class="step-actions">
                <a
                  v-if="step.demoUrl"
                  :href="step.demoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary btn-sm"
                >
                  {{ step.productName }} {{ t('portal.k87fc9c23') }}
                </a>
                <a
                  v-if="step.secondaryLink"
                  :href="step.secondaryLink.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-outline btn-sm"
                >
                  {{ step.secondaryLink.label }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import ArchitectureMapSection from '@/components/ArchitectureMapSection.vue';
import ProductSummaryCard from '@/components/ProductSummaryCard.vue';
import { normalizePortalLocale, withLocalePath } from '@/locales';
import { usePortalStore } from '@/store/portalStore';

const { t, locale } = useI18n();

const {
  catalog,
  loadError,
  ensureCatalogLoaded,
  products,
  productsOfGroup,
  isCopied,
  copyWithToast,
} = usePortalStore();

onMounted(() => {
  void ensureCatalogLoaded();
});

const currentLocale = computed(() => normalizePortalLocale(locale.value));
const guidePath = computed(() => withLocalePath('/guide', currentLocale.value));

function productPath(productId: string): string {
  return withLocalePath(`/products/${productId}`, currentLocale.value);
}

const allExtensionProducts = computed(() =>
  products.value.filter((prod) => prod.category !== 'flagship'),
);

type ExtensionTabKey = 'all' | 'data-ai' | 'security' | 'operations';

const extensionTabs = computed<Array<{ key: ExtensionTabKey; label: string; count: number }>>(() => [
  { key: 'all', label: t('portal.extTabAll'), count: allExtensionProducts.value.length },
  { key: 'data-ai', label: t('portal.k80a0b4f9'), count: productsOfGroup('data-ai').length },
  { key: 'security', label: t('portal.k4435f459'), count: productsOfGroup('security').length },
  { key: 'operations', label: t('portal.kde210b9b'), count: productsOfGroup('operations').length },
]);

const activeExtTab = ref<ExtensionTabKey>('all');
const activeScenarioIdx = ref(0);

const visibleExtensionProducts = computed(() =>
  activeExtTab.value === 'all' ? allExtensionProducts.value : productsOfGroup(activeExtTab.value),
);

function handleSelectScenario(idx: number): void {
  activeScenarioIdx.value = idx;
  const target = document.getElementById('scenarios');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

const resetScheduleNotice = computed(() => catalog.value?.portalMeta.resetScheduleNotice ?? '');
const scenarios = computed(() => catalog.value?.scenarios ?? []);
const currentScenario = computed(() => scenarios.value[activeScenarioIdx.value] ?? scenarios.value[0]);
const currentScenarioHasSecondaryLink = computed(() =>
  (currentScenario.value?.steps ?? []).some((step) => Boolean(step.secondaryLink)),
);
</script>
