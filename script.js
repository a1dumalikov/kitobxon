const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const books = KITOBLAR;
const bookById = (id) => books.find((b) => b.id === id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch (e) { return fallback; }
}
function store(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* joy yo'q */ }
}

/* Til */
let lang = 'uz';
try {
  const saved = localStorage.getItem('kitobxon-lang');
  if (saved === 'ru' || saved === 'en') lang = saved;
} catch (e) {}
const tx = (obj) => typeof obj === 'string' ? obj : (obj?.[lang] || obj?.uz || '');

const genreName = {
  roman: { uz: 'Roman', ru: 'Роман', en: 'Novel' },
  sarguzasht: { uz: 'Sarguzasht', ru: 'Приключения', en: 'Adventure' },
  ertak: { uz: 'Ertak', ru: 'Сказка', en: 'Fairy tale' },
  tarix: { uz: 'Tarix', ru: 'История', en: 'History' },
  'she\'riyat': { uz: 'She\'riyat', ru: 'Поэзия', en: 'Poetry' },
  drama: { uz: 'Drama', ru: 'Драма', en: 'Drama' },
  hikoya: { uz: 'Hikoya', ru: 'Рассказ', en: 'Story' },
  axloq: { uz: 'Axloq', ru: 'Нравственность', en: 'Morality' },
};
const genre = (g) => tx(genreName[g] || { uz: g, ru: g, en: g });

