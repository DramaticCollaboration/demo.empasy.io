import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProductDetailView from '@/views/ProductDetailView.vue';
import DemoGuideView from '@/views/DemoGuideView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import {
  detectLocaleFromPath,
  normalizePortalLocale,
  readStoredPreference,
  setPortalLocale,
  stripLocalePrefix,
  withLocalePath,
} from '@/locales';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomeView, meta: { pageKind: 'home', locale: 'ko-KR' } },
  { path: '/products/:productId', name: 'product-detail', component: ProductDetailView, props: true, meta: { pageKind: 'product-detail', locale: 'ko-KR' } },
  { path: '/guide', name: 'demo-guide', component: DemoGuideView, meta: { pageKind: 'demo-guide', locale: 'ko-KR' } },

  { path: '/en', name: 'home-en', component: HomeView, meta: { pageKind: 'home', locale: 'en-US' } },
  { path: '/en/products/:productId', name: 'product-detail-en', component: ProductDetailView, props: true, meta: { pageKind: 'product-detail', locale: 'en-US' } },
  { path: '/en/guide', name: 'demo-guide-en', component: DemoGuideView, meta: { pageKind: 'demo-guide', locale: 'en-US' } },

  { path: '/ja', name: 'home-ja', component: HomeView, meta: { pageKind: 'home', locale: 'ja-JP' } },
  { path: '/ja/products/:productId', name: 'product-detail-ja', component: ProductDetailView, props: true, meta: { pageKind: 'product-detail', locale: 'ja-JP' } },
  { path: '/ja/guide', name: 'demo-guide-ja', component: DemoGuideView, meta: { pageKind: 'demo-guide', locale: 'ja-JP' } },

  {
    path: '/ko/:rest(.*)*',
    redirect: (to) => {
      const stripped = stripLocalePrefix(to.path);
      return { path: stripped, hash: to.hash };
    },
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView, meta: { pageKind: 'not-found' } },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, top: 96, behavior: 'smooth' };
    }
    return { top: 0 };
  },
});

let initialRedirectChecked = false;

router.beforeEach((to) => {
  const queryLang = typeof to.query.lang === 'string' ? to.query.lang : null;
  if (queryLang) {
    const targetLocale = normalizePortalLocale(queryLang);
    setPortalLocale(targetLocale, true);
    const nextPath = withLocalePath(to.path, targetLocale);
    const nextQuery = { ...to.query };
    delete nextQuery.lang;
    return { path: nextPath, query: nextQuery, hash: to.hash, replace: true };
  }

  const pathLocale = detectLocaleFromPath(to.path);
  if (pathLocale) {
    initialRedirectChecked = true;
    setPortalLocale(pathLocale, false);
    return true;
  }

  if (!initialRedirectChecked) {
    initialRedirectChecked = true;
    const stored = readStoredPreference();
    if (stored && stored !== 'ko-KR') {
      setPortalLocale(stored, false);
      const nextPath = withLocalePath(to.path, stored);
      if (nextPath !== to.path) {
        return { path: nextPath, query: to.query, hash: to.hash, replace: true };
      }
    }
  }

  setPortalLocale('ko-KR', false);
  return true;
});
