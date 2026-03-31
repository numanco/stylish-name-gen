export interface SEOPageData {
  slug: string;
  keyword: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  defaultInput: string;
  steps: string[];
  faqs: { q: string; a: string }[];
}

const GAMING_PAGES: SEOPageData[] = [
  {
    slug: 'free-fire-stylish-name',
    keyword: 'Free Fire Stylish Name',
    title: 'Free Fire Stylish Name Generator 2026 | Copy & Paste',
    metaDescription: 'Generate 1000+ Free Fire stylish names instantly. Copy & paste cool, pro, and unique gaming names for FF.',
    h1: 'Best Free Fire Stylish Names 2026',
    intro: 'Looking for the best Free Fire stylish name? Our free generator creates unique, cool, and fancy names instantly. Stand out in Garena Free Fire with pro-level fonts, symbols, and Unicode styles. Whether you want aggressive boss names or clean aesthetic tags, generate hundreds of options in one click. Perfect for Free Fire ranked matches, guild names, and tournaments.',
    defaultInput: 'FreeFire',
    steps: ['Enter your Free Fire name or nickname', 'Browse gaming-style categories', 'Click copy on your favorite style', 'Paste directly into Free Fire profile'],
    faqs: [
      { q: 'Can I use these names in Free Fire?', a: 'Yes! All generated names use Unicode characters that are fully compatible with Garena Free Fire.' },
      { q: 'Are these names unique?', a: 'Our generator creates hundreds of unique variations. The combination of fonts and symbols makes each name one-of-a-kind.' },
      { q: 'Is this Free Fire name generator free?', a: 'Absolutely! Our tool is 100% free with unlimited name generation.' },
    ],
  },
  {
    slug: 'pubg-stylish-name',
    keyword: 'PUBG Stylish Name',
    title: 'PUBG Stylish Name Generator 2026 | Copy & Paste',
    metaDescription: 'Generate 1000+ PUBG stylish names instantly. Create unique gaming names with cool fonts and symbols.',
    h1: 'Best PUBG Stylish Names 2026',
    intro: 'Create the ultimate PUBG stylish name with our free generator. Choose from hundreds of Unicode fonts, symbols, and decorative styles perfect for PUBG Mobile and PC. Impress your squad and enemies alike with a pro-level gaming tag. From bold warrior names to sleek minimalist styles, find the perfect name that matches your gameplay.',
    defaultInput: 'PUBG',
    steps: ['Type your desired PUBG username', 'Select a gaming or cool style category', 'Copy your preferred stylish name', 'Paste it in PUBG name change settings'],
    faqs: [
      { q: 'Will these names work in PUBG Mobile?', a: 'Yes, all Unicode-based names work perfectly in PUBG Mobile and BGMI.' },
      { q: 'How many characters can a PUBG name have?', a: 'PUBG allows up to 14 characters. Our generator shows compatible options.' },
      { q: 'Can I use symbols in PUBG names?', a: 'Yes! Unicode symbols and special characters are supported in PUBG.' },
    ],
  },
  {
    slug: 'bgmi-stylish-name',
    keyword: 'BGMI Stylish Name',
    title: 'BGMI Stylish Name Generator 2026 | Copy & Paste',
    metaDescription: 'Generate 1000+ BGMI stylish names. Create unique Battlegrounds Mobile India names with cool fonts.',
    h1: 'Best BGMI Stylish Names 2026',
    intro: 'Get the coolest BGMI stylish names with our instant generator. Create unique Battlegrounds Mobile India usernames with fancy fonts, gaming symbols, and pro-level decorations. Stand out in every match with a name that commands respect. Our tool generates hundreds of variations so you always find the perfect fit for your gaming persona.',
    defaultInput: 'BGMI',
    steps: ['Enter your BGMI nickname', 'Choose from gaming style categories', 'Click copy on your favorite', 'Update your BGMI profile name'],
    faqs: [
      { q: 'Are these names compatible with BGMI?', a: 'Yes! All names use Unicode characters that work in BGMI.' },
      { q: 'Can I create clan names too?', a: 'Absolutely! Use our generator for both personal and clan/guild names.' },
      { q: 'Is there a limit on generations?', a: 'No limits! Generate as many names as you want, completely free.' },
    ],
  },
  {
    slug: 'gaming-stylish-name',
    keyword: 'Gaming Stylish Name',
    title: 'Gaming Stylish Name Generator 2026 | All Games',
    metaDescription: 'Generate 1000+ gaming stylish names for any game. Cool fonts, symbols, and pro names for gamers.',
    h1: 'Best Gaming Stylish Names 2026',
    intro: 'Level up your gaming identity with our universal gaming stylish name generator. Works for all popular games including Free Fire, PUBG, Fortnite, Call of Duty, Valorant, and more. Create intimidating, cool, or aesthetic gaming tags using Unicode fonts and symbols. Our generator produces hundreds of unique variations instantly.',
    defaultInput: 'Gamer',
    steps: ['Enter your gaming alias', 'Pick a style that matches your vibe', 'Copy the generated name', 'Use it in any game that supports Unicode'],
    faqs: [
      { q: 'Which games support these names?', a: 'Most mobile and PC games support Unicode names including FF, PUBG, COD, and Fortnite.' },
      { q: 'Can I mix different styles?', a: 'You can copy parts from different styles and combine them for a unique look.' },
      { q: 'Do these names work on Discord?', a: 'Yes! Discord fully supports Unicode characters in usernames and nicknames.' },
    ],
  },
];

