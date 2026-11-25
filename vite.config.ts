import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, type Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';

const SITE_ORIGIN = 'https://sync.empasy.io';

interface CatalogProduct {
  id: string;
  name: string;
  subtitle: string;
  summary: string;
}

interface CatalogFile {
  products: CatalogProduct[];
}

function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtmlText(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function portalMultilingualPrerenderPlugin(): Plugin {
  let outDir = 'dist';
  let rootDir = process.cwd();

  return {
    name: 'empasy-portal-multilingual-prerender',
    configResolved(config) {
      rootDir = config.root;
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const baseIndexPath = path.join(outDir, 'index.html');
      if (!fs.existsSync(baseIndexPath)) return;
      const baseHtml = fs.readFileSync(baseIndexPath, 'utf8');

      const localeMeta = {
        ko: {
          catalogFile: 'portal-catalog.json',
          ogLocale: 'ko_KR',
          siteName: '엠파시 SyncSeries 통합 데모 포털',
          homeTitle: '엠파시 SyncSeries 통합 데모 포털 | 설치 없이 직접 체험하세요',
          homeDesc: '엠파시(Empasy) SyncSeries 주력 솔루션 4종(SyncVerse, SyncETA, SyncBoot, SyncCMS)과 분야별 확장 모듈을 설치 없이 웹 브라우저에서 직접 체험하는 통합 데모 포털입니다.',
          guideTitle: '체험 계정 안내 | 엠파시 SyncSeries 통합 데모 포털',
          guideDesc: '엠파시 SyncSeries 통합 데모 포털(sync.empasy.io) 제품별 체험 접속 주소, 체험 계정 일람 및 초기화 안내.',
          productTitle: (name: string) => `${name} 체험 안내 | 엠파시 SyncSeries 통합 데모 포털`,
          productDesc: (p: CatalogProduct) => `${p.name} — ${p.subtitle}. ${p.summary}`,
          loadingTitle: 'SyncSeries 통합 데모 포털',
          loadingSub: '체험 환경을 불러오고 있습니다...',
        },
        en: {
          catalogFile: 'portal-catalog.en.json',
          ogLocale: 'en_US',
          siteName: 'Empasy SyncSeries Unified Demo Portal',
          homeTitle: 'Empasy SyncSeries Unified Demo Portal | Explore Live Screens',
          homeDesc: 'Explore 4 flagship Empasy SyncSeries solutions (SyncVerse, SyncETA, SyncBoot, SyncCMS) and 7 extension modules live in your browser without installation.',
          guideTitle: 'Demo Accounts | Empasy SyncSeries Unified Demo Portal',
          guideDesc: 'Demo access URLs, demo account directory, and daily reset schedule for products on the Empasy SyncSeries Unified Demo Portal (sync.empasy.io).',
          productTitle: (name: string) => `${name} Demo Guide | Empasy SyncSeries Unified Demo Portal`,
          productDesc: (p: CatalogProduct) => `${p.name} — ${p.subtitle}. ${p.summary}`,
          loadingTitle: 'SyncSeries Unified Demo Portal',
          loadingSub: 'Loading live demo environment...',
        },
        ja: {
          catalogFile: 'portal-catalog.ja.json',
          ogLocale: 'ja_JP',
          siteName: 'Empasy SyncSeries 統合デモポータル',
          homeTitle: 'Empasy SyncSeries 統合デモポータル | インストール不要で体験',
          homeDesc: '株式会社エムパシー（Empasy）SyncSeries 主力ソリューション4種（SyncVerse・SyncETA・SyncBoot・SyncCMS）と拡張モジュール7種をインストール不要でブラウザから体験できます。',
          guideTitle: 'デモアカウント案内 | Empasy SyncSeries 統合デモポータル',
          guideDesc: 'Empasy SyncSeries 統合デモポータル（sync.empasy.io）の製品別アクセスURL、アカウント一覧、日次リセット案内。',
          productTitle: (name: string) => `${name} 体験ガイド | Empasy SyncSeries 統合デモポータル`,
          productDesc: (p: CatalogProduct) => `${p.name} — ${p.subtitle}。${p.summary}`,
          loadingTitle: 'SyncSeries 統合デモポータル',
          loadingSub: 'デモ環境を読み込んでいます...',
        },
      } as const;

      const routeUrl = (lang: 'ko' | 'en' | 'ja', basePath: string): string => {
        if (lang === 'ko') return `${SITE_ORIGIN}${basePath}`;
        return basePath === '/' ? `${SITE_ORIGIN}/${lang}/` : `${SITE_ORIGIN}/${lang}${basePath}`;
      };

      const renderPage = (
        lang: 'ko' | 'en' | 'ja',
        basePath: string,
        title: string,
        desc: string,
      ): string => {
        const meta = localeMeta[lang];
        const canonical = routeUrl(lang, basePath);
        const hreflangBlock = [
          `    <link rel="alternate" hreflang="ko" href="${routeUrl('ko', basePath)}" />`,
          `    <link rel="alternate" hreflang="en" href="${routeUrl('en', basePath)}" />`,
          `    <link rel="alternate" hreflang="ja" href="${routeUrl('ja', basePath)}" />`,
          `    <link rel="alternate" hreflang="x-default" href="${routeUrl('ko', basePath)}" />`,
        ].join('\n');

        let html = baseHtml;
        html = html.replace(/<html lang="[^"]*">/, `<html lang="${lang}">`);
        html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtmlText(title)}</title>`);
        html = html.replace(
          /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
          `<meta name="description" content="${escapeHtmlAttr(desc)}" />`,
        );
        html = html.replace(
          /<link rel="canonical" id="canonical-link" href="[^"]*" \/>/,
          `<link rel="canonical" id="canonical-link" href="${canonical}" />`,
        );
        html = html.replace('<!-- HREFLANG_SLOT -->', hreflangBlock);
        html = html.replace(
          /<meta property="og:site_name" content="[^"]*" \/>/,
          `<meta property="og:site_name" content="${escapeHtmlAttr(meta.siteName)}" />`,
        );
        html = html.replace(
          /<meta property="og:locale" content="[^"]*" \/>/,
          `<meta property="og:locale" content="${meta.ogLocale}" />`,
        );
        html = html.replace(
          /<meta property="og:title" content="[^"]*" \/>/,
          `<meta property="og:title" content="${escapeHtmlAttr(title)}" />`,
        );
        html = html.replace(
          /<meta property="og:description" content="[^"]*" \/>/,
          `<meta property="og:description" content="${escapeHtmlAttr(desc)}" />`,
        );
        html = html.replace(
          /<meta property="og:url" content="[^"]*" \/>/,
          `<meta property="og:url" content="${canonical}" />`,
        );
        html = html.replace(
          /<div class="portal-loading-title">[\s\S]*?<\/div>/,
          `<div class="portal-loading-title">${escapeHtmlText(meta.loadingTitle)}</div>`,
        );
        html = html.replace(
          /<div class="portal-loading-sub">[\s\S]*?<\/div>/,
          `<div class="portal-loading-sub">${escapeHtmlText(meta.loadingSub)}</div>`,
        );
        return html;
      };

      const writeRoute = (relOutFile: string, html: string): void => {
        const dest = path.join(outDir, relOutFile);
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.writeFileSync(dest, html, 'utf8');
      };

      for (const lang of ['ko', 'en', 'ja'] as const) {
        const meta = localeMeta[lang];
        const catPath = path.join(rootDir, 'public', 'data', meta.catalogFile);
        const catalog: CatalogFile = fs.existsSync(catPath)
          ? (JSON.parse(fs.readFileSync(catPath, 'utf8')) as CatalogFile)
          : { products: [] };
        const prefix = lang === 'ko' ? '' : `${lang}/`;

        writeRoute(`${prefix}index.html`, renderPage(lang, '/', meta.homeTitle, meta.homeDesc));
        writeRoute(`${prefix}guide/index.html`, renderPage(lang, '/guide', meta.guideTitle, meta.guideDesc));

        for (const prod of catalog.products) {
          writeRoute(
            `${prefix}products/${prod.id}/index.html`,
            renderPage(lang, `/products/${prod.id}`, meta.productTitle(prod.name), meta.productDesc(prod)),
          );
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [vue(), portalMultilingualPrerenderPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5170,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1200,
  },
});
