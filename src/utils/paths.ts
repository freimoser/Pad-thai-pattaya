import type { Lang } from '../data/restaurants';

const BASE = import.meta.env.BASE_URL; // ends with /

export function withBase(path: string): string {
  const clean = path.replace(/^\//, '');
  return `${BASE}${clean}`;
}

export function langPath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\//, '').replace(/\/$/, '');
  if (!clean) return withBase(`${lang}/`);
  return withBase(`${lang}/${clean}/`);
}

export function switchLangPath(currentPath: string, newLang: Lang): string {
  // currentPath like /pad-thai-pattaya/de/top-10/ or /de/top-10/
  const withoutBase = currentPath.replace(BASE, '/').replace(/^\/+/, '');
  const parts = withoutBase.split('/').filter(Boolean);
  if (parts.length === 0) return langPath(newLang);
  parts[0] = newLang;
  return withBase(parts.join('/') + '/');
}
