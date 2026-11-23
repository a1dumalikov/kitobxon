const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

/* Menyu */
const menuBtn = $('.menu-btn');
const nav = $('.nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Menyuni yopish' : 'Menyuni ochish');
});
nav?.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    nav.classList.remove('is-open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  }
});

/* Qidirish */
const searchToggle = $('#search-toggle');
const headerSearch = $('#header-search');
searchToggle?.addEventListener('click', () => {
  headerSearch.hidden = !headerSearch.hidden;
  if (!headerSearch.hidden) $('#header-q').focus();
});
headerSearch?.addEventListener('submit', (e) => {
  e.preventDefault();
  query = $('#header-q').value.trim();
  activeGenre = 'hammasi';
  syncFilters();
  renderBooks();
  $('#katalog').scrollIntoView({ behavior: 'smooth' });
});
$('#hero-search')?.addEventListener('submit', (e) => {
  e.preventDefault();
  query = $('#hero-q').value.trim();
  activeGenre = 'hammasi';
  syncFilters();
  renderBooks();
  $('#katalog').scrollIntoView({ behavior: 'smooth' });
});

/* 3D kitob: aylantirish va ochish */
const scene = $('#book-scene');
const book = $('#book');
const flipBtn = $('#flip-btn');
let dragging = false;
let startX = 0;
let angle = -24;

scene?.addEventListener('pointerdown', (e) => {
  dragging = true;
  startX = e.clientX;
  scene.setPointerCapture(e.pointerId);
  book.classList.add('is-dragging');
});
scene?.addEventListener('pointermove', (e) => {
  if (!dragging) return;
  angle += (e.clientX - startX) * 0.45;
  startX = e.clientX;
  book.style.setProperty('--drag-ry', angle + 'deg');
});
const stopDrag = () => { dragging = false; book?.classList.remove('is-dragging'); };
scene?.addEventListener('pointerup', stopDrag);
scene?.addEventListener('pointercancel', stopDrag);

function setBookOpen(open) {
  book.classList.toggle('is-open', open);
  flipBtn.setAttribute('aria-pressed', String(open));
  flipBtn.textContent = open ? 'Kitobni yopish' : 'Kitobni ochish';
}
flipBtn?.addEventListener('click', () => setBookOpen(!book.classList.contains('is-open')));
if (location.hash === '#open-book') setBookOpen(true);

/* Katalog */
const cards = $$('.book-card');
let activeGenre = 'hammasi';
let query = '';
let saved = [];
try { saved = JSON.parse(localStorage.getItem('kitobxon-saqlangan') || '[]'); } catch (e) { saved = []; }

const syncFilters = () => {
  $$('.filter').forEach((btn) => btn.classList.toggle('is-active', btn.dataset.genre === activeGenre));
};

function renderBooks() {
  const sort = $('#sort-select').value;
  const q = query.toLocaleLowerCase('uz');
  const visible = cards.filter((card) => {
    const genreOk = activeGenre === 'hammasi' ||
      (activeGenre === 'saqlangan' ? saved.includes(card.dataset.title) : card.dataset.genre === activeGenre);
    const text = (card.dataset.title + ' ' + card.dataset.author).toLocaleLowerCase('uz');
    return genreOk && text.includes(q);
  });

  if (sort === 'rating') visible.sort((a, b) => Number(b.dataset.rating) - Number(a.dataset.rating));
  if (sort === 'year') visible.sort((a, b) => Number(b.dataset.year) - Number(a.dataset.year));

  cards.forEach((card) => { card.hidden = true; });
  visible.forEach((card) => { card.hidden = false; $('#books-grid').append(card); });
  $('#empty-state').hidden = visible.length > 0;
}

$$('.filter').forEach((btn) => btn.addEventListener('click', () => {
  activeGenre = btn.dataset.genre;
  syncFilters();
  renderBooks();
}));
$('#sort-select')?.addEventListener('change', renderBooks);

