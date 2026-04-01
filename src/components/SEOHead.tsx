import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
}

const SITE_URL = 'https://stylish-name-gen.in';

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let meta = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement('meta');
    document.head.appendChild(meta);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    meta?.setAttribute(key, value);
  });
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }

  link.href = href;
}

export default function SEOHead({ title, description, path = '/' }: SEOHeadProps) {
  useEffect(() => {
    const normalizedPath = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
    const url = `${SITE_URL}${normalizedPath}`;

    document.title = title;

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    });
    upsertCanonical(url);

    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: 'Stylish Name Generator',
    });
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    });
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: url,
    });

    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    });
    upsertMeta('meta[name="twitter:url"]', {
      name: 'twitter:url',
      content: url,
    });
  }, [description, path, title]);

  return null;
}
