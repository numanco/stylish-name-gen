import { useState, useCallback, useMemo } from 'react';
import { Sparkles } from 'lucide-react';
import { generateStylesBatch, getAllCategories, type StyleCategory } from '@/lib/unicode-engine';
import StyleList from './StyleList';

interface GeneratorProps {
  defaultInput?: string;
  defaultCategory?: StyleCategory;
}

const INITIAL_COUNT = 30;
const LOAD_MORE_COUNT = 50;

export default function Generator({ defaultInput = '', defaultCategory }: GeneratorProps) {
  const [input, setInput] = useState(defaultInput);
  const [category, setCategory] = useState<StyleCategory | undefined>(defaultCategory);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const { styles, hasMore } = useMemo(() => {
    return generateStylesBatch(input, visibleCount, category);
  }, [input, category, visibleCount]);

  const handleLoadMore = useCallback(() => {
    setVisibleCount(prev => prev + LOAD_MORE_COUNT);
  }, []);

  const categories = getAllCategories();

  return (
    <div className="space-y-6">
      {/* Input */}
      <div className="relative">
        <label htmlFor="stylish-name-input" className="sr-only">Enter your name to generate stylish variations</label>
        <input
          id="stylish-name-input"
          type="text"
          value={input}
          onChange={(e) => { setInput(e.target.value); setVisibleCount(INITIAL_COUNT); }}
          placeholder="Type your name here..."
          maxLength={50}
          className="w-full px-5 py-4 rounded-xl bg-card border-2 border-border text-foreground text-lg font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
        />
        <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" aria-hidden="true" />
      </div>

      {/* Categories */}
      <nav aria-label="Style categories" className="flex flex-wrap gap-2">
        <button
          onClick={() => { setCategory(undefined); setVisibleCount(INITIAL_COUNT); }}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            !category ? 'gradient-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'
          }`}
        >
          ✨ All
        </button>
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => { setCategory(cat.key); setVisibleCount(INITIAL_COUNT); }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              category === cat.key ? 'gradient-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'
            }`}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </nav>

      {/* Results count */}
      {input && (
        <p className="text-sm text-muted-foreground">
          Showing {styles.length} stylish variations{hasMore ? ' — click "Load More" for more styles' : ''}
        </p>
      )}

      {/* Style list */}
      <StyleList
        styles={styles}
        hasMore={hasMore}
        onLoadMore={handleLoadMore}
      />
    </div>
  );
}
