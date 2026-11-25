<template>
  <section id="architecture" class="section section-tinted">
    <div class="container">
      <div class="section-head arch-section-head">
        <div>
          <p class="section-kicker">{{ t('portal.archKicker') }}</p>
          <h2 class="section-title">{{ t('portal.archTitle') }}</h2>
          <p class="section-desc">{{ t('portal.archDesc') }}</p>
        </div>
        <span class="arch-standalone-pill">{{ t('portal.archStandaloneHint') }}</span>
      </div>

      <div v-if="scenarios.length > 0" class="arch-scenario-bar" role="toolbar" :aria-label="t('portal.archScenarioFilterLabel')">
        <span class="arch-scenario-label">{{ t('portal.archScenarioFilterLabel') }}</span>
        <div class="arch-scenario-chips">
          <button
            type="button"
            class="arch-scenario-chip"
            :class="{ active: activeScenarioIdx === null }"
            @click="clearScenarioFilter"
          >
            {{ t('portal.archScenarioAll') }}
          </button>
          <button
            v-for="(sc, idx) in scenarios"
            :key="sc.id"
            type="button"
            class="arch-scenario-chip"
            :class="{ active: activeScenarioIdx === idx }"
            @click="selectScenarioFilter(idx)"
          >
            <span class="arch-chip-no">0{{ idx + 1 }}</span>
            <span>{{ sc.title }}</span>
          </button>
        </div>
      </div>

      <div class="arch-board">
        <div class="arch-board-head">
          <div class="arch-board-brand">
            <span class="arch-brand-dot" aria-hidden="true" />
            <span class="arch-board-title">{{ t('portal.archHeaderLabel') }}</span>
          </div>
          <div class="arch-board-meta">
            <span class="arch-hint-text">{{ t('portal.archSelectHint') }}</span>
            <span class="arch-protocol-pill">{{ t('portal.archProtocolBadge') }}</span>
          </div>
        </div>

        <div class="arch-diagram-body">
          <!-- Layer 1: Flagship Solutions -->
          <div class="arch-layer">
            <div class="arch-layer-label">
              {{ t('portal.archFlagshipHeading', { p0: flagshipNodes.length }) }}
            </div>
            <div class="arch-flagship-grid">
              <div
                v-for="node in flagshipNodes"
                :key="node.id"
                class="arch-node-wrap"
              >
                <div
                  role="button"
                  tabindex="0"
                  class="arch-node arch-node-flagship"
                  :class="nodeStateClasses(node)"
                  :aria-pressed="selectedProductId === node.productId"
                  @click="selectNode(node.productId)"
                  @keydown.enter.prevent="selectNode(node.productId)"
                  @keydown.space.prevent="selectNode(node.productId)"
                >
                  <div class="arch-node-top">
                    <span class="arch-node-name">{{ node.label }}</span>
                    <a
                      v-if="primaryUrlOf(node.productId)"
                      :href="primaryUrlOf(node.productId)"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="arch-node-launch"
                      :title="t('portal.archDirectOpenAria', { p0: node.label })"
                      :aria-label="t('portal.archDirectOpenAria', { p0: node.label })"
                      @click.stop
                    >
                      &#8599;
                    </a>
                  </div>
                  <p class="arch-node-role">{{ node.roleSummary }}</p>
                  <span v-if="node.shortTag" class="arch-node-tag" :class="{ 'is-hub-tag': node.isHub }">
                    {{ node.shortTag }}
                  </span>
                </div>
                <span class="arch-stem arch-stem-down" :class="{ 'is-lit': isNodeLit(node.productId) }" aria-hidden="true" />
              </div>
            </div>
          </div>

          <!-- Central Standard Bus -->
          <div class="arch-bus" :class="{ 'is-lit': Boolean(selectedProductId) }">
            <span>{{ t('portal.archBusLabel') }}</span>
          </div>

          <!-- Layer 2: Extension Modules -->
          <div class="arch-layer arch-layer-ext">
            <div class="arch-layer-label">
              {{ t('portal.archExtHeading', { p0: totalExtensionCount }) }}
            </div>
            <div class="arch-ext-groups">
              <div
                v-for="group in extensionGroups"
                :key="group.key"
                class="arch-ext-group-wrap"
              >
                <div class="arch-ext-group" :class="{ 'has-active': isGroupLit(group.nodes) }">
                  <div class="arch-ext-group-title">{{ group.title }}</div>
                  <div class="arch-ext-grid" :class="`cols-${group.nodes.length}`">
                    <div
                      v-for="node in group.nodes"
                      :key="node.id"
                      role="button"
                      tabindex="0"
                      class="arch-node arch-node-ext"
                      :class="nodeStateClasses(node)"
                      :aria-pressed="selectedProductId === node.productId"
                      @click="selectNode(node.productId)"
                      @keydown.enter.prevent="selectNode(node.productId)"
                      @keydown.space.prevent="selectNode(node.productId)"
                    >
                      <div class="arch-node-top">
                        <span class="arch-node-name">{{ node.label }}</span>
                        <a
                          v-if="primaryUrlOf(node.productId)"
                          :href="primaryUrlOf(node.productId)"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="arch-node-launch"
                          :title="t('portal.archDirectOpenAria', { p0: node.label })"
                          :aria-label="t('portal.archDirectOpenAria', { p0: node.label })"
                          @click.stop
                        >
                          &#8599;
                        </a>
                      </div>
                      <span v-if="node.shortTag" class="arch-node-ext-tag">{{ node.shortTag }}</span>
                      <span v-if="integrationBadgeOf(node.productId)" class="arch-node-integrated-dot">
                        {{ integrationBadgeOf(node.productId) }}
                      </span>
                    </div>
                  </div>
                </div>
                <span
                  class="arch-stem arch-stem-down"
                  :class="{ 'is-lit': isGroupLit(group.nodes) }"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <!-- Layer 3: Common Foundation -->
          <button
            type="button"
            class="arch-foundation"
            :class="{ 'is-selected': foundationNode && selectedProductId === foundationNode.productId }"
            @click="foundationNode && selectNode(foundationNode.productId)"
          >
            <div class="arch-foundation-accent" aria-hidden="true" />
            <div class="arch-foundation-copy">
              <strong class="arch-foundation-title">{{ t('portal.archFoundationTitle') }}</strong>
              <span class="arch-foundation-sub">{{ t('portal.archFoundationSub') }}</span>
            </div>
            <div class="arch-foundation-badges" aria-hidden="true">
              <span class="arch-foundation-pill">sync-core</span>
              <span class="arch-foundation-pill">sync-module-*</span>
            </div>
          </button>
        </div>

        <!-- Attached Quick-Launcher Inspector -->
        <div v-if="selectedProduct" class="arch-inspector" aria-live="polite">
          <RouterLink
            v-if="selectedPreviewUrl"
            :to="productPath(selectedProduct.id)"
            class="arch-inspector-thumb"
            :title="t('portal.kcc66fdf6', { p0: selectedProduct.name })"
          >
            <img :src="selectedPreviewUrl" :alt="t('portal.kdfd18bcd', { p0: selectedProduct.name })" loading="lazy" />
          </RouterLink>

          <div class="arch-inspector-info">
            <div class="arch-inspector-meta">
              <span class="arch-inspector-tier">{{ selectedProduct.tierBadge }}</span>
              <span v-if="selectedNode?.protocolLabel" class="arch-inspector-proto">{{ selectedNode.protocolLabel }}</span>
              <span v-if="selectedProduct.integrationBadge" class="integration-tag">
                {{ selectedProduct.integrationBadge }}
              </span>
            </div>

            <div class="arch-inspector-title-row">
              <h3>
                <RouterLink :to="productPath(selectedProduct.id)">{{ selectedProduct.name }}</RouterLink>
              </h3>
              <a
                :href="selectedHomepageUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="demo-card-home-link"
              >
                {{ t('portal.k21eaf823') }}
              </a>
            </div>

            <p class="arch-inspector-desc">{{ selectedProduct.subtitle }}</p>

            <div class="arch-inspector-relations">
              <span class="arch-rel-label">{{ t('portal.archConnectedLabel') }}</span>
              <span v-if="selectedNode?.isHub" class="arch-hub-note">{{ t('portal.archHubConnectedNote') }}</span>
              <div v-else class="arch-rel-chips">
                <button
                  v-for="rel in connectedProducts"
                  :key="rel.id"
                  type="button"
                  class="arch-rel-chip"
                  @click="selectNode(rel.id)"
                >
                  {{ rel.name }}
                </button>
              </div>
            </div>

            <div v-if="activeScenario" class="arch-active-scenario-strip">
              <span class="arch-active-scenario-text">{{ activeScenario.workflowFlowLabel || activeScenario.title }}</span>
              <button
                type="button"
                class="arch-scenario-jump-btn"
                @click="emit('select-scenario', activeScenarioIdx!)"
              >
                {{ t('portal.archScenarioJump') }}
              </button>
            </div>
          </div>

          <div class="arch-inspector-actions">
            <a
              v-for="(entry, idx) in orderedEntryLinks"
              :key="entry.id"
              :href="entry.cloudUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-sm"
              :class="idx === 0 && !entry.isDownload ? 'btn-primary' : 'btn-outline'"
            >
              <span>{{ entry.buttonLabel || entry.label }}</span>
              <span aria-hidden="true">&#8599;</span>
            </a>
            <RouterLink :to="productPath(selectedProduct.id)" class="btn btn-ghost btn-sm arch-detail-link">
              {{ t('portal.kb4e4ba41') }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { getProductVisualGuide } from '@/data/productScreenshots';
import { localeToSlug, normalizePortalLocale, withLocalePath } from '@/locales';
import { usePortalStore } from '@/store/portalStore';
import type { ProductCatalogItem, ProductEntryLink, TopologyNodeItem } from '@/types/portal.types';
import { buildProductHomepageUrl, getPrimaryConsoleEntry } from '@/utils/productLinks';

const emit = defineEmits<{
  (event: 'select-scenario', scenarioIndex: number): void;
}>();

const { t, locale } = useI18n();
const { catalog, products, findProduct } = usePortalStore();

const currentLocale = computed(() => normalizePortalLocale(locale.value));
const langSlug = computed(() => localeToSlug(currentLocale.value));

const topologyNodes = computed<TopologyNodeItem[]>(() => catalog.value?.topologyNodes ?? []);
const scenarios = computed(() => catalog.value?.scenarios ?? []);

const flagshipNodes = computed(() =>
  topologyNodes.value.filter((node) => node.architectureZone === 'flagship'),
);

const dataAiNodes = computed(() =>
  topologyNodes.value.filter((node) => node.architectureZone === 'data-ai'),
);

const securityNodes = computed(() =>
  topologyNodes.value.filter((node) => node.architectureZone === 'security'),
);

const operationsNodes = computed(() =>
  topologyNodes.value.filter((node) => node.architectureZone === 'operations'),
);

const extensionGroups = computed(() => [
  {
    key: 'data-ai',
    title: t('portal.archGroupDataAi', { p0: dataAiNodes.value.length }),
    nodes: dataAiNodes.value,
  },
  {
    key: 'security',
    title: t('portal.archGroupSecurity', { p0: securityNodes.value.length }),
    nodes: securityNodes.value,
  },
  {
    key: 'operations',
    title: t('portal.archGroupOperations', { p0: operationsNodes.value.length }),
    nodes: operationsNodes.value,
  },
]);

const totalExtensionCount = computed(
  () => dataAiNodes.value.length + securityNodes.value.length + operationsNodes.value.length,
);

const hubNode = computed(() => topologyNodes.value.find((node) => node.isHub) ?? flagshipNodes.value[0]);
const foundationNode = computed(() => topologyNodes.value.find((node) => node.isFoundation));

const selectedProductId = ref<string>('');
const activeScenarioIdx = ref<number | null>(null);

watch(
  hubNode,
  (node) => {
    if (!selectedProductId.value && node) {
      selectedProductId.value = node.productId;
    }
  },
  { immediate: true },
);

const selectedNode = computed(() =>
  topologyNodes.value.find((node) => node.productId === selectedProductId.value) ?? hubNode.value,
);

const selectedProduct = computed<ProductCatalogItem | undefined>(() =>
  selectedNode.value ? findProduct(selectedNode.value.productId) : products.value[0],
);

const activeScenario = computed(() =>
  activeScenarioIdx.value !== null ? scenarios.value[activeScenarioIdx.value] ?? null : null,
);

const activeScenarioProductSet = computed<Set<string>>(() => {
  if (!activeScenario.value) return new Set();
  return new Set(activeScenario.value.steps.map((step) => step.productId));
});

const relatedProductSet = computed<Set<string>>(() => {
  if (!selectedNode.value || selectedNode.value.isHub) {
    return new Set();
  }
  return new Set(selectedNode.value.connectedTo);
});

const connectedProducts = computed<ProductCatalogItem[]>(() => {
  if (!selectedNode.value) return [];
  return selectedNode.value.connectedTo
    .map((pid) => findProduct(pid))
    .filter((item): item is ProductCatalogItem => Boolean(item));
});

const selectedVisualGuide = computed(() =>
  selectedProduct.value ? getProductVisualGuide(selectedProduct.value.id, currentLocale.value) : undefined,
);

const selectedPreviewUrl = computed(() => selectedVisualGuide.value?.screenshots[0]?.rawUrl ?? '');

const selectedHomepageUrl = computed(() => {
  if (!selectedProduct.value) return '';
  return buildProductHomepageUrl(
    selectedProduct.value.id,
    langSlug.value,
    catalog.value?.portalMeta.corporateSiteUrl,
  );
});

const orderedEntryLinks = computed<ProductEntryLink[]>(() => {
  const prod = selectedProduct.value;
  if (!prod) return [];
  const primary = getPrimaryConsoleEntry(prod);
  const rest = prod.entryLinks.filter((link) => link.id !== primary?.id && !link.cloudUrl.endsWith('.pdf'));
  return primary ? [primary, ...rest] : rest;
});

function productPath(productId: string): string {
  return withLocalePath(`/products/${productId}`, currentLocale.value);
}

function primaryUrlOf(productId: string): string {
  const prod = findProduct(productId);
  return prod ? getPrimaryConsoleEntry(prod)?.cloudUrl ?? '' : '';
}

function integrationBadgeOf(productId: string): string {
  return findProduct(productId)?.integrationBadge ?? '';
}

function selectNode(productId: string): void {
  selectedProductId.value = productId;
}

function selectScenarioFilter(idx: number): void {
  activeScenarioIdx.value = idx;
  const firstStepProduct = scenarios.value[idx]?.steps[0]?.productId;
  if (firstStepProduct) {
    selectedProductId.value = firstStepProduct;
  }
}

function clearScenarioFilter(): void {
  activeScenarioIdx.value = null;
}

function isNodeLit(productId: string): boolean {
  if (activeScenarioIdx.value !== null) {
    return activeScenarioProductSet.value.has(productId);
  }
  if (selectedProductId.value === productId) return true;
  if (selectedNode.value?.isHub) return true;
  return relatedProductSet.value.has(productId);
}

function isGroupLit(nodes: TopologyNodeItem[]): boolean {
  return nodes.some((node) => isNodeLit(node.productId));
}

function nodeStateClasses(node: TopologyNodeItem): Record<string, boolean> {
  const isSelected = selectedProductId.value === node.productId;
  const hasScenario = activeScenarioIdx.value !== null;
  const inScenario = hasScenario && activeScenarioProductSet.value.has(node.productId);
  const isRelated = !hasScenario && !isSelected && relatedProductSet.value.has(node.productId);
  const isDimmed = hasScenario && !inScenario;

  return {
    'is-hub': Boolean(node.isHub),
    'is-selected': isSelected,
    'is-related': isRelated || (inScenario && !isSelected),
    'is-dimmed': isDimmed,
  };
}
</script>
