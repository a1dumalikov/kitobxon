/* Kitobxon MVP qatlami: hisoblar, profil, boshqaruv paneli, tafsilot va o'qish sozlamalari */
(() => {
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const appLang = () => document.documentElement.lang || 'uz';
  const T = {
    uz: {
      login: 'Kirish', register: 'Ro\'yxatdan o\'tish', name: 'Ism', email: 'Elektron pochta', password: 'Parol',
      enter: 'Kirish', create: 'Yaratish', guest: 'Mehmon', demoNote: 'Demo rejim — ma\'lumotlar shu brauzerda saqlanadi.',
      logout: 'Chiqish', stats: 'Mening statistikam', admin: 'Kitob qo\'shish', install: 'Ilovani o\'rnatish',
      close: 'Yopish', details: 'Kitob haqida', description: 'Bu asar tanlangan qisqartilgan bayon bo\'lib, boshidan oxirigacha to\'liq yakunlangan.',
      chapters: 'Boblar', reviews: 'Sharhlar', addReview: 'Sharh qo\'shish', rating: 'Bahoingiz', comment: 'Fikringiz', send: 'Yuborish',
      noReviews: 'Hali sharh yo\'q. Birinchi bo\'lib yozing.', readContinue: 'Davom etib o\'qish', readStart: 'Boshidan o\'qish',
      started: 'Boshlangan', finished: 'Tugatilgan', pages: 'O\'qilgan betlar', fav: 'Sevimli janr', streak: 'Kunlik seriya',
      avgRating: 'O\'rtacha baho', noData: 'Hali ma\'lumot yo\'q. Kitob o\'qishni boshlang.',
      addBook: 'Yangi kitob qo\'shish', titleUz: 'Nomi (o\'zbekcha)', titleRu: 'Nomi (ruscha)', titleEn: 'Nomi (inglizcha)',
      authorUz: 'Muallif (o\'zbekcha)', authorRu: 'Muallif (ruscha)', authorEn: 'Muallif (inglizcha)',
      genre: 'Janr', year: 'Yil', rating2: 'Baho', coverUrl: 'Muqova havolasi (ixtiyoriy)',
      chaptersHint: 'Har bir bob yangi satrda: Bob nomi|O\'zbek matni|Rus matni|Ingliz matni',
      saveBook: 'Kitobni saqlash', savedBooks: 'Qo\'shilgan kitoblar', delete: 'O\'chirish', noCustom: 'Hali o\'z kitoblaringiz yo\'q.',
      added: 'Kitob qo\'shildi.', required: 'Nom va muallif (o\'zbekcha) hamda kamida bitta bob kerak.',
      speak: 'Ovozli o\'qish', stop: 'To\'xtatish', smaller: 'Kichikroq', bigger: 'Kattaroq', chapterJump: 'Bob tanlash',
      installed: 'Ilova o\'rnatildi.', invalid: 'To\'ldirish noto\'g\'ri.', duplicate: 'Bu pochta allaqachon bor.',
      wrongPass: 'Parol noto\'g\'ri.', needLogin: 'Avval tizimga kiring.', adminOnly: 'Bu bo\'lim faqat administrator uchun.', adminLogin: 'Admin kirish', adminLogout: 'Admin chiqish', reviewerName: 'Ismingiz (ixtiyoriy)',
    },
    ru: {
      login: 'Вход', register: 'Регистрация', name: 'Имя', email: 'Эл. почта', password: 'Пароль',
      enter: 'Войти', create: 'Создать', guest: 'Гость', demoNote: 'Демо-режим — данные хранятся в этом браузере.',
      logout: 'Выйти', stats: 'Моя статистика', admin: 'Добавить книгу', install: 'Установить приложение',
      close: 'Закрыть', details: 'О книге', description: 'Это избранный сокращённый пересказ с полной развязкой от начала до конца.',
      chapters: 'Главы', reviews: 'Отзывы', addReview: 'Добавить отзыв', rating: 'Ваша оценка', comment: 'Ваш отзыв', send: 'Отправить',
      noReviews: 'Отзывов пока нет. Напишите первым.', readContinue: 'Продолжить чтение', readStart: 'Читать сначала',
      started: 'Начато', finished: 'Прочитано', pages: 'Прочитано страниц', fav: 'Любимый жанр', streak: 'Дней подряд',
      avgRating: 'Средняя оценка', noData: 'Данных пока нет. Начните читать книгу.',
      addBook: 'Добавить новую книгу', titleUz: 'Название (узб.)', titleRu: 'Название (рус.)', titleEn: 'Название (англ.)',
      authorUz: 'Автор (узб.)', authorRu: 'Автор (рус.)', authorEn: 'Автор (англ.)',
      genre: 'Жанр', year: 'Год', rating2: 'Оценка', coverUrl: 'Ссылка на обложку (необязательно)',
      chaptersHint: 'Каждая глава на новой строке: Название|Узб. текст|Рус. текст|Англ. текст',
      saveBook: 'Сохранить книгу', savedBooks: 'Добавленные книги', delete: 'Удалить', noCustom: 'Своих книг пока нет.',
      added: 'Книга добавлена.', required: 'Нужны название и автор (узб.) и хотя бы одна глава.',
      speak: 'Озвучить', stop: 'Остановить', smaller: 'Меньше', bigger: 'Крупнее', chapterJump: 'Выбрать главу',
      installed: 'Приложение установлено.', invalid: 'Неверные данные.', duplicate: 'Эта почта уже есть.',
      wrongPass: 'Неверный пароль.', needLogin: 'Сначала войдите в систему.', adminOnly: 'Этот раздел только для администратора.', adminLogin: 'Вход администратора', adminLogout: 'Выход администратора', reviewerName: 'Ваше имя (необязательно)',
    },
    en: {
      login: 'Sign in', register: 'Register', name: 'Name', email: 'Email', password: 'Password',
      enter: 'Sign in', create: 'Create', guest: 'Guest', demoNote: 'Demo mode — data is stored in this browser.',
      logout: 'Sign out', stats: 'My statistics', admin: 'Add a book', install: 'Install app',
      close: 'Close', details: 'About the book', description: 'This is a selected abridged retelling with a complete ending, from beginning to end.',
      chapters: 'Chapters', reviews: 'Reviews', addReview: 'Add a review', rating: 'Your rating', comment: 'Your comment', send: 'Send',
      noReviews: 'No reviews yet. Be the first.', readContinue: 'Continue reading', readStart: 'Read from start',
      started: 'Started', finished: 'Finished', pages: 'Pages read', fav: 'Favourite genre', streak: 'Day streak',
      avgRating: 'Average rating', noData: 'No data yet. Start reading a book.',
      addBook: 'Add a new book', titleUz: 'Title (Uzbek)', titleRu: 'Title (Russian)', titleEn: 'Title (English)',
      authorUz: 'Author (Uzbek)', authorRu: 'Author (Russian)', authorEn: 'Author (English)',
      genre: 'Genre', year: 'Year', rating2: 'Rating', coverUrl: 'Cover URL (optional)',
      chaptersHint: 'One chapter per line: Title|Uzbek text|Russian text|English text',
      saveBook: 'Save book', savedBooks: 'Added books', delete: 'Delete', noCustom: 'No books of your own yet.',
      added: 'Book added.', required: 'Uzbek title, author and at least one chapter are required.',
      speak: 'Read aloud', stop: 'Stop', smaller: 'Smaller', bigger: 'Larger', chapterJump: 'Choose chapter',
      installed: 'App installed.', invalid: 'Invalid input.', duplicate: 'This email already exists.',
      wrongPass: 'Wrong password.', needLogin: 'Please sign in first.', adminOnly: 'This section is for the administrator only.', adminLogin: 'Admin sign in', adminLogout: 'Admin sign out', reviewerName: 'Your name (optional)',
    },
  };
  const tr = (key) => (T[appLang()] || T.uz)[key] || key;

  /* Asosiy ma'lumotlar */
  const USERS = 'kitobxon-users';
  const CURRENT = 'kitobxon-current';
  const CUSTOM = 'kitobxon-custom-books';
  const REVIEWS = 'kitobxon-reviews';
  const ACTIVITY = 'kitobxon-activity';
  const read = (key, fallback) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch (e) { return fallback; }
  };
  const write = (key, value) => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* joy yo'q */ }
  };
  const current = () => read(CURRENT, null);
  const today = () => new Date().toISOString().slice(0, 10);

  /* Yagona admin hisobi. Oddiy foydalanuvchilar ro'yxatdan o'tmaydi. */
  const ADMIN_EMAIL = 'admin@kitobxon.uz';
  const ADMIN_PASS = 'Asrorbek';
  const isAdmin = () => current()?.email === ADMIN_EMAIL;

  /* Tuzilmaga mos yangi kitoblarni qo'shish */
  (read(CUSTOM, []) || []).forEach((b) => {
    if (b && b.id && !books.some((x) => x.id === b.id)) books.push(b);
  });

  /* Umumiy modal qobiq */
  document.body.insertAdjacentHTML('beforeend', `
    <div class="modal" id="mvp-auth" hidden>
      <div class="modal__backdrop" data-close></div>
      <div class="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="auth-title">
        <button class="modal__close" type="button" data-close aria-label="${tr('close')}">×</button>
        <h2 id="auth-title">${tr('adminLogin')}</h2>
        <p class="modal__note">${ADMIN_EMAIL}</p>
        <form id="auth-form" class="mvp-form">
          <label>${tr('password')}<input name="password" type="password" autocomplete="current-password" required autofocus></label>
          <button class="btn" type="submit" id="auth-submit">${tr('enter')}</button>
          <p class="modal__status" id="auth-status" role="status" aria-live="polite"></p>
        </form>
      </div>
    </div>
    <div class="modal" id="mvp-detail" hidden>
      <div class="modal__backdrop" data-close></div>
      <div class="modal__dialog modal__dialog--wide" role="dialog" aria-modal="true" aria-labelledby="detail-title">
        <button class="modal__close" type="button" data-close aria-label="${tr('close')}">×</button>
        <div id="detail-body"></div>
      </div>
    </div>
    <div class="modal" id="mvp-stats" hidden>
      <div class="modal__backdrop" data-close></div>
      <div class="modal__dialog" role="dialog" aria-modal="true"><button class="modal__close" type="button" data-close aria-label="${tr('close')}">×</button><div id="stats-body"></div></div>
    </div>
    <div class="modal" id="mvp-admin" hidden>
      <div class="modal__backdrop" data-close></div>
      <div class="modal__dialog modal__dialog--wide" role="dialog" aria-modal="true"><button class="modal__close" type="button" data-close aria-label="${tr('close')}">×</button><div id="admin-body"></div></div>
    </div>`);

  const modals = $$('.modal');
  const hideModal = (el) => { el.hidden = true; el.style.display = 'none'; };
  modals.forEach(hideModal);
  const openModal = (id) => {
    modals.forEach((m) => { if (m.id !== id) hideModal(m); });
    const el = document.getElementById(id);
    el.hidden = false;
    el.style.display = 'grid';
    document.body.style.overflow = 'hidden';
    $('.modal__close', el).focus();
  };
  const closeModal = (el) => {
    hideModal(el);
    if (modals.every((m) => m.hidden) && $('#reader').hidden) document.body.style.overflow = '';
  };
  $$('.modal').forEach((m) => m.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) closeModal(m);
  }));
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    $$('.modal').forEach((m) => { if (!m.hidden) closeModal(m); });
  });

  /* Mehmon ham ishlaydi; faqat admin bitta parol bilan kiradi */
  $('.header__actions').insertAdjacentHTML('afterbegin', `
    <div class="user-wrap">
      <button class="icon-btn user-btn" id="user-btn" type="button" aria-label="${tr('guest')}" aria-expanded="false">👤</button>
      <div class="user-menu" id="user-menu" hidden>
        <div class="user-menu__head" id="user-name">${tr('guest')}</div>
        <button type="button" data-user="stats">${tr('stats')}</button>
        <button type="button" data-user="admin-login" id="admin-login-btn">${tr('adminLogin')}</button>
        <button type="button" data-user="admin" id="admin-panel-btn" hidden>${tr('admin')}</button>
        <button type="button" data-user="install" hidden id="install-btn">${tr('install')}</button>
        <button type="button" data-user="logout" id="logout-btn" hidden>${tr('adminLogout')}</button>
      </div>
    </div>`);
  const userBtn = $('#user-btn');
  const userMenu = $('#user-menu');
  function paintUser() {
    const admin = isAdmin();
    userBtn.textContent = admin ? 'A' : '👤';
    userBtn.setAttribute('aria-label', admin ? 'Administrator' : tr('guest'));
    $('#user-name').textContent = admin ? 'Administrator' : tr('guest');
    $('#admin-login-btn').hidden = admin;
    $('#admin-panel-btn').hidden = !admin;
    $('#logout-btn').hidden = !admin;
  }
  paintUser();
  userBtn.addEventListener('click', () => {
    userMenu.hidden = !userMenu.hidden;
    userBtn.setAttribute('aria-expanded', String(!userMenu.hidden));
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.user-wrap') && !userMenu.hidden) {
      userMenu.hidden = true; userBtn.setAttribute('aria-expanded', 'false');
    }
  });

  $('#auth-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const pass = String(new FormData(e.currentTarget).get('password') || '');
    const status = $('#auth-status');
    if (pass !== ADMIN_PASS) { status.textContent = tr('wrongPass'); return; }
    write(CURRENT, { id: 'admin', name: 'Administrator', email: ADMIN_EMAIL, role: 'admin' });
    location.reload();
  });
  userMenu.addEventListener('click', (e) => {
    const action = e.target.dataset.user;
    if (!action) return;
    userMenu.hidden = true;
    userBtn.setAttribute('aria-expanded', 'false');
    if (action === 'stats') { renderStats(); openModal('mvp-stats'); }
    if (action === 'admin-login') openModal('mvp-auth');
    if (action === 'admin' && isAdmin()) { renderAdmin(); openModal('mvp-admin'); }
    if (action === 'logout' && isAdmin()) {
      localStorage.removeItem(CURRENT);
      paintUser();
    }
  });

  /* Kitob tafsiloti va sharhlar */
  function reviewsFor(id) { return read(REVIEWS, {})[id] || []; }
  function avgFor(id) {
    const list = reviewsFor(id);
    return list.length ? (list.reduce((s, r) => s + r.rating, 0) / list.length) : null;
  }
  function openDetail(id) {
    const b = books.find((x) => x.id === id);
    if (!b) return;
    const done = read('kitobxon-progress', {})[id] || 0;
    const avg = avgFor(id);
    $('#detail-body').innerHTML = `
      <div class="detail">
        <img class="detail__cover" src="${esc(b.cover)}" alt="${esc(b.title[appLang()] || b.title.uz)}">
        <div class="detail__main">
          <h2 id="detail-title">${esc(b.title[appLang()] || b.title.uz)}</h2>
          <p class="detail__author">${esc(b.author[appLang()] || b.author.uz)} · ${b.year}</p>
          <p class="detail__desc">${esc(tr('description'))}</p>
          <div class="detail__meta"><span>★ ${avg ? avg.toFixed(1) : b.rating.toFixed(1)}</span><span>${b.chapters.length} ${tr('chapters').toLowerCase()}</span><span>${esc(b.genre)}</span></div>
          <div class="detail__actions">
            <button class="btn" type="button" data-open="${b.id}">${done > 0 ? tr('readContinue') : tr('readStart')}</button>
          </div>
          <h3>${tr('chapters')}</h3>
          <div class="detail__chapters">${b.chapters.map((c, i) => `<button type="button" data-open="${b.id}" data-page="${i}"><span>${String(i + 1).padStart(2, '0')}</span> ${esc(c.title[appLang()] || c.title.uz)}</button>`).join('')}</div>
          <h3>${tr('reviews')}</h3>
          <div id="review-list" class="reviews">${reviewsFor(id).map((r) => `<div class="review"><strong>${esc(r.user)}</strong> <span>${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span><p>${esc(r.text)}</p></div>`).join('') || `<p class="muted">${tr('noReviews')}</p>`}</div>
          <form class="review-form" id="review-form" data-book="${b.id}">
            <label>${tr('reviewerName')}<input name="reviewer" placeholder="${tr('guest')}"></label>
            <label>${tr('rating')}<select name="rating"><option value="5">★★★★★</option><option value="4">★★★★</option><option value="3">★★★</option><option value="2">★★</option><option value="1">★</option></select></label>
            <label>${tr('comment')}<textarea name="text" rows="2" required></textarea></label>
            <button class="btn btn--small" type="submit">${tr('send')}</button>
          </form>
        </div>
      </div>`;
    openModal('mvp-detail');
  }
  $('#books-grid').addEventListener('click', (e) => {
    if (e.target.closest('.read-btn, .save-btn, .author-link')) return;
    const card = e.target.closest('.book-card');
    if (card) openDetail(card.dataset.id);
  });
  $('#mvp-detail').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-open]');
    if (!btn) return;
    const id = btn.dataset.open;
    const page = Number(btn.dataset.page || 0);
    closeModal($('#mvp-detail'));
    openBook(id);
    setTimeout(() => {
      const jump = $('#page-jump');
      jump.value = page + 1;
      $('#reader-jump').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }, 30);
  });
  $('#mvp-detail').addEventListener('submit', (e) => {
    if (e.target.id !== 'review-form') return;
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = String(fd.get('reviewer') || '').trim() || tr('guest');
    const db = read(REVIEWS, {});
    const id = e.target.dataset.book;
    db[id] = db[id] || [];
    db[id].push({ user: name, rating: Number(fd.get('rating')), text: String(fd.get('text')).trim(), date: today() });
    write(REVIEWS, db);
    openDetail(id);
  });

  /* Statistika */
  function streakDays() {
    const days = read(ACTIVITY, []);
    let n = 0;
    const d = new Date();
    while (days.includes(d.toISOString().slice(0, 10))) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function renderStats() {
    const progress = read('kitobxon-progress', {});
    const saved = read('kitobxon-saqlangan', []);
    let started = 0, finished = 0, pages = 0;
    Object.entries(progress).forEach(([id, idx]) => {
      const b = books.find((x) => x.id === id);
      if (!b) return;
      pages += Math.min(idx + 1, b.chapters.length);
      if (idx >= b.chapters.length - 1) finished++; else if (idx > 0) started++;
    });
    const favCounts = {};
    saved.forEach((id) => { const b = books.find((x) => x.id === id); if (b) favCounts[b.genre] = (favCounts[b.genre] || 0) + 1; });
    const fav = Object.entries(favCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || '—';
    const reviews = Object.values(read(REVIEWS, {})).flat();
    const avg = reviews.length ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1) : '—';
    const rows = [
      [tr('started'), started], [tr('finished'), finished], [tr('pages'), pages],
      [tr('fav'), fav], [tr('streak'), streakDays()], [tr('avgRating'), avg],
    ];
    $('#stats-body').innerHTML = `<h2>${tr('stats')}</h2><p class="muted">${current() ? esc(current().name) : tr('guest')}</p>
      <div class="stats-grid">${rows.map(([k, v]) => `<div class="stat"><strong>${esc(String(v))}</strong><span>${esc(k)}</span></div>`).join('')}</div>
      ${pages ? '' : `<p class="muted">${tr('noData')}</p>`}`;
    openModal('mvp-stats');
  }

  /* Boshqaruv paneli */
  function renderAdmin() {
    if (!isAdmin()) {
      $('#admin-body').innerHTML = `<h2>${tr('admin')}</h2><p class="muted">${tr('adminOnly')}</p>`;
      return;
    }
    const custom = read(CUSTOM, []);
    $('#admin-body').innerHTML = `<h2>${tr('addBook')}</h2>
      <form class="mvp-form admin-form" id="admin-form">
        <label>${tr('titleUz')}<input name="titleUz" required></label>
        <label>${tr('titleRu')}<input name="titleRu"></label>
        <label>${tr('titleEn')}<input name="titleEn"></label>
        <label>${tr('authorUz')}<input name="authorUz" required></label>
        <label>${tr('authorRu')}<input name="authorRu"></label>
        <label>${tr('authorEn')}<input name="authorEn"></label>
        <div class="form-row">
          <label>${tr('genre')}<select name="genre"><option value="roman">Roman</option><option value="sarguzasht">Sarguzasht</option><option value="ertak">Ertak</option><option value="tarix">Tarix</option><option value="she'riyat">She'riyat</option><option value="drama">Drama</option></select></label>
          <label>${tr('year')}<input name="year" type="number" value="${new Date().getFullYear()}"></label>
          <label>${tr('rating2')}<input name="rating" type="number" min="1" max="5" step="0.1" value="4.5"></label>
        </div>
        <label>${tr('coverUrl')}<input name="cover" type="url" placeholder="https://..."></label>
        <label>${tr('chaptersHint')}<textarea name="chapters" rows="6" required></textarea></label>
        <button class="btn" type="submit">${tr('saveBook')}</button>
        <p class="modal__status" id="admin-status" role="status" aria-live="polite"></p>
      </form>
      <h3>${tr('savedBooks')}</h3>
      <div class="admin-list">${custom.length ? custom.map((b) => `<div class="admin-item"><span>${esc(b.title.uz)} — ${esc(b.author.uz)}</span><button type="button" data-del="${b.id}">${tr('delete')}</button></div>`).join('') : `<p class="muted">${tr('noCustom')}</p>`}</div>`;
  }
  $('#mvp-admin').addEventListener('submit', (e) => {
    if (e.target.id !== 'admin-form') return;
    e.preventDefault();
    if (!isAdmin()) { $('#admin-status').textContent = tr('adminOnly'); return; }
    const fd = new FormData(e.target);
    const uz = String(fd.get('titleUz') || '').trim();
    const author = String(fd.get('authorUz') || '').trim();
    const lines = String(fd.get('chapters') || '').split('\n').map((s) => s.trim()).filter(Boolean);
    if (!uz || !author || !lines.length) { $('#admin-status').textContent = tr('required'); return; }
    const chapters = lines.map((line) => {
      const [t, u, r, en] = line.split('|').map((s) => (s || '').trim());
      return {
        title: { uz: t || uz, ru: r ? t : t, en: en ? t : t },
        text: { uz: [u || t], ru: [r || u || t], en: [en || u || t] },
      };
    });
    const custom = read(CUSTOM, []);
    const book = {
      id: 'custom-' + Date.now(), genre: fd.get('genre') || 'roman',
      year: Number(fd.get('year')) || new Date().getFullYear(),
      rating: Number(fd.get('rating')) || 4.5,
      cover: String(fd.get('cover') || '').trim() || 'covers/custom.svg',
      title: { uz, ru: String(fd.get('titleRu') || '').trim() || uz, en: String(fd.get('titleEn') || '').trim() || uz },
      author: { uz: author, ru: String(fd.get('authorRu') || '').trim() || author, en: String(fd.get('authorEn') || '').trim() || author },
      chapters,
    };
    custom.push(book); write(CUSTOM, custom);
    books.push(book);
    fillAuthors(); fillSuggestions(); renderBooks(); renderAdmin();
    $('#admin-status').textContent = tr('added');
  });
  $('#mvp-admin').addEventListener('click', (e) => {
    const id = e.target.dataset.del;
    if (!id || !isAdmin()) return;
    write(CUSTOM, read(CUSTOM, []).filter((b) => b.id !== id));
    const idx = books.findIndex((b) => b.id === id);
    if (idx >= 0) books.splice(idx, 1);
    fillAuthors(); fillSuggestions(); renderBooks(); renderAdmin();
  });

  /* O'qish sozlamalari va ovoz */
  const readerContent = $('.reader__content');
  if (readerContent) {
    $('.reader__eyebrow').insertAdjacentHTML('afterend', `
      <div class="reader__tools">
        <button type="button" id="tts-btn" title="${tr('speak')}">▶</button>
        <button type="button" id="font-minus" title="${tr('smaller')}">A−</button>
        <button type="button" id="font-plus" title="${tr('bigger')}">A+</button>
        <select id="chapter-select" aria-label="${tr('chapterJump')}"></select>
      </div>`);
    const textEl = $('#reader-text');
    const applyFont = () => { textEl.style.fontSize = (read('kitobxon-font', 1) === 1 ? 1 : read('kitobxon-font', 1)) + 'rem'; };
    applyFont();
    $('#font-minus').addEventListener('click', () => {
      const size = Math.max(0.85, read('kitobxon-font', 1) - 0.1);
      write('kitobxon-font', Number(size.toFixed(2))); applyFont();
    });
    $('#font-plus').addEventListener('click', () => {
      const size = Math.min(1.45, read('kitobxon-font', 1) + 0.1);
      write('kitobxon-font', Number(size.toFixed(2))); applyFont();
    });
    function syncChapter() {
      const title = $('#reader-chapter').textContent;
      const select = $('#chapter-select');
      if (!select.options.length) {
        const book = books.find((b) => (b.title[appLang()] || b.title.uz) === $('#reader-title').textContent);
        if (book) {
          select.innerHTML = book.chapters.map((c) => `<option>${esc(c.title[appLang()] || c.title.uz)}</option>`).join('');
        }
      }
      const opts = [...select.options].map((o) => o.textContent);
      const i = opts.indexOf(title);
      if (i >= 0) select.selectedIndex = i;
      const days = read(ACTIVITY, []);
      if (!days.includes(today())) { days.push(today()); write(ACTIVITY, days.slice(-60)); }
      if ('speechSynthesis' in window) speechSynthesis.cancel();
      $('#tts-btn').textContent = '▶';
    }
    new MutationObserver(syncChapter).observe($('#reader-chapter'), { childList: true, characterData: true, subtree: true });
    $('#chapter-select').addEventListener('change', (e) => {
      $('#page-jump').value = e.target.selectedIndex + 1;
      $('#reader-jump').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    });
    $('#tts-btn').addEventListener('click', () => {
      if (!('speechSynthesis' in window)) return;
      if (speechSynthesis.speaking) { speechSynthesis.cancel(); $('#tts-btn').textContent = '▶'; return; }
      const u = new SpeechSynthesisUtterance(textEl.innerText);
      u.lang = appLang() === 'ru' ? 'ru-RU' : appLang() === 'en' ? 'en-US' : 'uz-UZ';
      u.rate = 0.95;
      u.onend = () => { $('#tts-btn').textContent = '▶'; };
      speechSynthesis.speak(u);
      $('#tts-btn').textContent = '■';
    });
  }

  /* PWA */
  document.head.insertAdjacentHTML('beforeend', '<link rel="manifest" href="manifest.webmanifest">');
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').then((reg) => reg.update()).catch(() => {});
  let installEvent = null;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); installEvent = e; $('#install-btn').hidden = false;
  });
  $('#install-btn').addEventListener('click', async () => {
    if (!installEvent) return;
    installEvent.prompt();
    await installEvent.userChoice;
    installEvent = null; $('#install-btn').hidden = true;
  });

  /* Til o'zgarganda yangi matnlarni yangilash */
  $$('.lang-switch button').forEach((btn) => btn.addEventListener('click', () => {
    setTimeout(() => {
      $('#chapter-select').innerHTML = '';
      paintUser();
      $('#admin-login-btn').textContent = tr('adminLogin');
      $('#admin-panel-btn').textContent = tr('admin');
      $('#logout-btn').textContent = tr('adminLogout');
      $('#user-menu [data-user="stats"]').textContent = tr('stats');
      $('#install-btn').textContent = tr('install');
      $('#auth-title').textContent = tr('adminLogin');
      $('#auth-submit').textContent = tr('enter');
      if (!$('#mvp-detail').hidden && $('#detail-title').textContent) {
        const id = $('#detail-body .detail__actions [data-open]')?.dataset.open;
        if (id) openDetail(id);
      }
      if (!$('#mvp-stats').hidden) renderStats();
      if (!$('#mvp-admin').hidden) renderAdmin();
    }, 0);
  }));

})();
