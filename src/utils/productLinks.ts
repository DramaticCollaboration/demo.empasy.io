import type { ProductCatalogItem, ProductEntryLink } from '@/types/portal.types';

export function getPrimaryConsoleEntry(prod: ProductCatalogItem): ProductEntryLink | undefined {
  return (
    prod.entryLinks.find((link) => !link.isDownload && link.isPrimary) ??
    prod.entryLinks.find((link) => !link.isDownload) ??
    prod.entryLinks[0]
  );
}

export function getDownloadEntry(prod: ProductCatalogItem): ProductEntryLink | undefined {
  return prod.entryLinks.find((link) => link.isDownload);
}

export function buildProductHomepageUrl(
  productId: string,
  langSlug: string,
  corporateSiteUrl = 'https://empasy.io',
): string {
  const base = corporateSiteUrl.replace(/\/+$/, '');
  return `${base}/${langSlug}/solutions/${productId}.html`;
}

