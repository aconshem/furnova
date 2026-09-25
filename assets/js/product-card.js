/* ============================================================
   FURNOVA — product card renderer
   Returns an HTML string; caller inserts it into the DOM.
   Wires its own Add-to-cart / wishlist buttons via delegation
   (see initProductCardEvents, called once per page).
   ============================================================ */

function formatKES(n) {
  return `${SITE.currency} ${n.toLocaleString('en-KE')}`;
}

function productCardHTML(p) {
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  const wishlisted = Store.isWishlisted(p.id);
  return `
    <article class="product-card" data-id="${p.id}">
      <div class="product-thumb">
        <a href="product.html?slug=${p.slug}">
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
        </a>
        ${p.isNew ? '<span class="badge badge-new">NEW</span>' : ''}
        ${discount > 0 ? `<span class="badge badge-sale" style="${p.isNew ? 'top:44px' : ''}">SAVE ${discount}%</span>` : ''}
        <button class="wishlist-btn ${wishlisted ? 'active' : ''}" data-action="wishlist" data-id="${p.id}" aria-label="Wishlist">
          ${Icon('heart', 17)}
        </button>
        <button class="quick-add-btn" data-action="add-cart" data-id="${p.id}">
          ${Icon('bag', 16)} Add to Cart
        </button>
      </div>
      <div class="product-info">
        <p class="product-cat">${p.category}</p>
        <a href="product.html?slug=${p.slug}" class="product-name">
          <span>${p.name}</span>${Icon('arrowUpRight', 16)}
        </a>
        <div class="product-price">
          <span class="price">${formatKES(p.price)}</span>
          ${p.oldPrice ? `<del>${formatKES(p.oldPrice)}</del>` : ''}
        </div>
      </div>
    </article>
  `;
}

function renderProductGrid(container, products) {
  container.innerHTML = products.map(productCardHTML).join('');
}

// Delegated click handling for add-to-cart / wishlist buttons inside any
// container that holds rendered product cards. Call once per page.
function initProductCardEvents(container) {
  container.addEventListener('click', e => {
    const addBtn = e.target.closest('[data-action="add-cart"]');
    if (addBtn) {
      const product = PRODUCTS.find(p => p.id === addBtn.dataset.id);
      if (product) {
        Store.addToCart(product, 1);
        updateHeaderCounts();
        showToast(`${product.name} added to cart`);
      }
      return;
    }
    const wishBtn = e.target.closest('[data-action="wishlist"]');
    if (wishBtn) {
      const isNowWishlisted = Store.toggleWishlist(wishBtn.dataset.id);
      wishBtn.classList.toggle('active', isNowWishlisted);
      updateHeaderCounts();
      return;
    }
  });
}

let toastTimer;
function showToast(message) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}
