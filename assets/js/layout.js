/* ============================================================
   FURNOVA — shared header / footer / WhatsApp button
   Injected into #site-header / #site-footer / #whatsapp-button
   on every page so markup isn't duplicated 12 times.
   ============================================================ */

const NAV_LINKS = ['Shop', 'Living Room', 'Bedroom', 'Dining', 'Office', 'Outdoor', 'Decor', 'About', 'Contact'];

function navHref(label) {
  if (label === 'Shop') return 'shop.html';
  if (label === 'About') return 'about.html';
  if (label === 'Contact') return 'contact.html';
  return `shop.html?category=${encodeURIComponent(label)}`;
}

function renderHeader() {
  const el = document.getElementById('site-header');
  if (!el) return;

  const params = new URLSearchParams(location.search);
  const initialSearch = params.get('search') || '';

  el.innerHTML = `
    <div class="topbar">${SITE.announcement}</div>
    <header class="site-header">
      <div class="container header-row">
        <a href="index.html" class="brand">${SITE.brandName}</a>
        <nav class="main-nav">
          ${NAV_LINKS.map(x => `<a href="${navHref(x)}">${x}</a>`).join('')}
        </nav>
        <div class="header-actions">
          <form class="search-form" id="header-search-form">
            ${Icon('search', 16)}
            <input type="text" name="search" id="header-search-input" placeholder="Search" value="${initialSearch.replace(/"/g, '&quot;')}">
          </form>
          <a href="wishlist.html" class="icon-btn" aria-label="Wishlist">
            ${Icon('heart', 20)}
            <b class="count-badge" id="wishlist-count" hidden>0</b>
          </a>
          <a href="cart.html" class="icon-btn" aria-label="Cart">
            ${Icon('bag', 20)}
            <b class="count-badge count-badge-dark" id="cart-count" hidden>0</b>
          </a>
          <button class="icon-btn menu-toggle" id="mobile-menu-toggle" aria-label="Menu">${Icon('menu', 20)}</button>
        </div>
      </div>
      <div class="mobile-nav" id="mobile-nav" hidden>
        ${NAV_LINKS.map(x => `<a href="${navHref(x)}">${x}</a>`).join('')}
      </div>
    </header>
  `;

  const toggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  toggle.addEventListener('click', () => {
    const isHidden = mobileNav.hasAttribute('hidden');
    if (isHidden) { mobileNav.removeAttribute('hidden'); toggle.innerHTML = Icon('x', 20); }
    else { mobileNav.setAttribute('hidden', ''); toggle.innerHTML = Icon('menu', 20); }
  });

  document.getElementById('header-search-form').addEventListener('submit', e => {
    e.preventDefault();
    const q = document.getElementById('header-search-input').value.trim();
    if (q) location.href = `shop.html?search=${encodeURIComponent(q)}`;
  });

  updateHeaderCounts();
}

function updateHeaderCounts() {
  const wishlistEl = document.getElementById('wishlist-count');
  const cartEl = document.getElementById('cart-count');
  if (wishlistEl) {
    const n = Store.getWishlist().length;
    wishlistEl.textContent = n;
    wishlistEl.hidden = n === 0;
  }
  if (cartEl) {
    const n = Store.cartCount();
    cartEl.textContent = n;
    cartEl.hidden = n === 0;
  }
}

function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  const roomLinks = ['Living Room', 'Bedroom', 'Dining', 'Office', 'Outdoor', 'Decor'];
  el.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <div class="brand">${SITE.brandName}</div>
          <p>Furniture for modern Kenyan living. Browse online and place your order conveniently through WhatsApp.</p>
        </div>
        <div>
          <h3>Shop</h3>
          <div class="footer-links">${roomLinks.map(x => `<a href="shop.html?category=${encodeURIComponent(x)}">${x}</a>`).join('')}</div>
        </div>
        <div>
          <h3>Customer Service</h3>
          <div class="footer-links">
            <a href="contact.html">Contact</a>
            <a href="delivery.html">Delivery</a>
            <a href="returns.html">Returns</a>
            <a href="faq.html">FAQ</a>
            <a href="terms.html">Terms</a>
            <a href="privacy.html">Privacy</a>
          </div>
        </div>
        <div>
          <h3>Contact</h3>
          <div class="footer-contact">
            <span>${Icon('phone', 16)}${SITE.phone}</span>
            <span>${Icon('mail', 16)}${SITE.email}</span>
            <span>${Icon('pin', 16)}${SITE.address}</span>
            <div class="footer-social">
              <a href="${SITE.socialLinks.instagram}" aria-label="Instagram">IG</a>
              <a href="${SITE.socialLinks.facebook}" aria-label="Facebook">FB</a>
              <a href="${SITE.socialLinks.youtube}" aria-label="YouTube">YT</a>
              <a href="${SITE.socialLinks.tiktok}" aria-label="TikTok">TK</a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">© ${new Date().getFullYear()} ${SITE.brandName}. Frontend demonstration.</div>
    </footer>
  `;
}

function renderWhatsAppButton() {
  const el = document.getElementById('whatsapp-button');
  if (!el) return;
  const msg = encodeURIComponent('Hello, I would like to make an enquiry.');
  el.innerHTML = `<a class="whatsapp-fab" href="https://wa.me/${SITE.whatsappNumber}?text=${msg}" target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp">${Icon('whatsapp', 24)}</a>`;
}

function initLayout() {
  renderHeader();
  renderFooter();
  renderWhatsAppButton();
}

document.addEventListener('DOMContentLoaded', initLayout);
