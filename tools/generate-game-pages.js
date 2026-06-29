const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const SITE_URL = 'https://berkeerd.github.io';
const TODAY = new Date().toISOString().slice(0, 10);

const LINK_DEFS = [
  { key: 'googlePlay', label: 'Google Play' },
  { key: 'steam', label: 'Steam' },
  { key: 'itch', label: 'Itch.io' },
  { key: 'webGL', label: 'Play in Browser' },
  { key: 'github', label: 'Source' },
];

function readProjectDetails() {
  const arcadeJs = fs.readFileSync(path.join(ROOT, 'js', 'arcade.js'), 'utf8');
  const end = arcadeJs.indexOf('const LINK_DEFS');
  if (end === -1) throw new Error('Could not find projectDetails boundary in js/arcade.js');
  return vm.runInNewContext(`${arcadeJs.slice(0, end)}\nprojectDetails;`, {}, {
    filename: 'arcade.js',
  });
}

function slugify(value) {
  return value
    .replace(/[ğĞ]/g, 'g')
    .replace(/[üÜ]/g, 'u')
    .replace(/[şŞ]/g, 's')
    .replace(/[ıİ]/g, 'i')
    .replace(/[öÖ]/g, 'o')
    .replace(/[çÇ]/g, 'c')
    .replace(/['’]/g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function cleanOutput(value) {
  return value.replace(/[ \t]+$/gm, '').replace(/\n{3,}/g, '\n\n');
}

function stripHtml(value) {
  return String(value ?? '')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/p>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function firstSentence(value) {
  const text = stripHtml(value);
  const match = text.match(/^(.+?[.!?])(?:\s|$)/);
  const sentence = match ? match[1] : text;
  if (sentence.length <= 210) return sentence;
  return `${sentence.slice(0, 207).replace(/\s+\S*$/, '')}.`;
}

function isExternal(url) {
  return /^https?:\/\//i.test(url);
}

function gamePageAsset(url) {
  if (!url || url === '#') return '';
  return isExternal(url) ? url : `../${url}`;
}

function absoluteUrl(url) {
  if (!url || url === '#') return '';
  if (isExternal(url)) return url;
  return `${SITE_URL}/${url.replace(/^\/+/, '')}`;
}

function pageUrl(slug) {
  return `${SITE_URL}/games/${slug}.html`;
}

function statusLabel(game) {
  if (game.comingSoon) return 'Coming soon';
  if (game.inDevelopment) return 'In development';
  if (game.unpublished) return 'Unpublished';
  if (game.legacy) return 'Legacy release';
  return 'Released';
}

function platformLinks(game) {
  return LINK_DEFS
    .filter(({ key }) => game[key] && game[key] !== '#')
    .map(({ key, label }) => ({ key, label, url: game[key] }));
}

function platformNames(game) {
  const names = platformLinks(game).map((link) => link.label);
  if (game.mobile && !names.includes('Google Play')) names.push('Mobile');
  if (!names.length && game.unpublished) names.push('Unpublished prototype');
  return names;
}

function deriveTags(game) {
  const tags = new Set();
  const text = `${game.name} ${stripHtml(game.description)}`.toLowerCase();

  platformNames(game).forEach((name) => tags.add(name));
  if (game.comingSoon) tags.add('Coming Soon');
  if (game.inDevelopment) tags.add('In Development');
  if (game.unpublished) tags.add('Unpublished');
  if (game.legacy) tags.add('Legacy');
  if (game.jam) tags.add('Game Jam');
  if (game.postJam) tags.add('Post-Jam');
  if (game.prototype) tags.add('Prototype');
  if (game.remaster) tags.add('Remix');
  if (game.turkish) tags.add('Turkish');

  [
    ['puzzle', 'Puzzle'],
    ['racing', 'Racing'],
    ['racer', 'Racing'],
    ['race', 'Racing'],
    ['runner', 'Runner'],
    ['trivia', 'Trivia'],
    ['quiz', 'Trivia'],
    ['roguelite', 'Action Roguelite'],
    ['spell', 'Magic'],
    ['mage', 'Magic'],
    ['multiplayer', 'Multiplayer'],
    ['websocket', 'Multiplayer'],
    ['arcade', 'Arcade'],
    ['music', 'Music'],
    ['instrument', 'Music'],
    ['simulator', 'Simulation'],
    ['simulation', 'Simulation'],
  ].forEach(([needle, tag]) => {
    if (text.includes(needle)) tags.add(tag);
  });

  return Array.from(tags);
}

function similarGames(current, games) {
  const currentTags = new Set(current.tags);
  const scored = games
    .filter((game) => game.slug !== current.slug)
    .map((game) => {
      const shared = game.tags.filter((tag) => currentTags.has(tag));
      return { game, score: shared.length };
    })
    .sort((a, b) => b.score - a.score || a.game.name.localeCompare(b.game.name));

  const matches = scored.filter((item) => item.score > 0).slice(0, 3).map((item) => item.game);
  if (matches.length >= 3) return matches;
  const fallback = games.filter((game) => game.slug !== current.slug && !matches.includes(game));
  return matches.concat(fallback.slice(0, 3 - matches.length));
}

function trailerEmbed(game) {
  if (!game.youtube || game.youtube === '#') {
    return `
      <div class="media-frame">
        <img src="${escapeHtml(gamePageAsset(game.image))}" alt="${escapeHtml(game.name)} artwork">
      </div>
      <p>Trailer is not available yet. The artwork above is provided for press and store reference.</p>`;
  }

  const base = game.youtube
    .replace('www.youtube.com/embed/', 'www.youtube-nocookie.com/embed/')
    .replace('youtube.com/embed/', 'www.youtube-nocookie.com/embed/');
  const sep = base.includes('?') ? '&' : '?';
  const src = `${base}${sep}rel=0&playsinline=1&modestbranding=1`;
  return `
    <div class="media-frame">
      <iframe src="${escapeHtml(src)}" title="${escapeHtml(game.name)} trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>`;
}

function jsonLd(game) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: game.name,
    description: game.hook,
    image: game.images.map(absoluteUrl),
    url: pageUrl(game.slug),
    author: { '@type': 'Organization', name: 'Beruke Games' },
    publisher: { '@type': 'Organization', name: 'Beruke Games' },
    applicationCategory: 'Game',
    gamePlatform: platformNames(game),
  };
  return JSON.stringify(data, null, 2).replace(/</g, '\\u003c');
}

function renderPlatformLinks(game) {
  const links = platformLinks(game);
  if (!links.length) return '<p>No public platform link is available yet.</p>';
  return `
    <ul class="platform-list">
      ${links.map((link) => `<li><a class="platform-link" href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a></li>`).join('\n      ')}
    </ul>`;
}

function renderScreenshots(game) {
  return `
    <div class="screenshot-grid">
      ${game.images.map((img, index) => `<img src="${escapeHtml(gamePageAsset(img))}" alt="${escapeHtml(game.name)} screenshot ${index + 1}">`).join('\n      ')}
    </div>`;
}

function renderSimilar(current, games) {
  return `
    <div class="similar-grid">
      ${similarGames(current, games).map((game) => `
        <article class="similar-game-card">
          <h3><a href="${escapeHtml(game.slug)}.html">${escapeHtml(game.name)}</a></h3>
          <p>${escapeHtml(game.hook)}</p>
        </article>`).join('\n      ')}
    </div>`;
}

function renderGamePage(game, games) {
  const platforms = platformNames(game);
  const pressPlatforms = platforms.length ? platforms.join(', ') : 'Not announced';
  const tags = game.tags.slice(0, 7);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${escapeHtml(game.name)} - Beruke Games</title>
  <meta name="description" content="${escapeHtml(game.hook)}">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="canonical" href="${pageUrl(game.slug)}">
  <meta property="og:title" content="${escapeHtml(game.name)} - Beruke Games">
  <meta property="og:description" content="${escapeHtml(game.hook)}">
  <meta property="og:image" content="${escapeHtml(absoluteUrl(game.image))}">
  <meta property="og:url" content="${pageUrl(game.slug)}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="stylesheet" href="../css/arcade-styles.css">
  <link rel="stylesheet" href="../css/game-pages.css">
  <link rel="icon" href="https://imgur.com/47wFN7x.png" type="image/png">
  <script type="application/ld+json">${jsonLd(game)}</script>
</head>
<body class="game-page-body">
  <nav class="game-page-nav" aria-label="Primary navigation">
    <a class="brand" href="../index.html">Beruke Games</a>
    <div class="nav-links">
      <a href="../index.html">Home</a>
      <a href="../arcade-games.html">Arcade</a>
      <a href="../contact.html">Press Contact</a>
    </div>
  </nav>

  <main class="game-detail-page">
    <a class="back-link" href="../arcade-games.html">Back to Arcade</a>

    <section class="game-page-hero">
      <div>
        <h1>${escapeHtml(game.name)}</h1>
        <p class="game-hook">${escapeHtml(game.hook)}</p>
        <div class="tag-list">
          ${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('\n          ')}
        </div>
      </div>
      <div class="hero-art">
        <img src="${escapeHtml(gamePageAsset(game.image))}" alt="${escapeHtml(game.name)} key art">
      </div>
    </section>

    <section class="game-section" aria-labelledby="about-heading">
      <h2 id="about-heading">About The Game</h2>
      <p>${escapeHtml(game.descriptionText)}</p>
    </section>

    <section class="game-section" aria-labelledby="trailer-heading">
      <h2 id="trailer-heading">Trailer</h2>
      ${trailerEmbed(game)}
    </section>

    <section class="game-section" aria-labelledby="screenshots-heading">
      <h2 id="screenshots-heading">Screenshots</h2>
      ${renderScreenshots(game)}
    </section>

    <section class="game-section" aria-labelledby="platforms-heading">
      <h2 id="platforms-heading">Platform Links</h2>
      ${renderPlatformLinks(game)}
    </section>

    <section class="game-section" aria-labelledby="press-heading">
      <h2 id="press-heading">Press Information</h2>
      <div class="press-panel">
        <ul class="press-list">
          <li><strong>Developer / Publisher</strong> Beruke Games</li>
          <li><strong>Status</strong> ${escapeHtml(statusLabel(game))}</li>
          <li><strong>Platforms</strong> ${escapeHtml(pressPlatforms)}</li>
          <li><strong>Press contact</strong> <a class="platform-link" href="../contact.html">Contact Beruke Games</a></li>
        </ul>
      </div>
    </section>

    <section class="game-section" aria-labelledby="similar-heading">
      <h2 id="similar-heading">Similar Games</h2>
      ${renderSimilar(game, games)}
    </section>
  </main>

  <footer class="game-page-footer">
    <p>&copy; 2023 Beruke Games. All rights reserved.</p>
  </footer>
</body>
</html>
`;
}

function renderArcadeIndex(games) {
  return `<!-- GAME_INDEX_START -->
    <nav class="seo-game-links" aria-label="Static game pages">
      <h2>Static Game Pages</h2>
      <ul>
        ${games.map((game) => `<li><a href="games/${escapeHtml(game.slug)}.html">${escapeHtml(game.name)}</a> - ${escapeHtml(game.hook)}</li>`).join('\n        ')}
      </ul>
    </nav>
    <!-- GAME_INDEX_END -->`;
}

function renderGamesIndex(games) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Beruke Games - Game Pages</title>
  <meta name="description" content="Indexable Beruke Games pages with hooks, trailers, screenshots, platform links, press information, and similar games.">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="canonical" href="${SITE_URL}/games/">
  <link rel="stylesheet" href="../css/arcade-styles.css">
  <link rel="stylesheet" href="../css/game-pages.css">
  <link rel="icon" href="https://imgur.com/47wFN7x.png" type="image/png">
</head>
<body class="game-page-body">
  <nav class="game-page-nav" aria-label="Primary navigation">
    <a class="brand" href="../index.html">Beruke Games</a>
    <div class="nav-links">
      <a href="../index.html">Home</a>
      <a href="../arcade-games.html">Arcade</a>
      <a href="../contact.html">Press Contact</a>
    </div>
  </nav>
  <main class="seo-game-index">
    <h1>Beruke Games - Game Pages</h1>
    <p>All static game pages are listed here for players, press, and search engines.</p>
    <div class="seo-game-grid">
      ${games.map((game) => `
      <article class="seo-game-card">
        <a href="${escapeHtml(game.slug)}.html"><img src="${escapeHtml(gamePageAsset(game.image))}" alt="${escapeHtml(game.name)}"></a>
        <div class="seo-game-card-content">
          <h2><a href="${escapeHtml(game.slug)}.html">${escapeHtml(game.name)}</a></h2>
          <p>${escapeHtml(game.hook)}</p>
        </div>
      </article>`).join('\n      ')}
    </div>
  </main>
</body>
</html>
`;
}

function renderSitemap(games) {
  const urls = [
    `${SITE_URL}/`,
    `${SITE_URL}/arcade-games.html`,
    `${SITE_URL}/games/`,
    ...games.map((game) => pageUrl(game.slug)),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url>
    <loc>${url}</loc>
    <lastmod>${TODAY}</lastmod>
  </url>`).join('\n')}
</urlset>
`;
}

function main() {
  const rawProjects = readProjectDetails();
  const games = Object.entries(rawProjects).map(([key, game]) => {
    const slug = slugify(game.name || key);
    const images = [game.image, ...(game.additionalImages || [])].filter(Boolean);
    const descriptionText = stripHtml(game.description);
    return {
      key,
      slug,
      ...game,
      hook: firstSentence(game.description),
      descriptionText,
      images: images.length ? images : [game.image],
    };
  });

  games.forEach((game) => {
    game.tags = deriveTags(game);
  });

  const slugs = new Set();
  games.forEach((game) => {
    if (slugs.has(game.slug)) throw new Error(`Duplicate game page slug: ${game.slug}`);
    slugs.add(game.slug);
  });

  const gamesDir = path.join(ROOT, 'games');
  fs.mkdirSync(gamesDir, { recursive: true });
  fs.readdirSync(gamesDir)
    .filter((file) => file.endsWith('.html'))
    .forEach((file) => fs.unlinkSync(path.join(gamesDir, file)));

  games.forEach((game) => {
    fs.writeFileSync(path.join(gamesDir, `${game.slug}.html`), cleanOutput(renderGamePage(game, games)), 'utf8');
  });

  fs.writeFileSync(path.join(gamesDir, 'index.html'), cleanOutput(renderGamesIndex(games)), 'utf8');

  const arcadePath = path.join(ROOT, 'arcade-games.html');
  const arcadeHtml = fs.readFileSync(arcadePath, 'utf8');
  const arcadeIndexPattern = /<!-- GAME_INDEX_START -->[\s\S]*?<!-- GAME_INDEX_END -->/;
  if (!arcadeIndexPattern.test(arcadeHtml)) {
    throw new Error('Could not update arcade game index markers');
  }
  const updatedArcade = arcadeHtml.replace(arcadeIndexPattern, renderArcadeIndex(games));
  fs.writeFileSync(arcadePath, cleanOutput(updatedArcade), 'utf8');

  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), cleanOutput(renderSitemap(games)), 'utf8');
  fs.writeFileSync(path.join(ROOT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`, 'utf8');

  console.log(`Generated ${games.length} game pages.`);
}

main();
