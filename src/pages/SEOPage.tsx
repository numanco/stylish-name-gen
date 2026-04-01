import { useParams, Navigate } from 'react-router-dom';
import { getSEOPageBySlug } from '@/lib/seo-data';
import SEOHead from '@/components/SEOHead';
import Generator from '@/components/Generator';
import SEOContent from '@/components/SEOContent';
import RecentStyles from '@/components/RecentStyles';

export default function SEOPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? getSEOPageBySlug(slug) : undefined;

  if (!page) return <Navigate to="/" replace />;

  return (
    <>
      <SEOHead title={page.title} description={page.metaDescription} path={`/${page.slug}`} />
      <div className="container py-10 space-y-10">
        <section className="text-center space-y-3 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">{page.h1}</h1>
          <p className="text-muted-foreground font-body leading-relaxed">{page.intro}</p>
        </section>

        <Generator defaultInput={page.defaultInput} />

        <SEOContent page={page} />

        <RecentStyles />
      </div>
    </>
  );
}