const UI = {
  uz: {
    navCatalog: 'Katalog', navWeekly: 'Hafta tanlovi', navHow: 'Qanday ishlaydi', navAbout: 'Biz haqimizda',
    enter: 'Kutubxonaga kirish', searchPlaceholder: 'Kitob nomi yoki muallifni yozing...', searchBtn: 'Qidirish',
    heroKicker: 'Har kuni 2000+ yangi o\'quvchi qo\'shiladi',
    heroTitle: 'Har bir sahifa — <em>yangi dunyo.</em>',
    heroLead: 'Minglab kitoblar bir joyda. Sevimli asaringizni toping, o\'qing va bilim donlarini to\'plang — istalgan vaqtda, istalgan joydan.',
    heroPlaceholder: 'Kitob yoki muallif nomini yozing...', find: 'Topish',
    statBooks: 'kitob', statReaders: 'o\'quvchi', statRating: 'baho',
    openBook: 'Kitobni ochish', dragHint: 'Chimchilab aylantiring yoki bosing',
    catTag: 'Kutubxona javoni', catTitle: 'O\'zingizga kitob toping',
    catLead: 'Uzbek, rus va ingliz adabiyotining tanlangan asarlari. Sahifani ochib, darhol o\'qishni boshlang.',
    fAll: 'Hammasi', fNovel: 'Roman', fAdv: 'Sarguzasht', fFairy: 'Ertak', fHist: 'Tarix',
    fPoetry: 'She\'riyat', fDrama: 'Drama', fSaved: 'Saqlanganlar',
    authorLabel: 'Muallif', allAuthors: 'Barcha mualliflar', sortLabel: 'Saralash',
    sortDefault: 'Nom bo\'yicha', sortRating: 'Eng yuqori baho', sortYear: 'Yangi chiqqanlar',
    empty: 'Hech narsa topilmadi. Boshqa so\'z bilan qidirib ko\'ring.',
    featureTag: 'Hafta tanlovi', featureFrontTag: 'HAFTA TANLOVI', featureFrontTitle: 'Yorug\'lik<br>sari yo\'l', featureTitle: 'Bu hafta nimani o\'qish kerak?',
    featureLead: 'Tahririyatimiz tanlagan asar — kichik detallarda katta ma\'no topish haqida. Har hafta yangi tanlov, har kuni yangi kashfiyot.',
    featureMeta1: '5 bob', featureMeta2: '3 tilda', featureMeta3: 'To\'liq matn', readStart: 'O\'qishni boshlash',
    stepTag: 'Oddiy va qulay', stepTitle: 'Üch qadamda o\'qishga tayyor',
    step1t: 'Qidiring', step1d: 'Nom, muallif yoki janr bo\'yicha kerakli kitobni toping.',
    step2t: 'Saqlang', step2d: 'Sevimlilaringizni yulduzcha bilan belgilab, keyin oson toping.',
    step3t: 'O\'qing', step3d: 'Kitobni ochib, qayerda to\'xtagansangiz, shu yerdan davom eting.',
    joinTag: 'Kitobxon jamiyati', joinTitle: 'Bilimga birga yo\'l olaylik',
    joinLead: 'Har oy yangi kitoblar, o\'quvchilar bilan uchrashuvlar va faqat a\'zolarga xos tavsiyalar.',
    joinPlaceholder: 'Elektron pochtangizni yozing', joinBtn: 'Qo\'shilish',
    joinOk: 'Rahmat! Tasdiqlash xabari yuborildi.', joinErr: 'To\'g\'ri elektron pochta manzilini kiriting.',
    footAbout: 'Kitoblar bilan dunyoni kashf eting. Har bir sahifa sizniki.',
    footLibrary: 'Kutubxona', footContact: 'Biz bilan', footNote: 'E\'tibor bering',
    footHours: 'Dushanba — juma<br>09:00 — 18:00<br>Onlayn kutubxona kechayu kunduz ochiq.',
    footRights: 'Barcha huquqlar himoyalangan.', footLove: 'Kitoblarga muhabbat bilan yaratildi.',
    prev: 'Oldingi bet', next: 'Keyingi bet', jumpLabel: 'Betga o\'tish', jumpBtn: 'Ochish',
    endNote: 'Kitob oxiriga yetdingiz. Boshidan qayta o\'qish uchun 1-betni tanlang.',
    resume: (n) => `Siz ${n}-betga yetgandingiz. Shu bet ochildi.`,
    authorFound: (a, n) => `Muallif: ${a} — ${n} ta kitob topildi.`,
    found: (n) => `${n} ta kitob topildi.`,
    savedFound: (n) => `Saqlanganlar: ${n} ta.`,
    saveLabel: 'Saqlash', unsaveLabel: 'Saqlanganlardan olib tashlash',
  },
  ru: {
    navCatalog: 'Каталог', navWeekly: 'Выбор недели', navHow: 'Как это работает', navAbout: 'О нас',
    enter: 'Войти в библиотеку', searchPlaceholder: 'Название книги или автора...', searchBtn: 'Найти',
    heroKicker: 'Каждый день 2000+ новых читателей',
    heroTitle: 'Каждая страница — <em>новый мир.</em>',
    heroLead: 'Тысячи книг в одном месте. Найдите любимое произведение, читайте и собирайте знания — в любое время и в любом месте.',
    heroPlaceholder: 'Название книги или автора...', find: 'Найти',
    statBooks: 'книг', statReaders: 'читателей', statRating: 'оценка',
    openBook: 'Открыть книгу', dragHint: 'Потяните, чтобы повернуть, или нажмите',
    catTag: 'Полка библиотеки', catTitle: 'Найдите свою книгу',
    catLead: 'Избранные произведения узбекской, русской и английской литературы. Откройте страницу и начните читать.',
    fAll: 'Все', fNovel: 'Роман', fAdv: 'Приключения', fFairy: 'Сказка', fHist: 'История',
    fPoetry: 'Поэзия', fDrama: 'Драма', fSaved: 'Избранное',
    authorLabel: 'Автор', allAuthors: 'Все авторы', sortLabel: 'Сортировка',
    sortDefault: 'По названию', sortRating: 'По рейтингу', sortYear: 'Сначала новые',
    empty: 'Ничего не найдено. Попробуйте другой запрос.',
    featureTag: 'Выбор недели', featureFrontTag: 'ВЫБОР НЕДЕЛИ', featureFrontTitle: 'К свету', featureTitle: 'Что почитать на этой неделе?',
    featureLead: 'Произведение, выбранное редакцией: большая мысль в маленьких деталях. Новый выбор каждую неделю.',
    featureMeta1: '5 глав', featureMeta2: '3 языка', featureMeta3: 'Полный текст', readStart: 'Начать читать',
    stepTag: 'Просто и удобно', stepTitle: 'Готовы читать за три шага',
    step1t: 'Найдите', step1d: 'Найдите книгу по названию, автору или жанру.',
    step2t: 'Сохраните', step2d: 'Отметьте любимые книги, чтобы легко их найти.',
    step3t: 'Читайте', step3d: 'Откройте книгу и продолжайте с того места, где остановились.',
    joinTag: 'Сообщество Kitobxon', joinTitle: 'Пойдём к знаниям вместе',
    joinLead: 'Новые книги каждый месяц, встречи с читателями и советы только для участников.',
    joinPlaceholder: 'Ваш адрес электронной почты', joinBtn: 'Присоединиться',
    joinOk: 'Спасибо! Письмо подтверждения отправлено.', joinErr: 'Введите правильный адрес электронной почты.',
    footAbout: 'Откройте мир с книгами. Каждая страница — ваша.',
    footLibrary: 'Библиотека', footContact: 'Контакты', footNote: 'Внимание',
    footHours: 'Понедельник — пятница<br>09:00 — 18:00<br>Онлайн-библиотека открыта круглосуточно.',
    footRights: 'Все права защищены.', footLove: 'Создано с любовью к книгам.',
    prev: 'Предыдущая', next: 'Следующая', jumpLabel: 'Перейти на страницу', jumpBtn: 'Открыть',
    endNote: 'Вы дочитали книгу до конца. Выберите страницу 1, чтобы начать заново.',
    resume: (n) => `Вы остановились на странице ${n}. Она открыта.`,
    authorFound: (a, n) => `Автор: ${a} — найдено книг: ${n}.`,
    found: (n) => `Найдено книг: ${n}.`,
    savedFound: (n) => `Избранных книг: ${n}.`,
    saveLabel: 'Сохранить', unsaveLabel: 'Убрать из избранного',
  },
  en: {
    navCatalog: 'Catalog', navWeekly: "Week's pick", navHow: 'How it works', navAbout: 'About us',
    enter: 'Enter the library', searchPlaceholder: 'Book title or author...', searchBtn: 'Search',
    heroKicker: '2000+ new readers every day',
    heroTitle: 'Every page is a <em>new world.</em>',
    heroLead: 'Thousands of books in one place. Find your favourite, read it and collect knowledge — anytime, anywhere.',
    heroPlaceholder: 'Book title or author...', find: 'Find',
    statBooks: 'books', statReaders: 'readers', statRating: 'rating',
    openBook: 'Open the book', dragHint: 'Drag to rotate or click',
    catTag: 'Library shelf', catTitle: 'Find your next book',
    catLead: 'Selected works of Uzbek, Russian and English literature. Open a page and start reading right away.',
    fAll: 'All', fNovel: 'Novel', fAdv: 'Adventure', fFairy: 'Fairy tale', fHist: 'History',
    fPoetry: 'Poetry', fDrama: 'Drama', fSaved: 'Saved',
    authorLabel: 'Author', allAuthors: 'All authors', sortLabel: 'Sort by',
    sortDefault: 'By title', sortRating: 'Highest rated', sortYear: 'Newest first',
    empty: 'Nothing found. Try another search.',
    featureTag: "Week's pick", featureFrontTag: "WEEK'S PICK", featureFrontTitle: 'Road to<br>the light', featureTitle: 'What to read this week?',
    featureLead: 'Our editors\' choice — a big idea in small details. A new pick every week.',
    featureMeta1: '5 chapters', featureMeta2: '3 languages', featureMeta3: 'Complete text', readStart: 'Start reading',
    stepTag: 'Simple and easy', stepTitle: 'Ready to read in three steps',
    step1t: 'Search', step1d: 'Find the book by title, author or genre.',
    step2t: 'Save', step2d: 'Bookmark your favourites to find them easily.',
    step3t: 'Read', step3d: 'Open the book and continue where you left off.',
    joinTag: 'Kitobxon community', joinTitle: 'Let us learn together',
    joinLead: 'New books every month, reader meetups and members-only recommendations.',
    joinPlaceholder: 'Your email address', joinBtn: 'Join',
    joinOk: 'Thank you! A confirmation email has been sent.', joinErr: 'Please enter a valid email address.',
    footAbout: 'Discover the world with books. Every page is yours.',
    footLibrary: 'Library', footContact: 'Contact', footNote: 'Opening hours',
    footHours: 'Monday — Friday<br>09:00 — 18:00<br>Online library is open 24/7.',
    footRights: 'All rights reserved.', footLove: 'Made with love for books.',
    prev: 'Previous', next: 'Next', jumpLabel: 'Go to page', jumpBtn: 'Open',
    endNote: 'You have finished the book. Choose page 1 to read it again.',
    resume: (n) => `You stopped at page ${n}. It is open now.`,
    authorFound: (a, n) => `Author: ${a} — ${n} books found.`,
    found: (n) => `${n} books found.`,
    savedFound: (n) => `${n} saved books.`,
    saveLabel: 'Save', unsaveLabel: 'Remove from saved',
  },
};
const L = () => UI[lang];

