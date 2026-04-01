import SEOHead from '@/components/SEOHead';
import Generator from '@/components/Generator';
import RecentStyles from '@/components/RecentStyles';

export default function GeneratorPage() {
  return (
    <>
      <SEOHead
        title="Stylish Name Generator | Free Online Tool 2026"
        description="Free stylish name generator with 1000+ Unicode variations. Create fancy, cool, gaming, and aesthetic names. Copy & paste instantly!"
        path="/generator"
      />
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
