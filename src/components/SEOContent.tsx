import type { SEOPageData } from '@/lib/seo-data';
import { getRelatedPages } from '@/lib/seo-data';
import { getSEOImage } from '@/lib/seo-images';
import { Link } from 'react-router-dom';

interface SEOContentProps {
  page: SEOPageData;
}

export default function SEOContent({ page }: SEOContentProps) {
  const related = getRelatedPages(page.slug);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="space-y-10 font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Top Names Section */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Top {page.keyword}s
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Use the generator above to create your own unique {page.keyword.toLowerCase()} variations.
          Each style uses Unicode characters that work on all platforms and devices.
        </p>
      </section>

      {/* How To Section */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          How to Create {page.keyword}
        </h2>
        <ol className="space-y-3">
          {page.steps.map((step, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                {i + 1}
              </span>
              <span className="text-muted-foreground pt-1">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {page.faqs.map((faq, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
              <p className="text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Pages with images */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Related Generators
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {related.map(p => {
            const img = getSEOImage(p.slug);
            return (
              <Link
                key={p.slug}
                to={`/${p.slug}`}
                className="bg-card border border-border rounded-lg overflow-hidden text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                {img && (
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    loading="lazy"
                    className="w-full h-24 object-cover"
                  />
                )}
                <span className="block p-3">{p.keyword}</span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
