const STORAGE_KEY = 'stylish-name-recent';
const MAX_ITEMS = 10;

export function getRecentStyles(): string[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch { return []; }
}

export function addRecentStyle(style: string): void {
  try {
    const recent = getRecentStyles().filter(s => s !== style);
    recent.unshift(style);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recent.slice(0, MAX_ITEMS)));
  } catch {}
}
