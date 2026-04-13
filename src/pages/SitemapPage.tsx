import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { ALL_SEO_PAGES } from "@/lib/seo-data";

const categories = [
  { label: "🎮 Gaming", filter: (s: string) => ["free-fire","pubg","bgmi","gaming"].some(k => s.includes(k)) },
  { label: "📱 Social Media", filter: (s: string) => ["tiktok","instagram","youtube","facebook"].some(k => s.includes(k)) },
  { label: "🌐 Language & Culture", filter: (s: string) => ["urdu","hindi","arabic","rajput"].some(k => s.includes(k)) },
  { label: "✨ Style & Aesthetic", filter: (s: string) => ["boy","girl","cool","attitude","beautiful","design","happy"].some(k => s.includes(k)) },
  { label: "🔤 A–Z Names", filter: (s: string) => /^[a-z]-stylish-name$/.test(s) },
];

export default function SitemapPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "All Stylish Name Generators – Complete Directory",
    description: "Browse all 40+ stylish name generators organized by category.",
    url: "https://stylish-name-gen.in/sitemap",
  };

  return (
    <>
      <SEOHead
        title="All Stylish Name Generators | Complete Directory 2026"
        description="Browse our complete collection of 40+ stylish name generators for gaming, social media, and more. Find the perfect generator for Free Fire, PUBG, Instagram, TikTok and A–Z names."
        path="/sitemap"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">All Stylish Name Generators</h1>
        <p className="text-muted-foreground mb-8">
          Browse our complete directory of {ALL_SEO_PAGES.length}+ stylish name generators organized by category.
        </p>

        {categories.map(cat => {
          const pages = ALL_SEO_PAGES.filter(p => cat.filter(p.slug));
          if (!pages.length) return null;
          return (
            <section key={cat.label} className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-3">{cat.label}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {pages.map(p => (
                  <Link
                    key={p.slug}
                    to={`/${p.slug}`}
                    className="block rounded-lg border border-border bg-card p-3 hover:bg-accent transition-colors"
                  >
                    <span className="font-medium text-foreground text-sm">{p.keyword}</span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        <div className="mt-8 text-center">
          <Link to="/generator" className="text-primary hover:underline font-medium">
            ← Back to Generator
          </Link>
        </div>
      </div>
    </>
  );
}