const SOCIAL_PAGES: SEOPageData[] = [
  {
    slug: 'tiktok-stylish-name',
    keyword: 'TikTok Stylish Name',
    title: 'TikTok Stylish Name Generator 2026 | Copy & Paste',
    metaDescription: 'Generate 1000+ TikTok stylish names. Create unique aesthetic usernames with fancy fonts for TikTok.',
    h1: 'Best TikTok Stylish Names 2026',
    intro: 'Make your TikTok profile stand out with our stylish name generator. Create aesthetic, cute, and trendy usernames using beautiful Unicode fonts and symbols. Perfect for content creators who want to build a memorable brand on TikTok. Generate hundreds of unique name variations and find the one that matches your content style.',
    defaultInput: 'TikTok',
    steps: ['Type your TikTok username idea', 'Browse aesthetic and trendy styles', 'Copy your favorite stylish name', 'Update your TikTok display name'],
    faqs: [
      { q: 'Can I use fancy fonts in TikTok names?', a: 'Yes! TikTok supports Unicode characters in display names.' },
      { q: 'Will it affect my TikTok SEO?', a: 'Stylish display names can make your profile more eye-catching and memorable.' },
      { q: 'Can I change my TikTok name anytime?', a: 'Yes, TikTok allows name changes. Use our tool to refresh your style.' },
    ],
  },
  {
    slug: 'instagram-stylish-name',
    keyword: 'Instagram Stylish Name',
    title: 'Instagram Stylish Name Generator 2026 | Bio & Username',
    metaDescription: 'Generate 1000+ Instagram stylish names and bio fonts. Create unique aesthetic names for your IG profile.',
    h1: 'Best Instagram Stylish Names 2026',
    intro: 'Elevate your Instagram presence with stunning stylish names. Our generator creates beautiful Unicode font variations perfect for your Instagram bio, display name, and stories. From minimalist aesthetic to bold statement names, find the perfect style that represents your brand. Works great for influencers, businesses, and personal accounts.',
    defaultInput: 'Instagram',
    steps: ['Enter your Instagram name or brand', 'Choose aesthetic or fancy styles', 'Copy the stylish name', 'Paste in your Instagram bio or name'],
    faqs: [
      { q: 'Does Instagram support Unicode names?', a: 'Yes! Instagram supports Unicode in display names and bios.' },
      { q: 'Can I use these for my Instagram bio?', a: 'Absolutely! These fonts work perfectly in Instagram bios.' },
      { q: 'Will stylish fonts get my account banned?', a: 'No, Unicode characters are safe and widely used on Instagram.' },
    ],
  },
  {
    slug: 'youtube-stylish-name',
    keyword: 'YouTube Stylish Name',
    title: 'YouTube Stylish Name Generator 2026 | Channel Names',
    metaDescription: 'Generate 1000+ YouTube stylish channel names. Create unique, memorable names for your YouTube brand.',
    h1: 'Best YouTube Stylish Names 2026',
    intro: 'Build a standout YouTube brand with our stylish name generator. Create unique channel names using fancy Unicode fonts and eye-catching symbols. Perfect for new creators launching their channel or established YouTubers looking to refresh their brand identity. Generate professional and creative name variations instantly.',
    defaultInput: 'YouTube',
    steps: ['Type your channel name idea', 'Browse professional and creative styles', 'Copy the perfect stylish name', 'Use it for your YouTube channel'],
    faqs: [
      { q: 'Can I use stylish names for YouTube channels?', a: 'YouTube supports some Unicode characters in channel names.' },
      { q: 'Should I use a stylish name for branding?', a: 'A unique stylish name can help your channel stand out and be more memorable.' },
      { q: 'Is this generator free?', a: 'Yes, completely free with unlimited generations.' },
    ],
  },
  {
    slug: 'facebook-stylish-name',
    keyword: 'Facebook Stylish Name',
    title: 'Facebook Stylish Name Generator 2026 | Copy & Paste',
    metaDescription: 'Generate 1000+ Facebook stylish names. Create unique profile names with cool fonts and symbols.',
    h1: 'Best Facebook Stylish Names 2026',
    intro: 'Transform your Facebook profile with a stylish name that stands out. Our generator creates hundreds of unique Unicode font variations perfect for Facebook display names. From elegant script fonts to bold gaming styles, find the perfect name that expresses your personality. Easy copy and paste functionality makes updating your profile instant.',
    defaultInput: 'Facebook',
    steps: ['Enter your Facebook name', 'Choose a style category', 'Copy the stylish version', 'Update your Facebook profile name'],
    faqs: [
      { q: 'Does Facebook allow stylish names?', a: 'Facebook supports some Unicode characters in display names, though policies may vary.' },
      { q: 'Will my account get flagged?', a: 'Using standard Unicode characters is generally safe on Facebook.' },
      { q: 'Can I use symbols in Facebook names?', a: 'Some symbols work in Facebook names. Test your chosen style before committing.' },
    ],
  },
];

