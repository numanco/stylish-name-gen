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
import gamingImg from '@/assets/seo/gaming-stylish-name.jpg';
import stylishBioImg from '@/assets/seo/stylish-bio-examples.jpg';
import stylishDesignImg from '@/assets/seo/stylish-name-design.jpg';
import stylishGirlImg from '@/assets/seo/stylish-name-girl.jpg';
import stylishBoyImg from '@/assets/seo/stylish-name-boy.jpg';
import beautifulImg from '@/assets/seo/beautiful-stylish-name.jpg';
import urduImg from '@/assets/seo/urdu-stylish-name.jpg';
import arabicImg from '@/assets/seo/arabic-stylish-name.jpg';
import happyBirthdayImg from '@/assets/seo/happy-birthday-stylish.jpg';
import rajputImg from '@/assets/seo/rajput-stylish-name.jpg';

const IMAGE_MAP: Record<string, { src: string; alt: string }> = {
  'free-fire-stylish-name': { src: freeFireImg, alt: 'Free Fire stylish name generator showing decorated gaming names with fire effects' },
  'pubg-stylish-name': { src: pubgImg, alt: 'PUBG stylish name generator with military tactical decorated names' },
  'tiktok-stylish-name': { src: tiktokImg, alt: 'TikTok stylish name generator showing aesthetic bio names with music notes' },
  'instagram-stylish-name': { src: instagramImg, alt: 'Instagram stylish name and bio generator with aesthetic decorated usernames' },
  'cool-stylish-name': { src: coolImg, alt: 'Cool stylish name generator showing sparkle Unicode text name examples' },
  'copy-paste-stylish-name': { src: copyPasteImg, alt: 'Copy paste stylish name tool showing clipboard with fancy decorated names' },
  'stylish-name-for-boys': { src: boysImg, alt: 'Stylish name generator for boys showing bold names like King, Legend, Boss, Warrior' },
  'stylish-name-for-girls': { src: girlsImg, alt: 'Stylish name generator for girls showing decorated names like Queen, Princess, Angel' },
  'whatsapp-stylish-name': { src: whatsappImg, alt: 'WhatsApp stylish name generator showing fancy bio text with green chat effects' },
  'youtube-stylish-name': { src: youtubeImg, alt: 'YouTube stylish channel name generator with red play button branding theme' },
  'facebook-stylish-name': { src: facebookImg, alt: 'Facebook stylish name generator showing fancy profile name examples' },
  'discord-stylish-name': { src: discordImg, alt: 'Discord stylish username generator showing decorated server names' },
  'attitude-stylish-name': { src: attitudeImg, alt: 'Attitude stylish name generator showing bold names with crown and flame decorations' },
  'hindi-stylish-name': { src: hindiImg, alt: 'Hindi stylish name generator showing Devanagari script with neon glow effects' },
  'bgmi-stylish-name': { src: bgmiImg, alt: 'BGMI stylish name generator showing battlegrounds tactical decorated names' },
  'gaming-stylish-name': { src: gamingImg, alt: 'Gaming stylish name examples showing decorated names like King, Shadow, Royal, Warrior with copy buttons' },
  'stylish-name-boy': { src: stylishBoyImg, alt: 'Stylish names for boys showing bold decorated names with lightning and fire effects - King, Legend, Boss, Dark Knight' },
  'stylish-name-girl': { src: stylishGirlImg, alt: 'Stylish names for girls showing beautiful decorated names with flowers and sparkles - Queen, Princess, Baby Doll, Star Girl' },
  'beautiful-stylish-name': { src: beautifulImg, alt: 'Beautiful stylish name designs showing elegant Unicode font variations with diamond and gold effects' },
  'stylish-name-design': { src: stylishDesignImg, alt: 'Stylish name design showcase showing different Unicode font styles in gold lettering' },
  'urdu-stylish-name-maker': { src: urduImg, alt: 'Urdu stylish name maker showing decorated Urdu names with Islamic geometric patterns' },
  'arabic-stylish-name': { src: arabicImg, alt: 'Arabic stylish name generator showing decorated Arabic calligraphy names with geometric patterns' },
  'happy-birthday-stylish-name': { src: happyBirthdayImg, alt: 'Happy Birthday stylish name generator showing decorated birthday wishes with balloons and confetti' },
  'rajput-stylish-name': { src: rajputImg, alt: 'Rajput stylish name generator showing royal decorated names with crown, sword and shield elements' },
};

// Fallback images for pages without a specific image - maps slug patterns to related images
const FALLBACK_PATTERNS: { pattern: string; src: string; alt: string }[] = [
  { pattern: 'fire', src: freeFireImg, alt: 'Gaming stylish name with fire effects' },
  { pattern: 'pubg', src: pubgImg, alt: 'PUBG tactical stylish names' },
  { pattern: 'bgmi', src: bgmiImg, alt: 'BGMI stylish gaming names' },
  { pattern: 'gaming', src: gamingImg, alt: 'Gaming stylish names with decorated text' },
  { pattern: 'tiktok', src: tiktokImg, alt: 'TikTok aesthetic stylish names' },
  { pattern: 'instagram', src: instagramImg, alt: 'Instagram stylish bio names' },
  { pattern: 'youtube', src: youtubeImg, alt: 'YouTube stylish channel names' },
  { pattern: 'facebook', src: facebookImg, alt: 'Facebook stylish profile names' },
  { pattern: 'whatsapp', src: whatsappImg, alt: 'WhatsApp stylish bio names' },
  { pattern: 'discord', src: discordImg, alt: 'Discord stylish usernames' },
  { pattern: 'boy', src: stylishBoyImg, alt: 'Bold stylish names for boys' },
  { pattern: 'girl', src: stylishGirlImg, alt: 'Beautiful stylish names for girls' },
  { pattern: 'attitude', src: attitudeImg, alt: 'Attitude stylish names with bold effects' },
  { pattern: 'cool', src: coolImg, alt: 'Cool stylish name designs' },
  { pattern: 'beautiful', src: beautifulImg, alt: 'Beautiful stylish name designs' },
  { pattern: 'hindi', src: hindiImg, alt: 'Hindi stylish names' },
  { pattern: 'urdu', src: urduImg, alt: 'Urdu stylish names' },
  { pattern: 'arabic', src: arabicImg, alt: 'Arabic stylish names' },
  { pattern: 'birthday', src: happyBirthdayImg, alt: 'Stylish birthday wishes' },
  { pattern: 'rajput', src: rajputImg, alt: 'Royal Rajput stylish names' },
  { pattern: 'design', src: stylishDesignImg, alt: 'Stylish name designs' },
  { pattern: 'copy', src: copyPasteImg, alt: 'Copy paste stylish names' },
];

export function getSEOImage(slug: string): { src: string; alt: string } | null {
  // Direct match
  if (IMAGE_MAP[slug]) return IMAGE_MAP[slug];

  // Fallback pattern match
  for (const fb of FALLBACK_PATTERNS) {
    if (slug.includes(fb.pattern)) return { src: fb.src, alt: fb.alt };
  }

  // Default fallback for alphabet and other pages
  return { src: heroImg, alt: 'Stylish name generator showing fancy Unicode text effects and symbols' };
}

export { heroImg, stylishBioImg };
export const heroAlt = 'Stylish name generator tool showing neon gaming text effects and Unicode symbols';
export const bioAlt = 'Stylish bio examples showing decorated social media bio text with symbols and fancy fonts';