cards.forEach((card) => {
  const btn = $('.save-btn', card);
  const setSaved = (isSaved) => {
    btn.setAttribute('aria-pressed', String(isSaved));
    btn.textContent = isSaved ? '♥' : '♡';
    btn.setAttribute('aria-label', isSaved ? 'Saqlanganlardan olib tashlash' : 'Saqlash');
  };
  setSaved(saved.includes(card.dataset.title));
  btn?.addEventListener('click', () => {
    const title = card.dataset.title;
    if (saved.includes(title)) saved = saved.filter((item) => item !== title);
    else saved.push(title);
    try { localStorage.setItem('kitobxon-saqlangan', JSON.stringify(saved)); } catch (e) { /* saqlanmadi */ }
    setSaved(saved.includes(title));
    if (activeGenre === 'saqlangan') renderBooks();
  });
  $('.read-btn', card)?.addEventListener('click', () => openReader(card.dataset.title, card.dataset.author));
});
$$('[data-read]').forEach((btn) => btn.addEventListener('click', () => openReader(btn.dataset.read, btn.dataset.author)));

/* O'quvchi */
const reader = $('#reader');
const pageTexts = [
  [
    'Kitob — bu vaqt ichida sayohat qilishning eng tinch usuli. Sahifani ochganingizda, siz boshqa odamlarning tushlari, qarorlari va kichik kundalik g\'alabalariga guvoh bo\'lasiz.',
    'Har bir asar o\'z ohangiga ega. Ba\'zilari tez o\'qiladi, ba\'zilarini esa bir jumlasini bir necha bor o\'qib, ustida o\'ylashga to\'g\'ri keladi. Ikkalasi ham normal — asosiysi, kitob sizga nimadir his ettirsin.'
  ],
  [
    'Yaxshi o\'qish odati katta vaqt talab qilmaydi. Kuniga o\'n besh daqiqa yetarli: avval ko\'zingiz qayerga tushsa, o\'shani o\'qing. Keyin asta-sekin o\'zingiz uchun qulay ritm topasiz.',
    'Saqlangan kitoblar ro\'yxati sizga yoqqan asarlarni unutmaslikka yordam beradi. Keyinroq qaytib keling va ularni qaytadan o\'qing — har safar yangi ma\'no topiladi.'
  ],
  [
    'Bilim chegarasi yo\'q. Bugun o\'qigan bir jumolangiz yillar o\'tib kutilmaganda esingizga tushishi va qaroringizga ta\'sir qilishi mumkin. Shuning uchun kitoblar hech qachon eskimaydi.',
    'Kitobxon siz uchun doimo ochiq. Kerakli asarni toping, o\'zingizga saqlang va sahifalar orasidagi sayohatingizni boshlang.'
  ]
];
let currentPage = 0;
let currentTitle = '';
let lastFocused = null;

function showPage() {
  $('#reader-page').textContent = (currentPage + 1) + '-sahifa';
  $('#reader-text').innerHTML = pageTexts[currentPage].map((p) => `<p>${p}</p>`).join('');
  $('#prev-page').disabled = currentPage === 0;
  $('#next-page').disabled = currentPage === pageTexts.length - 1;
}
function openReader(title, author) {
  currentTitle = title;
  currentPage = 0;
  lastFocused = document.activeElement;
  $('#reader-title').textContent = title;
  $('#reader-author').textContent = author || 'Kitobxon';
  $('#reader-cover').textContent = title;
  showPage();
  reader.hidden = false;
  document.body.style.overflow = 'hidden';
  $('.reader__close').focus();
}
function closeReader() {
  reader.hidden = true;
  document.body.style.overflow = '';
  lastFocused?.focus();
}
$$('[data-close]', reader).forEach((el) => el.addEventListener('click', closeReader));
$('#prev-page')?.addEventListener('click', () => { if (currentPage > 0) { currentPage--; showPage(); } });
$('#next-page')?.addEventListener('click', () => { if (currentPage < pageTexts.length - 1) { currentPage++; showPage(); } });

/* A'zolik */
$('#join-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = $('#email');
  const status = $('#join-status');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
    status.textContent = 'To\'g\'ri elektron pochta manzilini kiriting.';
    return;
  }
  status.textContent = 'Rahmat! Tasdiqlash xabari yuborildi.';
  input.value = '';
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (!reader.hidden) closeReader();
  if (nav?.classList.contains('is-open')) {
    nav.classList.remove('is-open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  }
  if (headerSearch && !headerSearch.hidden) headerSearch.hidden = true;
});

$('#yil').textContent = new Date().getFullYear();