const GENERAL_PAGES: SEOPageData[] = [
  {
    slug: 'stylish-name-boy',
    keyword: 'Stylish Name Boy',
    title: 'Stylish Name for Boys 2026 | Cool & Attitude Names',
    metaDescription: 'Generate 1000+ stylish names for boys. Cool, attitude, and gaming names with fancy fonts and symbols.',
    h1: 'Best Stylish Names for Boys 2026',
    intro: 'Find the perfect stylish name for boys with our free generator. Create cool, attitude-filled names using bold Unicode fonts and powerful symbols. Ideal for gaming profiles, social media accounts, and online personas. Whether you want a tough warrior name or a sleek modern tag, our tool generates hundreds of masculine style variations.',
    defaultInput: 'King',
    steps: ['Enter a name or word', 'Browse cool and attitude styles', 'Copy your favorite name', 'Use it on any platform'],
    faqs: [
      { q: 'What makes a good stylish name for boys?', a: 'Bold fonts, strong symbols like swords and crowns, and powerful words create great boy names.' },
      { q: 'Can I use these for gaming?', a: 'Yes! These names work perfectly for gaming profiles on any platform.' },
      { q: 'Are attitude names popular?', a: 'Attitude and cool stylish names are among the most searched styles online.' },
    ],
  },
  {
    slug: 'stylish-name-girl',
    keyword: 'Stylish Name Girl',
    title: 'Stylish Name for Girls 2026 | Cute & Beautiful Names',
    metaDescription: 'Generate 1000+ stylish names for girls. Cute, beautiful, and aesthetic names with fancy fonts.',
    h1: 'Best Stylish Names for Girls 2026',
    intro: 'Discover beautiful stylish names for girls with our free generator. Create cute, aesthetic, and elegant names using lovely Unicode fonts, hearts, flowers, and decorative symbols. Perfect for Instagram bios, TikTok profiles, and gaming tags. Our tool generates hundreds of feminine and graceful name variations that will make your profile shine.',
    defaultInput: 'Queen',
    steps: ['Type your name or nickname', 'Choose cute or aesthetic styles', 'Copy your favorite design', 'Paste on your favorite platform'],
    faqs: [
      { q: 'What styles are best for girls?', a: 'Cute fonts with hearts, flowers, and star symbols are popular choices for girls.' },
      { q: 'Can I use these on Instagram?', a: 'Yes! All names work perfectly on Instagram, TikTok, and other platforms.' },
      { q: 'Are there aesthetic options?', a: 'Our aesthetic category features minimalist and beautiful font styles perfect for girls.' },
    ],
  },
  {
    slug: 'cool-stylish-name',
    keyword: 'Cool Stylish Name',
    title: 'Cool Stylish Name Generator 2026 | Copy & Paste',
    metaDescription: 'Generate 1000+ cool stylish names. Create badass, unique names with edgy fonts and symbols.',
    h1: 'Best Cool Stylish Names 2026',
    intro: 'Generate the coolest stylish names with our free tool. Create edgy, badass names using powerful Unicode fonts and dynamic symbols. Perfect for anyone who wants to stand out with a cool online identity. From dark gothic fonts to sleek modern styles, find hundreds of cool name variations that command attention everywhere you go.',
    defaultInput: 'Cool',
    steps: ['Enter your text', 'Select the cool style category', 'Copy the coolest variation', 'Paste it wherever you want'],
    faqs: [
      { q: 'What makes a name cool?', a: 'Bold fonts, unique symbols, and unexpected character combinations create the coolest names.' },
      { q: 'Can I combine styles?', a: 'Yes! Mix and match elements from different styles to create your unique look.' },
      { q: 'Do cool names work in games?', a: 'Absolutely! Cool stylish names are perfect for gaming profiles.' },
    ],
  },
  {
    slug: 'attitude-stylish-name',
    keyword: 'Attitude Stylish Name',
    title: 'Attitude Stylish Name Generator 2026 | Bold & Savage',
    metaDescription: 'Generate 1000+ attitude stylish names. Create bold, savage, and powerful names with fierce symbols.',
    h1: 'Best Attitude Stylish Names 2026',
    intro: 'Show your attitude with powerful stylish names from our free generator. Create bold, savage, and fearless names using aggressive Unicode fonts and fierce symbols. Perfect for gaming warriors, social media influencers, and anyone who wants their name to make a statement. Generate hundreds of attitude-packed name variations instantly.',
    defaultInput: 'Attitude',
    steps: ['Type your bold name', 'Browse attitude and fierce styles', 'Copy the most powerful version', 'Dominate any platform with it'],
    faqs: [
      { q: 'What are attitude names?', a: 'Names with bold fonts, fierce symbols like skulls, swords, and fire that convey power and confidence.' },
      { q: 'Are these good for gaming?', a: 'Attitude names are extremely popular in competitive gaming communities.' },
      { q: 'Can I customize the attitude level?', a: 'Browse different categories from subtle cool to extreme fierce styles.' },
    ],
  },
  {
    slug: 'beautiful-stylish-name',
    keyword: 'Beautiful Stylish Name',
    title: 'Beautiful Stylish Name Generator 2026 | Elegant Fonts',
    metaDescription: 'Generate 1000+ beautiful stylish names. Create elegant, graceful names with stunning fonts and decorations.',
    h1: 'Best Beautiful Stylish Names 2026',
    intro: 'Create breathtakingly beautiful stylish names with our free generator. Transform any text into elegant art using gorgeous Unicode script fonts, delicate symbols, and refined decorations. Ideal for personal branding, social media profiles, and creative projects. Our tool generates hundreds of beautiful name variations that turn heads.',
    defaultInput: 'Beautiful',
    steps: ['Enter your name or word', 'Choose elegant and fancy categories', 'Copy the most beautiful version', 'Add beauty to any profile or bio'],
    faqs: [
      { q: 'What fonts look the most beautiful?', a: 'Script and cursive Unicode fonts with decorative symbols create the most beautiful names.' },
      { q: 'Can I use these for wedding invites?', a: 'While designed for digital use, these styles add elegance to any text-based design.' },
      { q: 'Are there floral decoration options?', a: 'Yes! Our cute and aesthetic categories include flower and star decorations.' },
    ],
  },
  {
    slug: 'stylish-name-design',
    keyword: 'Stylish Name Design',
    title: 'Stylish Name Design Generator 2026 | Creative Fonts',
    metaDescription: 'Generate 1000+ stylish name designs. Create artistic, unique name designs with Unicode fonts and art.',
    h1: 'Best Stylish Name Designs 2026',
    intro: 'Design stunning stylish names with our creative generator. Transform ordinary text into works of art using diverse Unicode fonts, artistic symbols, and unique decorative patterns. Whether you need a minimalist design or an elaborate decorated name, our tool offers hundreds of creative options. Perfect for logos, branding, and profile customization.',
    defaultInput: 'Design',
    steps: ['Enter your text to design', 'Explore all style categories', 'Find the perfect design', 'Copy and use your creation'],
    faqs: [
      { q: 'Can I use these designs commercially?', a: 'Unicode characters are free to use. However, for commercial branding, consider consulting a designer too.' },
      { q: 'How many designs can I generate?', a: 'Our tool generates 100+ unique designs per input, with unlimited attempts.' },
      { q: 'Can I save my favorite designs?', a: 'Yes! Copied designs are saved in your recently used section for easy access.' },
    ],
  },
];

