// Unicode font maps
const NORMAL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const FONT_MAPS: Record<string, string> = {
  bold: '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗',
  italic: '𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧0123456789',
  boldItalic: '𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛0123456789',
  script: '𝒜𝒝𝒞𝒟𝒠𝒡𝒢𝒣𝒤𝒥𝒦𝒧𝒨𝒩𝒪𝒫𝒬𝒭𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹𝒺𝒻𝒼𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝓄𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏0123456789',
  boldScript: '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃0123456789',
  fraktur: '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷0123456789',
  boldFraktur: '𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟0123456789',
  doubleStruck: '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡',
  monospace: '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿',
  sansSerif: '𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫',
  sansSerifBold: '𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵',
  sansSerifItalic: '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻0123456789',
  circled: 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ0①②③④⑤⑥⑦⑧⑨',
  negCircled: '🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩0123456789',
  squared: '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉0123456789',
  fullwidth: 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ０１２３４５６７８９',
  smallCaps: 'ABCDEFGHIJKLMNOPQRSTUVWXYZᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ0123456789',
  superscript: 'ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻ⁰¹²³⁴⁵⁶⁷⁸⁹',
  inverted: 'ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎzɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz0123456789',
  parenthesized: '⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵0123456789',
};

function applyFont(text: string, fontKey: string): string {
  const map = FONT_MAPS[fontKey];
  if (!map) return text;
  const chars = [...map];
  const normalChars = [...NORMAL];
  return [...text].map(ch => {
    const idx = normalChars.indexOf(ch);
    if (idx !== -1 && idx < chars.length) return chars[idx];
    return ch;
  }).join('');
}

// Symbol decorator templates
const DECORATORS: Array<(t: string) => string> = [
  t => `꧁༒☬${t}☬༒꧂`,
  t => `★彡[${t}]彡★`,
  t => `𓂀 ${t} 𓂀`,
  t => `꧁ ${t} ꧂`,
  t => `╰‿╯${t}╰‿╯`,
  t => `▄︻デ${t}══━一`,
  t => `◥꧁${t}꧂◤`,
  t => `꧁༺${t}༻꧂`,
  t => `☆꧁✬${t}✬꧂☆`,
  t => `『${t}』`,
  t => `【${t}】`,
  t => `〖${t}〗`,
  t => `⟦${t}⟧`,
  t => `❖ ${t} ❖`,
  t => `✦ ${t} ✦`,
  t => `◈ ${t} ◈`,
  t => `☠ ${t} ☠`,
  t => `⚔ ${t} ⚔`,
  t => `♛ ${t} ♛`,
  t => `♕ ${t} ♕`,
  t => `✿ ${t} ✿`,
  t => `❀ ${t} ❀`,
  t => `♡ ${t} ♡`,
  t => `❤ ${t} ❤`,
  t => `💀 ${t} 💀`,
  t => `🔥 ${t} 🔥`,
  t => `⚡ ${t} ⚡`,
  t => `✧ ${t} ✧`,
  t => `ꕥ ${t} ꕥ`,
  t => `➤ ${t} ➤`,
  t => `※ ${t} ※`,
  t => `▸ ${t} ◂`,
  t => `◆ ${t} ◆`,
  t => `✪ ${t} ✪`,
  t => `•°¯\`•.¸¸.•´¯°•${t}•°¯\`•.¸¸.•´¯°•`,
  t => `░▒▓█ ${t} █▓▒░`,
  t => `┊ ┊ ┊ ${t} ┊ ┊ ┊`,
  t => `▬▬ι═══════ﺤ ${t}`,
  t => `═══════════╗ ${t} ╔═══════════`,
  t => `「 ${t} 」`,
];

export interface StyledName {
  text: string;
  category: string;
  id: string;
}

export type StyleCategory = 'best' | 'gaming' | 'cool' | 'cute' | 'aesthetic' | 'symbols' | 'fancy' | 'small';

