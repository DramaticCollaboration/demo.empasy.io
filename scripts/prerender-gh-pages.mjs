import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const SITE_ORIGIN = 'https://demo.empasy.io';

function escapeHtml(text) {
  return String(text ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildHreflangBlock(basePath) {
  const koPath = basePath === '/' ? '/' : basePath;
  const enPath = basePath === '/' ? '/en/' : `/en${basePath}`;
  const jaPath = basePath === '/' ? '/ja/' : `/ja${basePath}`;
  return [
    `<link rel="alternate" hreflang="ko" href="${SITE_ORIGIN}${koPath}" />`,
    `<link rel="alternate" hreflang="en" href="${SITE_ORIGIN}${enPath}" />`,
    `<link rel="alternate" hreflang="ja" href="${SITE_ORIGIN}${jaPath}" />`,
    `<link rel="alternate" hreflang="x-default" href="${SITE_ORIGIN}${koPath}" />`,
  ].join('\n    ');
}

function renderHtml(template, { lang, ogLocale, title, description, routePath, basePath }) {
  const canonical = `${SITE_ORIGIN}${routePath}`;
  const hreflangs = buildHreflangBlock(basePath);
  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml(description);

  let html = template;
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${lang}">`);
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`);
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${safeDesc}" />`,
  );
  html = html.replace(
    /<link rel="canonical" id="canonical-link" href="[^"]*" \/>/,
    `<link rel="canonical" id="canonical-link" href="${canonical}" />`,
  );
  html = html.replace('<!-- HREFLANG_SLOT -->', hreflangs);
  html = html.replace(
    /<meta property="og:locale" content="[^"]*" \/>/,
    `<meta property="og:locale" content="${ogLocale}" />`,
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${safeTitle}" />`,
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${safeDesc}" />`,
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${canonical}" />`,
  );
  return html;
}

function writeRouteHtml(relDir, html) {
  const targetDir = relDir ? path.join(distDir, relDir) : distDir;
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
}

function main() {
  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    throw new Error(`Missing build output: ${indexPath}`);
  }
  const template = fs.readFileSync(indexPath, 'utf8');

  const catalogs = {
    ko: JSON.parse(fs.readFileSync(path.join(rootDir, 'public/data/portal-catalog.json'), 'utf8')),
    en: JSON.parse(fs.readFileSync(path.join(rootDir, 'public/data/portal-catalog.en.json'), 'utf8')),
    ja: JSON.parse(fs.readFileSync(path.join(rootDir, 'public/data/portal-catalog.ja.json'), 'utf8')),
  };

  const localeMeta = {
    ko: {
      ogLocale: 'ko_KR',
      prefix: '',
      homeTitle: '엠파시 SyncSeries 통합 데모 포털 | 설치 없이 직접 체험하세요',
      homeDesc: '엠파시 SyncSeries 통합 데모 포털(demo.empasy.io). 핵심 4종과 확장 모듈 7종을 설치 없이 웹 브라우저에서 직접 체험할 수 있습니다.',
      guideTitle: '체험 계정 안내 | 엠파시 SyncSeries 통합 데모 포털',
      guideDesc: '엠파시 SyncSeries 통합 데모 포털(demo.empasy.io) 제품별 접속 주소, 체험 계정 일람 및 매일 오전 4시 초기화 안내.',
      productSuffix: '체험 안내 | 엠파시 SyncSeries 통합 데모 포털',
    },
    en: {
      ogLocale: 'en_US',
      prefix: '/en',
      homeTitle: 'Empasy SyncSeries Unified Demo Portal | Explore Live Screens',
      homeDesc: 'Empasy SyncSeries Unified Demo Portal (demo.empasy.io). Explore 4 core solutions and 7 extension modules live in your browser without installation.',
      guideTitle: 'Demo Accounts | Empasy SyncSeries Unified Demo Portal',
      guideDesc: 'Live access URLs, demo accounts, and daily 04:00 KST reset schedule on demo.empasy.io.',
      productSuffix: 'Demo Guide | Empasy SyncSeries Unified Demo Portal',
    },
    ja: {
      ogLocale: 'ja_JP',
      prefix: '/ja',
      homeTitle: 'Empasy SyncSeries 統合デモポータル | インストール不要で体験',
      homeDesc: 'Empasy SyncSeries 統合デモポータル（demo.empasy.io）。中核4製品と拡張モジュール7製品をインストール不要でブラウザから体験できます。',
      guideTitle: 'デモアカウント案内 | Empasy SyncSeries 統合デモポータル',
      guideDesc: 'Empasy SyncSeries 統合デモポータル（demo.empasy.io）の製品別URL、デモアカウント、日次リセット案内。',
      productSuffix: '体験ガイド | Empasy SyncSeries 統合デモポータル',
    },
  };

  let generatedCount = 0;

  for (const lang of ['ko', 'en', 'ja']) {
    const meta = localeMeta[lang];
    const catalog = catalogs[lang];
    const homeRoute = meta.prefix ? `${meta.prefix}/` : '/';
    const homeDir = meta.prefix ? meta.prefix.slice(1) : '';

    writeRouteHtml(
      homeDir,
      renderHtml(template, {
        lang,
        ogLocale: meta.ogLocale,
        title: meta.homeTitle,
        description: meta.homeDesc,
        routePath: homeRoute,
        basePath: '/',
      }),
    );
    generatedCount++;

    const guideRoute = `${meta.prefix}/guide`;
    writeRouteHtml(
      guideRoute.slice(1),
      renderHtml(template, {
        lang,
        ogLocale: meta.ogLocale,
        title: meta.guideTitle,
        description: meta.guideDesc,
        routePath: guideRoute,
        basePath: '/guide',
      }),
    );
    generatedCount++;

    for (const prod of catalog.products) {
      const basePath = `/products/${prod.id}`;
      const routePath = `${meta.prefix}${basePath}`;
      writeRouteHtml(
        routePath.slice(1),
        renderHtml(template, {
          lang,
          ogLocale: meta.ogLocale,
          title: `${prod.name} ${meta.productSuffix}`,
          description: `${prod.name} — ${prod.subtitle}. ${prod.summary}`,
          routePath,
          basePath,
        }),
      );
      generatedCount++;
    }
  }

  // Legacy /ko/ redirect page to /
  const koRedirectHtml = `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta http-equiv="refresh" content="0;url=/"><link rel="canonical" href="${SITE_ORIGIN}/"><script>window.location.replace('/');</script></head><body></body></html>`;
  writeRouteHtml('ko', koRedirectHtml);

  // SPA fallback 404.html & GitHub Pages markers
  fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));
  fs.writeFileSync(path.join(distDir, '.nojekyll'), '', 'utf8');
  fs.writeFileSync(path.join(distDir, 'CNAME'), 'demo.empasy.io\n', 'utf8');

  console.log(`[prerender-gh-pages] Generated ${generatedCount} route pages + 404.html + CNAME + .nojekyll`);
}

main();