const LANGUAGE_PAGES: SEOPageData[] = [
  {
    slug: 'urdu-stylish-name-maker',
    keyword: 'Urdu Stylish Name Maker',
    title: 'Urdu Stylish Name Maker 2026 | اردو اسٹائلش نام',
    metaDescription: 'Generate 1000+ Urdu stylish names. Create beautiful names in Urdu fonts with fancy decorations.',
    h1: 'Best Urdu Stylish Name Maker 2026',
    intro: 'Create stunning Urdu stylish names with our free name maker. Generate beautiful Unicode text transformations that work perfectly with Urdu names and text. Our tool supports romanized Urdu input and creates hundreds of decorative variations with elegant symbols and fancy fonts. Perfect for social media, gaming, and WhatsApp profiles.',
    defaultInput: 'Pakistan',
    steps: ['Type your name in English/Romanized Urdu', 'Browse beautiful style categories', 'Copy your favorite stylish version', 'Paste it on any platform'],
    faqs: [
      { q: 'Does this work with Urdu names?', a: 'Yes! Enter your name in English letters and our tool creates stylish Unicode versions.' },
      { q: 'Can I use this for WhatsApp?', a: 'Absolutely! These stylish names work perfectly on WhatsApp, Facebook, and all platforms.' },
      { q: 'Is the Urdu name maker free?', a: 'Yes, completely free with unlimited name generation.' },
    ],
  },
  {
    slug: 'hindi-stylish-name',
    keyword: 'Hindi Stylish Name',
    title: 'Hindi Stylish Name Generator 2026 | हिंदी स्टाइलिश नाम',
    metaDescription: 'Generate 1000+ Hindi stylish names. Create fancy decorated names with cool Unicode fonts.',
    h1: 'Best Hindi Stylish Names 2026',
    intro: 'Generate amazing Hindi stylish names with our free tool. Transform any name into a decorative masterpiece using Unicode fonts and beautiful symbols. Perfect for Indian gamers, social media users, and content creators. Our generator creates hundreds of unique stylish variations that work on all platforms including Free Fire, PUBG, Instagram, and WhatsApp.',
    defaultInput: 'Hindi',
    steps: ['Enter your name in English', 'Select your preferred style', 'Copy the stylish version', 'Use it on any platform'],
    faqs: [
      { q: 'Can I use Hindi names in games?', a: 'Yes! Our stylish names work in Free Fire, PUBG, BGMI, and most other games.' },
      { q: 'Do these work on Indian social media?', a: 'All generated names work on WhatsApp, Instagram, Facebook, and Indian platforms.' },
      { q: 'Is there a character limit?', a: 'You can enter up to 50 characters. Most platforms accept our Unicode output.' },
    ],
  },
  {
    slug: 'arabic-stylish-name',
    keyword: 'Arabic Stylish Name',
    title: 'Arabic Stylish Name Generator 2026 | اسم أنيق',
    metaDescription: 'Generate 1000+ Arabic stylish names. Create beautiful decorated names with elegant fonts and symbols.',
    h1: 'Best Arabic Stylish Names 2026',
    intro: 'Create elegant Arabic stylish names with our free generator. Transform any text into beautifully decorated names using Unicode fonts and artistic symbols. Whether you want classic elegance or modern style, our tool generates hundreds of unique variations. Perfect for gaming, social media profiles, and personal branding across Arabic-speaking communities.',
    defaultInput: 'Arabic',
    steps: ['Enter your name in English letters', 'Browse elegant style options', 'Copy your preferred stylish name', 'Paste on any platform'],
    faqs: [
      { q: 'Does this work with Arabic names?', a: 'Enter romanized Arabic names and our tool creates beautiful stylish versions.' },
      { q: 'Can I use these on Arabic social media?', a: 'Yes! Unicode stylish names work on all platforms worldwide.' },
      { q: 'Are there Islamic-themed decorations?', a: 'Our symbol category includes elegant decorations suitable for all cultural contexts.' },
    ],
  },
];