const CATEGORY_CONFIG: Record<StyleCategory, { fonts: string[]; decoratorRange: [number, number] }> = {
  best: { fonts: ['boldScript', 'doubleStruck', 'bold', 'italic', 'fraktur'], decoratorRange: [0, 10] },
  gaming: { fonts: ['bold', 'sansSerifBold', 'boldFraktur', 'monospace', 'fullwidth'], decoratorRange: [0, 15] },
  cool: { fonts: ['boldScript', 'fraktur', 'sansSerifBold', 'boldItalic'], decoratorRange: [5, 20] },
  cute: { fonts: ['script', 'circled', 'parenthesized', 'italic'], decoratorRange: [20, 30] },
  aesthetic: { fonts: ['doubleStruck', 'sansSerifItalic', 'monospace', 'script'], decoratorRange: [15, 25] },
  symbols: { fonts: ['bold', 'negCircled', 'squared', 'circled'], decoratorRange: [25, 40] },
  fancy: { fonts: ['boldScript', 'script', 'boldItalic', 'fraktur', 'boldFraktur'], decoratorRange: [0, 20] },
  small: { fonts: ['smallCaps', 'superscript', 'inverted'], decoratorRange: [30, 40] },
};

export function generateStyles(text: string, category?: StyleCategory): StyledName[] {
  if (!text.trim()) return [];
  const results: StyledName[] = [];
  const seen = new Set<string>();

  const addResult = (styled: string, cat: string) => {
    if (!seen.has(styled)) {
      seen.add(styled);
      results.push({ text: styled, category: cat, id: `${cat}-${results.length}` });
    }
  };

  if (category) {
    const config = CATEGORY_CONFIG[category];
    // Plain font variants
    for (const font of config.fonts) {
      addResult(applyFont(text, font), category);
    }
    // Font + decorator combos
    const [start, end] = config.decoratorRange;
    for (const font of config.fonts) {
      const styled = applyFont(text, font);
      for (let i = start; i < Math.min(end, DECORATORS.length); i++) {
        addResult(DECORATORS[i](styled), category);
      }
    }
    // Plain decorators
    for (let i = start; i < Math.min(end, DECORATORS.length); i++) {
      addResult(DECORATORS[i](text), category);
    }
  } else {
    // All categories — generate many more combos
    const categories = Object.keys(CATEGORY_CONFIG) as StyleCategory[];
    for (const cat of categories) {
      const config = CATEGORY_CONFIG[cat];
      for (const font of config.fonts) {
        const styled = applyFont(text, font);
        addResult(styled, cat);
        // Apply ALL decorators to each font
        for (let i = 0; i < DECORATORS.length; i++) {
          addResult(DECORATORS[i](styled), cat);
        }
      }
      // Plain text with all decorators
      for (let i = 0; i < DECORATORS.length; i++) {
        addResult(DECORATORS[i](text), cat);
      }
    }

    // Cross-font decorator combos for even more variety
    const allFonts = Object.keys(FONT_MAPS);
    for (const font of allFonts) {
      const styled = applyFont(text, font);
      addResult(styled, 'best');
      for (let i = 0; i < DECORATORS.length; i++) {
        addResult(DECORATORS[i](styled), 'fancy');
      }
    }
  }

  return results;
}

export function getAllCategories(): { key: StyleCategory; label: string; icon: string }[] {
  return [
    { key: 'best', label: 'Best', icon: '⭐' },
    { key: 'gaming', label: 'Gaming', icon: '🎮' },
    { key: 'cool', label: 'Cool', icon: '😎' },
    { key: 'cute', label: 'Cute', icon: '💖' },
    { key: 'aesthetic', label: 'Aesthetic', icon: '✨' },
    { key: 'symbols', label: 'Symbols', icon: '⚡' },
    { key: 'fancy', label: 'Fancy', icon: '🎭' },
    { key: 'small', label: 'Small', icon: '🔤' },
  ];
}
