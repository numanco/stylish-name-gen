import { useState, useCallback, useMemo } from 'react';
import { Sparkles } from 'lucide-react';
import { generateStyles, getAllCategories, type StyleCategory } from '@/lib/unicode-engine';
import StyleList from './StyleList';

interface GeneratorProps {
  defaultInput?: string;
  defaultCategory?: StyleCategory;
}

export default function Generator({ defaultInput = '', defaultCategory }: GeneratorProps) {
  const [input, setInput] = useState(defaultInput);
  const [category, setCategory] = useState<StyleCategory | undefined>(defaultCategory);
  const [visibleCount, setVisibleCount] = useState(500);

  const styles = useMemo(() => {
    return generateStyles(input, category);
  }, [input, category]);

  const handleLoadMore = useCallback(() => {
    setVisibleCount(prev => prev + 30);
  }, []);

  const categories = getAllCategories();

  return (
    <div className="space-y-6">
      {/* Input */}
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => { setInput(e.target.value); setVisibleCount(500); }}
          placeholder="Type your name here..."
          maxLength={50}
          className="w-full px-5 py-4 rounded-xl bg-card border-2 border-border text-foreground text-lg font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
        />
        <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => { setCategory(undefined); setVisibleCount(500); }}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            !category ? 'gradient-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'
          }`}
        >
          ✨ All
        </button>
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => { setCategory(cat.key); setVisibleCount(30); }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              category === cat.key ? 'gradient-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'
            }`}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      {/* Results count */}
      {input && (
        <p className="text-sm text-muted-foreground">
          {styles.length} stylish variations generated
        </p>
      )}

      {/* Ad placeholder top */}
      <div className="ad-placeholder">Advertisement</div>

      {/* Style list */}
      <StyleList
        styles={styles}
        maxVisible={visibleCount}
        hasMore={visibleCount < styles.length}
        onLoadMore={handleLoadMore}
      />

      {/* Ad placeholder between results */}
      {styles.length > 15 && (
        <div className="ad-placeholder">Advertisement</div>
      )}
    </div>
  );
}
