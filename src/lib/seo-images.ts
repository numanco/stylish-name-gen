// SEO image mapping for slug-based pages
import heroImg from '@/assets/seo/stylish-name-hero.jpg';
import freeFireImg from '@/assets/seo/free-fire-stylish-name.jpg';
import pubgImg from '@/assets/seo/pubg-stylish-name.jpg';
import tiktokImg from '@/assets/seo/tiktok-stylish-name.jpg';
import instagramImg from '@/assets/seo/instagram-stylish-name.jpg';
import coolImg from '@/assets/seo/cool-stylish-name.jpg';
import copyPasteImg from '@/assets/seo/copy-paste-stylish.jpg';
import boysImg from '@/assets/seo/boys-stylish-name.jpg';
import girlsImg from '@/assets/seo/girls-stylish-name.jpg';
import whatsappImg from '@/assets/seo/whatsapp-stylish-name.jpg';
import youtubeImg from '@/assets/seo/youtube-stylish-name.jpg';
import facebookImg from '@/assets/seo/facebook-stylish-name.jpg';
import discordImg from '@/assets/seo/discord-stylish-name.jpg';
import attitudeImg from '@/assets/seo/attitude-stylish-name.jpg';
import hindiImg from '@/assets/seo/hindi-stylish-name.jpg';
import bgmiImg from '@/assets/seo/bgmi-stylish-name.jpg';

const IMAGE_MAP: Record<string, { src: string; alt: string }> = {
  'free-fire-stylish-name': { src: freeFireImg, alt: 'Free Fire stylish name generator with fire effects and gaming symbols' },
  'pubg-stylish-name': { src: pubgImg, alt: 'PUBG stylish name generator with military tactical theme' },
  'tiktok-stylish-name': { src: tiktokImg, alt: 'TikTok stylish name generator with music notes and neon glow' },
  'instagram-stylish-name': { src: instagramImg, alt: 'Instagram stylish name generator with camera lens and gradient effects' },
  'cool-stylish-name': { src: coolImg, alt: 'Cool stylish name generator with sparkle Unicode text effects' },
  'copy-paste-stylish-name': { src: copyPasteImg, alt: 'Copy paste stylish name tool with clipboard and glowing text' },
  'stylish-name-for-boys': { src: boysImg, alt: 'Stylish name generator for boys with bold lightning effects' },
  'stylish-name-for-girls': { src: girlsImg, alt: 'Stylish name generator for girls with pink flower petals and sparkles' },
  'whatsapp-stylish-name': { src: whatsappImg, alt: 'WhatsApp stylish name generator with green chat bubble effects' },
  'youtube-stylish-name': { src: youtubeImg, alt: 'YouTube stylish name generator with red play button theme' },
  'facebook-stylish-name': { src: facebookImg, alt: 'Facebook stylish name generator with blue social network glow' },
  'discord-stylish-name': { src: discordImg, alt: 'Discord stylish name generator with purple gaming chat interface' },
  'attitude-stylish-name': { src: attitudeImg, alt: 'Attitude stylish name generator with crown and flame effects' },
  'hindi-stylish-name': { src: hindiImg, alt: 'Hindi stylish name generator with Devanagari script and neon effects' },
  'bgmi-stylish-name': { src: bgmiImg, alt: 'BGMI stylish name generator with battlegrounds tactical theme' },
};

export function getSEOImage(slug: string): { src: string; alt: string } | null {
  return IMAGE_MAP[slug] || null;
}

export { heroImg };
export const heroAlt = 'Stylish name generator tool showing neon gaming text effects and Unicode symbols';