const I18N_MAP = [
  ['.nav a[href="#katalog"]', 'navCatalog'], ['.nav a[href="#tanlov"]', 'navWeekly'],
  ['.nav a[href="#qanday"]', 'navHow'], ['.nav a[href="#biz"]', 'navAbout'],
  ['.header__actions .btn', 'enter'], ['#header-q', 'searchPlaceholder', 'placeholder'],
  ['.header-search button', 'searchBtn'], ['.hero .kicker', 'heroKicker'],
  ['.hero__lead', 'heroLead'], ['#hero-q', 'heroPlaceholder', 'placeholder'],
  ['.hero-search button', 'find'],
  ['.hero__stats div span', 'statBooks', null, 0],
  ['.hero__stats div span', 'statReaders', null, 1],
  ['.hero__stats div span', 'statRating', null, 2],
  ['#flip-btn', 'openBook'], ['.stage__controls span', 'dragHint'],
  ['#katalog .section__tag', 'catTag'], ['#katalog .section__head h2', 'catTitle'],
  ['#katalog .section__head > p', 'catLead'],
  ['.filter[data-genre="hammasi"]', 'fAll'], ['.filter[data-genre="roman"]', 'fNovel'],
  ['.filter[data-genre="sarguzasht"]', 'fAdv'], ['.filter[data-genre="ertak"]', 'fFairy'],
  ['.filter[data-genre="tarix"]', 'fHist'], ['.filter[data-genre="she\'riyat"]', 'fPoetry'],
  ['.filter[data-genre="drama"]', 'fDrama'], ['.filter[data-genre="saqlangan"]', 'fSaved'],
  ['#empty-state', 'empty'], ['#tanlov .section__tag', 'featureTag'],
  ['.feature__book-front span', 'featureFrontTag'], ['.feature__book-front strong', 'featureFrontTitle', null, undefined, true],
  ['#tanlov .feature__text h2', 'featureTitle'],
  ['.feature__text > p', 'featureLead'], ['.feature__meta li', 'featureMeta1', null, 0],
  ['.feature__meta li', 'featureMeta2', null, 1], ['.feature__meta li', 'featureMeta3', null, 2],
  ['.feature__text .btn', 'readStart'], ['#qanday .section__tag', 'stepTag'],
  ['#qanday .section__head h2', 'stepTitle'],
  ['.step h3', 'step1t', null, 0], ['.step p', 'step1d', null, 0],
  ['.step h3', 'step2t', null, 1], ['.step p', 'step2d', null, 1],
  ['.step h3', 'step3t', null, 2], ['.step p', 'step3d', null, 2],
  ['#biz .section__tag', 'joinTag'], ['#biz h2', 'joinTitle'], ['#biz .join__inner > div > p:last-child', 'joinLead'],
  ['#email', 'joinPlaceholder', 'placeholder'], ['#join-form .btn', 'joinBtn'],
  ['.footer__grid > div > p', 'footAbout', null, 0],
  ['.footer__grid h3', 'footLibrary', null, 0],
  ['.footer__grid h3', 'footContact', null, 1],
  ['.footer__grid h3', 'footNote', null, 2],
  ['.footer__grid > div > p', 'footHours', null, 3, true],
  ['.footer__bottom p', 'footLove', null, 1],
  ['#prev-page', 'prev'], ['#next-page', 'next'],
  ['.reader__jump label', 'jumpLabel'], ['.reader__jump button', 'jumpBtn'],
];

