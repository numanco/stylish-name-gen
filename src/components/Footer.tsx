import { Link } from 'react-router-dom';
import { ALL_SEO_PAGES } from '@/lib/seo-data';

export default function Footer() {
  const featured = ALL_SEO_PAGES.slice(0, 20);

  return (
    <footer className="border-t border-border bg-card/50 mt-16" role="contentinfo">
      <div className="container py-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-foreground mb-3">Gaming Names</h3>
            <nav aria-label="Gaming name generators" className="space-y-1.5">
              {featured.filter(p => ['free-fire','pubg','bgmi','gaming'].some(k => p.slug.includes(k))).map(p => (
                <Link key={p.slug} to={`/${p.slug}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">{p.keyword}</Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-3">Social Media</h3>
            <nav aria-label="Social media name generators" className="space-y-1.5">
              {featured.filter(p => ['tiktok','instagram','youtube','facebook'].some(k => p.slug.includes(k))).map(p => (
                <Link key={p.slug} to={`/${p.slug}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">{p.keyword}</Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-3">Popular</h3>
            <nav aria-label="Popular name generators" className="space-y-1.5">
              {featured.filter(p => ['boy','girl','cool','attitude','beautiful'].some(k => p.slug.includes(k))).map(p => (
                <Link key={p.slug} to={`/${p.slug}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">{p.keyword}</Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-3">Quick Links</h3>
            <nav aria-label="Quick links" className="space-y-1.5">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/generator" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Generator Tool</Link>
              <a href="https://home.unicode.org/" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Unicode.org ↗</a>
              <a href="https://en.wikipedia.org/wiki/Unicode_font" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About Unicode Fonts ↗</a>
            </nav>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © 2026 <a href="https://stylish-name-gen.in" className="text-primary hover:underline">stylish-name-gen.in</a> — Free online stylish name maker for gaming and social media.
        </div>
      </div>
    </footer>
  );
}