const TREND_PAGES: SEOPageData[] = [
  {
    slug: 'happy-birthday-stylish-name',
    keyword: 'Happy Birthday Stylish Name',
    title: 'Happy Birthday Stylish Name Generator 2026 | 🎂',
    metaDescription: 'Generate stylish Happy Birthday messages with fancy fonts. Create beautiful birthday wishes to share.',
    h1: 'Best Happy Birthday Stylish Names 2026',
    intro: 'Make birthday wishes extra special with our stylish name generator. Create beautifully decorated "Happy Birthday" messages with elegant fonts and festive symbols. Perfect for WhatsApp messages, Instagram stories, and Facebook posts. Generate hundreds of unique birthday greeting styles that will make the birthday person feel truly special.',
    defaultInput: 'Happy Birthday',
    steps: ['Type the birthday person\'s name', 'Browse cute and fancy styles', 'Copy the decorated message', 'Send via WhatsApp or social media'],
    faqs: [
      { q: 'Can I add a name to Happy Birthday?', a: 'Yes! Type "Happy Birthday [Name]" to get personalized stylish greetings.' },
      { q: 'Do these work on WhatsApp?', a: 'Absolutely! All styles copy perfectly to WhatsApp, Messenger, and SMS.' },
      { q: 'Are there birthday-themed symbols?', a: 'Our cute and symbols categories include hearts, stars, and festive decorations.' },
    ],
  },
  {
    slug: 'rajput-stylish-name',
    keyword: 'Rajput Stylish Name',
    title: 'Rajput Stylish Name Generator 2026 | Royal Names',
    metaDescription: 'Generate 1000+ Rajput stylish names. Create royal, powerful names with crown symbols and bold fonts.',
    h1: 'Best Rajput Stylish Names 2026',
    intro: 'Create majestic Rajput stylish names with our free generator. Honor the royal Rajput heritage with powerful Unicode fonts, crown symbols, and warrior-themed decorations. Perfect for gaming profiles, social media accounts, and clan names. Our generator creates hundreds of regal and commanding name variations that reflect Rajput pride and valor.',
    defaultInput: 'Rajput',
    steps: ['Enter your Rajput name or title', 'Choose bold and royal styles', 'Copy the most powerful version', 'Display your Rajput pride everywhere'],
    faqs: [
      { q: 'Are there royal-themed decorations?', a: 'Yes! Our gaming and cool categories include crown, sword, and shield symbols.' },
      { q: 'Can I use these for clan names?', a: 'Absolutely! Create stylish Rajput clan and guild names for any game.' },
      { q: 'Do these work in Free Fire?', a: 'Yes! All our stylish names are compatible with Free Fire and PUBG.' },
    ],
  },
];