function applyI18n() {
  document.documentElement.lang = lang;
  $('.hero h1').innerHTML = L().heroTitle;
  I18N_MAP.forEach(([selector, key, attr, index, html]) => {
    const value = L()[key];
    if (value == null) return;
    const nodes = $$(selector);
    const target = index === undefined ? nodes : [nodes[index]];
    target.filter(Boolean).forEach((el) => {
      if (attr) el.setAttribute(attr, value);
      else if (html) el.innerHTML = value;
      else el.textContent = value;
    });
  });
  $('.catalog-selects label.sort').firstChild.textContent = L().authorLabel + ' ';
  $$('.catalog-selects label.sort')[1].firstChild.textContent = L().sortLabel + ' ';
  const allOpt = $('#author-select option');
  if (allOpt) allOpt.textContent = L().allAuthors;
  $('#sort-select option[value="default"]').textContent = L().sortDefault;
  $('#sort-select option[value="rating"]').textContent = L().sortRating;
  $('#sort-select option[value="year"]').textContent = L().sortYear;
  $('.footer__bottom p').innerHTML = `© <span id=\"yil\">2026</span> Kitobxon. ${esc(L().footRights)}`;
  $$('.lang-switch button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
}

/* Mavzu */
const themeBtn = $('#theme-toggle');
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeBtn) {
    themeBtn.textContent = theme === 'dark' ? '☀' : '☾';
    themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Light rejimga o\'tish' : 'Dark rejimga o\'tish');
  }
  try { localStorage.setItem('kitobxon-theme', theme); } catch (e) { /* joy yo'q */ }
}
applyTheme(document.documentElement.getAttribute('data-theme') || 'light');
themeBtn?.addEventListener('click', () => {
  applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

/* Menyu */
const menuBtn = $('.menu-btn');
const nav = $('.nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
nav?.addEventListener('click', (e) => {
  if (e.target.closest('a')) { nav.classList.remove('is-open'); menuBtn?.setAttribute('aria-expanded', 'false'); }
});

/* Qidiruv */
const suggestions = $('#qidiruv-taklif');
function fillSuggestions() {
  suggestions.innerHTML = '';
  const values = [...books.map((b) => tx(b.title)), ...new Set(books.map((b) => tx(b.author)))];
  values.forEach((value) => {
    const option = document.createElement('option');
    option.value = value;
    suggestions.append(option);
  });
}
fillSuggestions();
const headerSearch = $('#header-search');
$('#search-toggle')?.addEventListener('click', () => {
  headerSearch.hidden = !headerSearch.hidden;
  if (!headerSearch.hidden) $('#header-q').focus();
});
function runSearch(value) {
  query = value.trim();
  activeGenre = 'hammasi';
  $('#author-select').value = '';
  activeAuthor = '';
  syncFilters();
  renderBooks();
  $('#katalog').scrollIntoView({ behavior: 'smooth' });
}
headerSearch?.addEventListener('submit', (e) => { e.preventDefault(); runSearch($('#header-q').value); });
$('#hero-search')?.addEventListener('submit', (e) => { e.preventDefault(); runSearch($('#hero-q').value); });

/* Til tugmalari */
$$('.lang-switch button').forEach((btn) => btn.addEventListener('click', () => {
  lang = btn.dataset.lang;
  try { localStorage.setItem('kitobxon-lang', lang); } catch (e) { /* joy yo'q */ }
  applyI18n();
  fillSuggestions();
  fillAuthors();
  renderBooks();
  if (!reader.hidden && currentBook) showPage();
}));

/* 3D kitob */
const scene = $('#book-scene');
const bookEl = $('#book');
const flipBtn = $('#flip-btn');
let dragging = false, startX = 0, angle = -24;
scene?.addEventListener('pointerdown', (e) => {
  dragging = true; startX = e.clientX;
  scene.setPointerCapture(e.pointerId);
  bookEl.classList.add('is-dragging');
});
scene?.addEventListener('pointermove', (e) => {
  if (!dragging) return;
  angle += (e.clientX - startX) * 0.45;
  startX = e.clientX;
  bookEl.style.setProperty('--drag-ry', angle + 'deg');
});
const stopDrag = () => { dragging = false; bookEl?.classList.remove('is-dragging'); };
scene?.addEventListener('pointerup', stopDrag);
scene?.addEventListener('pointercancel', stopDrag);
function setBookOpen(open) {
  bookEl.classList.toggle('is-open', open);
  flipBtn.setAttribute('aria-pressed', String(open));
  flipBtn.textContent = open ? (lang === 'ru' ? 'Закрыть книгу' : lang === 'en' ? 'Close the book' : 'Kitobni yopish')
                            : L().openBook;
}
flipBtn?.addEventListener('click', () => setBookOpen(!bookEl.classList.contains('is-open')));
if (location.hash === '#open-book') setBookOpen(true);

/* Katalog */
const grid = $('#books-grid');
let query = '';
let activeGenre = 'hammasi';
let activeAuthor = '';
let saved = load('kitobxon-saqlangan', []);
const syncFilters = () => $$('.filter').forEach((btn) => btn.classList.toggle('is-active', btn.dataset.genre === activeGenre));
const authorSelect = $('#author-select');
function fillAuthors() {
  const current = authorSelect.value;
  authorSelect.innerHTML = `<option value="">${esc(L().allAuthors)}</option>`;
  [...new Set(books.map((b) => b.author.uz))].sort((a, b) => a.localeCompare(b)).forEach((author) => {
    const option = document.createElement('option');
    option.value = author;
    option.textContent = tx(books.find((b) => b.author.uz === author).author);
    authorSelect.append(option);
  });
  authorSelect.value = current;
}
fillAuthors();

function searchable(b) {
  return [b.title, b.author].flatMap((v) => Object.values(v)).join(' ').toLocaleLowerCase();
}
function renderBooks() {
  const q = query.toLocaleLowerCase();
  const sort = $('#sort-select').value;
  let list = books.filter((b) => {
    const genreOk = activeGenre === 'hammasi' ||
      (activeGenre === 'saqlangan' ? saved.includes(b.id) : b.genre === activeGenre);
    const authorOk = !activeAuthor || b.author.uz === activeAuthor;
    return genreOk && authorOk && searchable(b).includes(q);
  });
  if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);
  if (sort === 'year') list = [...list].sort((a, b) => b.year - a.year);

  grid.innerHTML = list.map((b) => {
    const isSaved = saved.includes(b.id);
    return `
    <article class="book-card" data-id="${b.id}">
      <div class="cover">
        <img class="cover__img" src="${b.cover}" alt="${esc(tx(b.title))} — ${lang === 'ru' ? 'обложка' : lang === 'en' ? 'cover' : 'muqova'}">
        <span class="cover__shade"></span>
        <span class="cover__label">${esc(genre(b.genre).toLocaleUpperCase(lang === 'ru' ? 'ru' : lang === 'en' ? 'en' : 'uz'))}</span>
        <h3>${esc(tx(b.title))}</h3>
        <p>${esc(tx(b.author))}</p>
        <span class="cover__line"></span>
      </div>
      <div class="book-card__body">
        <p class="book-card__author">${lang === 'ru' ? 'Автор' : lang === 'en' ? 'Author' : 'Muallif'}: <button class="author-link" type="button" data-author="${esc(b.author.uz)}">${esc(tx(b.author))}</button></p>
        <p class="book-card__genre">${esc(genre(b.genre))} · ${b.year} · ${b.chapters.length}</p>
        <div class="book-card__foot">
          <span>★ ${b.rating.toFixed(1)}</span>
          <div>
            <button class="save-btn" type="button" aria-label="${isSaved ? L().unsaveLabel : L().saveLabel}" aria-pressed="${isSaved}">${isSaved ? '♥' : '♡'}</button>
            <button class="read-btn" type="button">${lang === 'ru' ? 'Читать' : lang === 'en' ? 'Read' : 'O\'qish'}</button>
          </div>
        </div>
      </div>
    </article>`;
  }).join('');

  const banner = $('#search-result');
  const authorHits = books.filter((b) => Object.values(b.author).some((v) => v.toLocaleLowerCase().includes(q)));
  if (q && authorHits.length && authorHits.length === list.length) {
    banner.textContent = L().authorFound(tx(authorHits[0].author), list.length);
    banner.hidden = false;
  } else if (q || activeAuthor || activeGenre !== 'hammasi') {
    banner.textContent = activeGenre === 'saqlangan' && !q ? L().savedFound(list.length) : L().found(list.length);
    banner.hidden = false;
  } else {
    banner.hidden = true;
  }
  $('#empty-state').hidden = list.length > 0;
}

$$('.filter').forEach((btn) => btn.addEventListener('click', () => {
  activeGenre = btn.dataset.genre; syncFilters(); renderBooks();
}));
authorSelect?.addEventListener('change', () => { activeAuthor = authorSelect.value; renderBooks(); });
$('#sort-select')?.addEventListener('change', renderBooks);

grid?.addEventListener('click', (e) => {
  const card = e.target.closest('.book-card');
  if (!card) return;
  const id = card.dataset.id;
  if (e.target.closest('.read-btn')) openBook(id);
  if (e.target.closest('.author-link')) {
    activeAuthor = e.target.closest('.author-link').dataset.author;
    authorSelect.value = activeAuthor;
    activeGenre = 'hammasi'; query = '';
    syncFilters(); renderBooks();
    $('#katalog').scrollIntoView({ behavior: 'smooth' });
  }
  if (e.target.closest('.save-btn')) {
    const btn = e.target.closest('.save-btn');
    saved = saved.includes(id) ? saved.filter((x) => x !== id) : [...saved, id];
    store('kitobxon-saqlangan', saved);
    const isSaved = saved.includes(id);
    btn.setAttribute('aria-pressed', String(isSaved));
    btn.textContent = isSaved ? '♥' : '♡';
    btn.setAttribute('aria-label', isSaved ? L().unsaveLabel : L().saveLabel);
    if (activeGenre === 'saqlangan') renderBooks();
  }
});
$$('[data-book]').forEach((btn) => btn.addEventListener('click', () => openBook(btn.dataset.book)));

/* O'quvchi */
const reader = $('#reader');
let currentBook = null;
let currentPage = 0;
let lastFocused = null;
let progress = load('kitobxon-progress', {});

function saveProgress() {
  if (!currentBook) return;
  progress[currentBook.id] = currentPage;
  store('kitobxon-progress', progress);
}
function showPage() {
  const total = currentBook.chapters.length;
  const chapter = currentBook.chapters[currentPage];
  const text = chapter.text[lang] || chapter.text.uz;
  $('#reader-page').textContent = `${currentPage + 1} / ${total}`;
  $('#reader-title').textContent = tx(currentBook.title);
  $('#reader-chapter').textContent = tx(chapter.title);
  $('#reader-author').textContent = tx(currentBook.author);
  $('#reader-cover').src = currentBook.cover;
  $('#reader-cover').alt = tx(currentBook.title);
  $('#reader-text').innerHTML = text.map((p) => `<p>${esc(p)}</p>`).join('');
  $('#reader-bar').style.width = ((currentPage + 1) / total * 100) + '%';
  $('#page-jump').max = total;
  $('#page-jump').value = currentPage + 1;
  $('#prev-page').disabled = currentPage === 0;
  $('#next-page').disabled = currentPage === total - 1;
  const note = $('#reader-resume');
  if (currentPage === total - 1) {
    note.textContent = L().endNote;
    note.hidden = false;
  } else {
    note.hidden = true;
  }
  saveProgress();
}
function openBook(id) {
  const b = bookById(id);
  if (!b) return;
  currentBook = b;
  lastFocused = document.activeElement;
  const savedPage = progress[b.id] || 0;
  currentPage = Math.min(savedPage, b.chapters.length - 1);
  showPage();
  if (savedPage > 0) {
    const note = $('#reader-resume');
    note.textContent = L().resume(savedPage + 1);
    note.hidden = false;
  }
  reader.hidden = false;
  document.body.style.overflow = 'hidden';
  $('.reader__close').focus();
}
function closeReader() {
  reader.hidden = true;
  document.body.style.overflow = '';
  currentBook = null;
  lastFocused?.focus();
}
$$('[data-close]', reader).forEach((el) => el.addEventListener('click', closeReader));
$('#prev-page')?.addEventListener('click', () => { if (currentPage > 0) { currentPage--; showPage(); } });
$('#next-page')?.addEventListener('click', () => { if (currentPage < currentBook.chapters.length - 1) { currentPage++; showPage(); } });
$('#reader-jump')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = Number($('#page-jump').value);
  if (!Number.isFinite(value)) return;
  currentPage = Math.min(Math.max(Math.round(value) - 1, 0), currentBook.chapters.length - 1);
  showPage();
});

/* A'zolik */
$('#join-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = $('#email');
  const status = $('#join-status');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
    status.textContent = L().joinErr;
    return;
  }
  status.textContent = L().joinOk;
  input.value = '';
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (!reader.hidden) closeReader();
  if (nav?.classList.contains('is-open')) { nav.classList.remove('is-open'); menuBtn?.setAttribute('aria-expanded', 'false'); }
  if (headerSearch && !headerSearch.hidden) headerSearch.hidden = true;
});

applyI18n();
$('#yil').textContent = new Date().getFullYear();
renderBooks();
