import { useParams, Navigate } from 'react-router-dom';
import { getSEOPageBySlug } from '@/lib/seo-data';
import SEOHead from '@/components/SEOHead';
import Generator from '@/components/Generator';
import SEOContent from '@/components/SEOContent';
import RecentStyles from '@/components/RecentStyles';
import { getSEOImage } from '@/lib/seo-images';

export default function SEOPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? getSEOPageBySlug(slug) : undefined;

  if (!page) return <Navigate to="/" replace />;

  const image = getSEOImage(page.slug);

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stylish-name-gen.in' },
        { '@type': 'ListItem', position: 2, name: page.keyword, item: `https://stylish-name-gen.in/${page.slug}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: page.title,
      description: page.metaDescription,
      url: `https://stylish-name-gen.in/${page.slug}`,
      isPartOf: { '@type': 'WebSite', name: 'Stylish Name Generator', url: 'https://stylish-name-gen.in' },
    },
  ];

  return (
    <>
      <SEOHead title={page.title} description={page.metaDescription} path={`/${page.slug}`} />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <div className="container py-10 space-y-10">
        <section className="text-center space-y-3 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">{page.h1}</h1>
          <p className="text-muted-foreground font-body leading-relaxed">{page.intro}</p>
          {image && (
            <img
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              loading="lazy"
              className="rounded-xl border border-border mx-auto w-full max-w-xl"
            />
          )}
        </section>

        <Generator defaultInput={page.defaultInput} />

        <SEOContent page={page} />

        <RecentStyles />
      </div>
    </>
  );
}