// Generate alphabet pages
function generateAlphabetPages(): SEOPageData[] {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return [...alphabet].map(letter => ({
    slug: `${letter.toLowerCase()}-stylish-name`,
    keyword: `${letter} Stylish Name`,
    title: `${letter} Stylish Name Generator 2026 | Names Starting with ${letter}`,
    metaDescription: `Generate 1000+ stylish names starting with ${letter}. Copy & paste fancy ${letter} names for gaming and social media.`,
    h1: `Best ${letter} Stylish Names 2026`,
    intro: `Find the perfect stylish name starting with "${letter}" using our free generator. Create hundreds of unique Unicode font variations for names beginning with the letter ${letter}. Whether it's for gaming, social media, or personal branding, our tool transforms any ${letter}-name into a stylish masterpiece with fancy fonts, cool symbols, and elegant decorations.`,
    defaultInput: letter.repeat(2) + 'ame',
    steps: [
      `Enter a name starting with ${letter}`,
      'Browse through style categories',
      'Click copy on your favorite',
      'Paste on any platform'
    ],
    faqs: [
      { q: `What are popular ${letter} names?`, a: `Our generator works with any name starting with ${letter}. Just type it in and get instant stylish versions.` },
      { q: 'How many styles will I get?', a: 'Each input generates 100+ unique stylish variations across multiple categories.' },
      { q: `Can I use ${letter} stylish names in games?`, a: 'Yes! All generated names work in Free Fire, PUBG, and other popular games.' },
    ],
  }));
}

export const ALL_SEO_PAGES: SEOPageData[] = [
  ...GAMING_PAGES,
  ...SOCIAL_PAGES,
  ...GENERAL_PAGES,
  ...LANGUAGE_PAGES,
  ...TREND_PAGES,
  ...generateAlphabetPages(),
];

export function getSEOPageBySlug(slug: string): SEOPageData | undefined {
  return ALL_SEO_PAGES.find(p => p.slug === slug);
}

export function getRelatedPages(currentSlug: string, count = 6): SEOPageData[] {
  return ALL_SEO_PAGES.filter(p => p.slug !== currentSlug).slice(0, count);
}
