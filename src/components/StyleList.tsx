import CopyButton from './CopyButton';
import type { StyledName } from '@/lib/unicode-engine';

interface StyleListProps {
  styles: StyledName[];
  onLoadMore?: () => void;
  hasMore?: boolean;
}

export default function StyleList({ styles, onLoadMore, hasMore }: StyleListProps) {
  if (styles.length === 0) return null;

  return (
    <div className="space-y-3">
      <div className="grid gap-2">
        {styles.map((style) => (
          <div
            key={style.id}
            className="flex items-center justify-between gap-3 bg-card border border-border rounded-lg px-4 py-3 shadow-card hover:border-primary/30 transition-colors"
          >
            <span className="text-foreground font-body text-base break-all flex-1 select-all">
              {style.text}
            </span>
            <CopyButton text={style.text} />
          </div>
        ))}
      </div>

      {hasMore && onLoadMore && (
        <button
          onClick={onLoadMore}
          className="w-full py-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors font-medium"
        >
          Load More Styles ↓
        </button>
      )}
    </div>
  );
}
