import SEOHead from '@/components/SEOHead';
import Generator from '@/components/Generator';
import RecentStyles from '@/components/RecentStyles';

export default function GeneratorPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stylish-name-gen.in' },
      { '@type': 'ListItem', position: 2, name: 'Generator', item: 'https://stylish-name-gen.in/generator' },
    ],
  };

  return (
    <>
      <SEOHead
        title="Stylish Name Generator Tool — Create 1000+ Fancy Names Free | 2026"
        description="Free online stylish name generator with 1000+ Unicode font variations. Create cool, fancy, aesthetic gaming & social media names. Instant copy & paste!"
        path="/generator"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="container py-10 space-y-10">
        <section className="text-center space-y-3 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Stylish Name <span className="text-gradient-primary">Generator</span>
          </h1>
          <p className="text-muted-foreground font-body">
            Type any text and instantly generate hundreds of stylish Unicode variations. Click copy to use anywhere!
          </p>
        </section>
        <Generator />
        <RecentStyles />
      </div>
    </>
  );
}
