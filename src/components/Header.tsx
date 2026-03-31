import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between h-14">
        <Link to="/" className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="font-bold text-lg text-gradient-primary">StylishName</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/generator" className="text-muted-foreground hover:text-foreground transition-colors">Generator</Link>
          <Link to="/free-fire-stylish-name" className="text-muted-foreground hover:text-foreground transition-colors">Free Fire</Link>
          <Link to="/pubg-stylish-name" className="text-muted-foreground hover:text-foreground transition-colors">PUBG</Link>
          <Link to="/tiktok-stylish-name" className="text-muted-foreground hover:text-foreground transition-colors">TikTok</Link>
          <Link to="/instagram-stylish-name" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</Link>
        </nav>
      </div>
    </header>
  );
}
