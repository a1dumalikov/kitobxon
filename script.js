const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const books = KITOBLAR;
const bookById = (id) => books.find((b) => b.id === id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const genreName = { roman: 'Roman', sarguzasht: 'Sarguzasht', ertak: 'Ertak', tarix: 'Tarix' };

function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch (e) { return fallback; }
}
function store(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* joy yo'q */ }
}

/* Mavzu: light / dark */
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
  menuBtn.setAttribute('aria-label', open ? 'Menyuni yopish' : 'Menyuni ochish');
});
nav?.addEventListener('click', (e) => {
  if (e.target.closest('a')) { nav.classList.remove('is-open'); menuBtn?.setAttribute('aria-expanded', 'false'); }
});

/* Qidiruv takliflari */
const suggestions = $('#qidiruv-taklif');
const titles = books.map((b) => b.title);
const authors = [...new Set(books.map((b) => b.author))];
[...titles, ...authors].forEach((value) => {
  const option = document.createElement('option');
  option.value = value;
  suggestions?.append(option);
});

const headerSearch = $('#header-search');
$('#search-toggle')?.addEventListener('click', () => {
  headerSearch.hidden = !headerSearch.hidden;
  if (!headerSearch.hidden) $('#header-q').focus();
});
function runSearch(value) {
  query = value.trim();
  activeGenre = 'hammasi';
  $('#author-select').value = '';
  syncFilters();
  renderBooks();
  $('#katalog').scrollIntoView({ behavior: 'smooth' });
}
headerSearch?.addEventListener('submit', (e) => { e.preventDefault(); runSearch($('#header-q').value); });
$('#hero-search')?.addEventListener('submit', (e) => { e.preventDefault(); runSearch($('#hero-q').value); });

/* 3D kitob */
const scene = $('#book-scene');
const book = $('#book');
const flipBtn = $('#flip-btn');
let dragging = false, startX = 0, angle = -24;
scene?.addEventListener('pointerdown', (e) => {
  dragging = true; startX = e.clientX;
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
const grid = $('#books-grid');
let query = '';
let activeGenre = 'hammasi';
let activeAuthor = '';
let saved = load('kitobxon-saqlangan', []);

const syncFilters = () => $$('.filter').forEach((btn) => btn.classList.toggle('is-active', btn.dataset.genre === activeGenre));
const authorSelect = $('#author-select');
authors.forEach((author) => {
  const option = document.createElement('option');
  option.value = author; option.textContent = author;
  authorSelect?.append(option);
});

function renderBooks() {
  const q = query.toLocaleLowerCase('uz');
  const sort = $('#sort-select').value;
  let list = books.filter((b) => {
    const genreOk = activeGenre === 'hammasi' ||
      (activeGenre === 'saqlangan' ? saved.includes(b.id) : b.genre === activeGenre);
    const authorOk = !activeAuthor || b.author === activeAuthor;
    const text = (b.title + ' ' + b.author).toLocaleLowerCase('uz');
    return genreOk && authorOk && text.includes(q);
  });
  if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);
  if (sort === 'year') list = [...list].sort((a, b) => b.year - a.year);

  grid.innerHTML = list.map((b) => `
    <article class="book-card" data-id="${b.id}">
      <div class="cover">
        <img class="cover__img" src="${b.cover}" alt="${esc(b.title)} muqovasi">
        <span class="cover__shade"></span>
        <span class="cover__label">${esc(b.label)}</span>
        <h3>${esc(b.title)}</h3>
        <p>${esc(b.author)}</p>
        <span class="cover__line"></span>
      </div>
      <div class="book-card__body">
        <p class="book-card__author">Muallif: <button class="author-link" type="button" data-author="${esc(b.author)}">${esc(b.author)}</button></p>
        <p class="book-card__genre">${genreName[b.genre]} · ${b.year} · ${b.chapters.length} bet</p>
        <div class="book-card__foot">
          <span>★ ${b.rating.toFixed(1)}</span>
          <div>
            <button class="save-btn" type="button" aria-label="Saqlash" aria-pressed="${saved.includes(b.id)}">${saved.includes(b.id) ? '♥' : '♡'}</button>
            <button class="read-btn" type="button">O'qish</button>
          </div>
        </div>
      </div>
    </article>`).join('');

  const banner = $('#search-result');
  const authorHits = books.filter((b) => b.author.toLocaleLowerCase('uz').includes(q));
  if (q && authorHits.length) {
    banner.textContent = `Muallif: ${authorHits[0].author} — ${authorHits.length} ta kitob topildi.`;
    banner.hidden = false;
  } else if (q || activeAuthor || activeGenre !== 'hammasi') {
    banner.textContent = activeAuthor ? `Muallif: ${activeAuthor} — ${list.length} ta kitob.` : `${list.length} ta kitob topildi.`;
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
    btn.setAttribute('aria-label', isSaved ? 'Saqlanganlardan olib tashlash' : 'Saqlash');
    if (activeGenre === 'saqlangan') renderBooks();
  }
});
$$('[data-book]').forEach((btn) => btn.addEventListener('click', () => openBook(btn.dataset.book)));

/* O'quvchi va o'qish jarayoni */
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
  $('#reader-page').textContent = `${currentPage + 1}-bet / ${total}`;
  $('#reader-chapter').textContent = chapter.title;
  $('#reader-text').innerHTML = chapter.text.map((p) => `<p>${esc(p)}</p>`).join('');
  $('#reader-bar').style.width = ((currentPage + 1) / total * 100) + '%';
  $('#page-jump').max = total;
  $('#page-jump').value = currentPage + 1;
  $('#prev-page').disabled = currentPage === 0;
  $('#next-page').disabled = currentPage === total - 1;
  const note = $('#reader-resume');
  if (currentPage === total - 1) {
    note.textContent = 'Kitob oxiriga yetdingiz. Boshidan qayta o\'qish uchun 1-betni tanlang.';
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
  $('#reader-title').textContent = b.title;
  $('#reader-author').textContent = b.author;
  $('#reader-cover').src = b.cover;
  $('#reader-cover').alt = b.title + ' muqovasi';
  showPage();
  if (savedPage > 0) {
    const note = $('#reader-resume');
    note.textContent = `Siz ${savedPage + 1}-betga yetgandingiz. Shu bet ochildi.`;
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
    status.textContent = 'To\'g\'ri elektron pochta manzilini kiriting.';
    return;
  }
  status.textContent = 'Rahmat! Tasdiqlash xabari yuborildi.';
  input.value = '';
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (!reader.hidden) closeReader();
  if (nav?.classList.contains('is-open')) { nav.classList.remove('is-open'); menuBtn?.setAttribute('aria-expanded', 'false'); }
  if (headerSearch && !headerSearch.hidden) headerSearch.hidden = true;
});

$('#yil').textContent = new Date().getFullYear();
renderBooks();
