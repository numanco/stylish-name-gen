import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import Generator from '@/components/Generator';
import RecentStyles from '@/components/RecentStyles';
import { ALL_SEO_PAGES } from '@/lib/seo-data';
import { heroImg, heroAlt, stylishBioImg, bioAlt } from '@/lib/seo-images';

export default function HomePage() {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Stylish Name Generator',
      url: 'https://stylish-name-gen.in',
      description: 'Generate 1000+ stylish Unicode names instantly. Copy & paste for Free Fire, PUBG, TikTok, Instagram & more.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Stylish Name Generator',
      url: 'https://stylish-name-gen.in',
      logo: 'https://stylish-name-gen.in/placeholder.svg',
      sameAs: [],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        url: 'https://stylish-name-gen.in',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Stylish Name Generator',
      url: 'https://stylish-name-gen.in',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://stylish-name-gen.in/generator?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stylish-name-gen.in' },
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title="Stylish Name Generator 2026 — 1000+ Cool & Fancy Names | Copy & Paste Free"
        description="Generate 1000+ stylish Unicode names instantly. Free stylish name generator for Free Fire, PUBG, TikTok, Instagram, WhatsApp & more. Copy & paste cool, fancy, aesthetic names!"
        path="/"
      />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <div className="container py-10 space-y-12">
        {/* Hero */}
        <section className="text-center space-y-4 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-primary">Stylish Name</span>{' '}
            <span className="text-foreground">Generator 2026</span>
          </h1>
          <p className="text-muted-foreground text-lg font-body leading-relaxed">
            Generate 1000+ unique stylish names with fancy Unicode fonts, cool symbols, and eye-catching decorations.
            Perfect for gaming, social media, and personal branding. Instant copy &amp; paste!
          </p>
          <img
            src={heroImg}
            alt={heroAlt}
            width={1200}
            height={630}
            className="rounded-xl border border-border mx-auto w-full max-w-2xl"
            fetchPriority="high"
          />
        </section>

        {/* Generator */}
        <Generator defaultInput="YourName" />

        {/* Recent */}
        <RecentStyles />

        {/* Internal Links — SEO Pages */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground text-center">
            Explore Stylish Name Generators
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {ALL_SEO_PAGES.slice(0, 24).map(page => (
              <Link
                key={page.slug}
                to={`/${page.slug}`}
                className="bg-card border border-border rounded-lg p-3 text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors text-center font-body"
              >
                {page.keyword}
              </Link>
            ))}
          </div>
        </section>

        {/* Info + external links */}
        <section className="max-w-2xl mx-auto space-y-6 font-body">
          <img
            src={stylishBioImg}
            alt={bioAlt}
            width={800}
            height={800}
            loading="lazy"
            className="rounded-xl border border-border mx-auto w-full max-w-lg"
          />
          <h2 className="text-2xl font-bold text-foreground">What is a Stylish Name Generator?</h2>
          <p className="text-muted-foreground leading-relaxed">
            A stylish name generator converts your regular text into fancy{' '}
            <a href="https://home.unicode.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Unicode</a>{' '}
            font variations with decorative symbols.
            These stylish names work on all platforms including{' '}
            <Link to="/free-fire-stylish-name" className="text-primary hover:underline">Free Fire</Link>,{' '}
            <Link to="/pubg-stylish-name" className="text-primary hover:underline">PUBG Mobile</Link>,{' '}
            <Link to="/tiktok-stylish-name" className="text-primary hover:underline">TikTok</Link>,{' '}
            <Link to="/instagram-stylish-name" className="text-primary hover:underline">Instagram</Link>,{' '}
            Facebook, YouTube, WhatsApp, and Discord. Unlike regular fonts, Unicode characters are universal — they display correctly everywhere
            without any special apps or installations.
          </p>

          <h2 className="text-2xl font-bold text-foreground">Why Use Stylish Names?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Stylish names help you stand out in games and social media. A unique gaming tag can intimidate opponents in{' '}
            <Link to="/free-fire-stylish-name" className="text-primary hover:underline">Free Fire</Link> and{' '}
            <Link to="/pubg-stylish-name" className="text-primary hover:underline">PUBG</Link>. An aesthetic{' '}
            <Link to="/instagram-stylish-name" className="text-primary hover:underline">Instagram name</Link> attracts more followers. Creative{' '}
            Discord names make you memorable in communities.
            Our <Link to="/generator" className="text-primary hover:underline">generator</Link> creates 1000+ variations instantly so you always find the perfect style.
          </p>

          <h2 className="text-2xl font-bold text-foreground">How Does It Work?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our tool uses the{' '}
            <a href="https://en.wikipedia.org/wiki/Unicode" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Unicode standard</a>{' '}
            to transform text into mathematical bold, italic, script, fraktur, double-struck, and other font styles.
            Combined with decorative symbols and emoji borders, it produces thousands of unique name variations.
            All generated names are fully compatible with{' '}
            <a href="https://en.wikipedia.org/wiki/UTF-8" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">UTF-8</a>{' '}
            encoding used by all modern apps and platforms.
          </p>
        </section>

        {/* More internal links */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {ALL_SEO_PAGES.slice(24, 48).map(page => (
              <Link
                key={page.slug}
                to={`/${page.slug}`}
                className="bg-card border border-border rounded-lg p-3 text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors text-center font-body"
              >
                {page.keyword}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
