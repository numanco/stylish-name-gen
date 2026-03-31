import { useState, useEffect } from 'react';
import { getRecentStyles } from '@/lib/recent-styles';
import CopyButton from './CopyButton';

export default function RecentStyles() {
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    setRecent(getRecentStyles());
  }, []);

  if (recent.length === 0) return null;

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-foreground">Recently Copied</h2>
      <div className="grid gap-2">
        {recent.map((style, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-3 bg-card border border-border rounded-lg px-4 py-2.5"
          >
            <span className="text-foreground font-body text-sm break-all flex-1 select-all">{style}</span>
            <CopyButton text={style} />
          </div>
        ))}
      </div>
    </section>
  );
}
