/* ============================================================
   FURNOVA — product detail page
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const slug = new URLSearchParams(location.search).get('slug');
  const product = PRODUCTS.find(p => p.slug === slug);
  const main = document.getElementById('product-main');

  if (!product) {
    main.innerHTML = `
      <div class="not-found">
        <h1 class="serif">Product not found</h1>
        <a href="shop.html">Back to shop</a>
      </div>
    `;
    return;
  }

  document.getElementById('page-title').textContent = `${product.name} — FURNOVA`;

  let currentImage = 0;
  let qty = 1;

  function galleryHTML() {
    return `
      <div class="gallery">
        <div class="gallery-thumbs" id="gallery-thumbs">
          ${product.images.map((img, i) => `
            <button class="${i === currentImage ? 'active' : ''}" data-i="${i}">
              <img src="${img}" alt="${product.name} ${i + 1}">
            </button>
          `).join('')}
        </div>
        <div class="gallery-main"><img src="${product.images[currentImage]}" alt="${product.name}" id="gallery-main-img"></div>
      </div>
    `;
  }

  function detailPanelHTML() {
    const wishlisted = Store.isWishlisted(product.id);
    return `
      <div class="product-title-block">
        <p class="eyebrow">${product.category} / ${product.subcategory}</p>
        <h1 class="serif">${product.name}</h1>
        <div class="price-block">
          <span class="price">${formatKES(product.price)}</span>
          ${product.oldPrice ? `<del>${formatKES(product.oldPrice)}</del>` : ''}
        </div>
        <p class="product-desc">${product.description}</p>
        <div class="spec-grid">
          <div><b>Material</b><p>${product.material}</p></div>
          <div><b>Colour</b><p>${product.colour}</p></div>
          <div><b>Dimensions</b><p>${product.dimensions}</p></div>
          <div><b>Availability</b><p>${product.stockStatus}</p></div>
        </div>
        <div class="qty-row">
          <div class="qty-stepper">
            <button id="qty-dec">${Icon('minus', 16)}</button>
            <span id="qty-value">${qty}</span>
            <button id="qty-inc">${Icon('plus', 16)}</button>
          </div>
          <button class="add-cart-btn" id="pdp-add-cart">${Icon('bag', 18)} Add to Cart</button>
          <button class="wishlist-toggle-btn ${wishlisted ? 'active' : ''}" id="pdp-wishlist" aria-label="Wishlist">${Icon('heart', 18)}</button>
        </div>
        <a class="ask-whatsapp-btn" id="pdp-whatsapp" target="_blank" rel="noreferrer">${Icon('message', 19)} Ask About This Product on WhatsApp</a>
      </div>
    `;
  }

  function relatedHTML() {
    const related = PRODUCTS.filter(x => x.category === product.category && x.id !== product.id).slice(0, 4);
    if (related.length === 0) return '';
    return `
      <section class="related">
        <h2 class="serif">You May Also Like</h2>
        <div class="product-grid">${related.map(productCardHTML).join('')}</div>
      </section>
    `;
  }

  function render() {
    main.innerHTML = `
      <div class="product-page">
        ${galleryHTML()}
        ${detailPanelHTML()}
      </div>
      <section class="pdp-details">
        <div>
          <h2 class="serif">Product Details</h2>
          <div class="detail-row">
            <div><b>Description</b><p>${product.description}</p></div>
            <div><b>Specifications</b><p>${product.material}, ${product.colour}, ${product.stockStatus}</p></div>
            <div><b>Dimensions</b><p>${product.dimensions}</p></div>
          </div>
        </div>
        <div>
          <h2 class="serif">Delivery &amp; Returns</h2>
          <p style="margin-top:20px;color:#777;font-size:13.5px;line-height:1.7;">Delivery information, scheduling, assembly and return conditions are confirmed with the customer after the WhatsApp order is received.</p>
        </div>
      </section>
      ${relatedHTML()}
    `;

    // Gallery thumb clicks
    document.getElementById('gallery-thumbs').addEventListener('click', e => {
      const btn = e.target.closest('button[data-i]');
      if (!btn) return;
      currentImage = Number(btn.dataset.i);
      document.getElementById('gallery-main-img').src = product.images[currentImage];
      document.getElementById('gallery-thumbs').querySelectorAll('button').forEach(b =>
        b.classList.toggle('active', Number(b.dataset.i) === currentImage));
    });

    // Quantity stepper
    document.getElementById('qty-dec').addEventListener('click', () => {
      qty = Math.max(1, qty - 1);
      document.getElementById('qty-value').textContent = qty;
    });
    document.getElementById('qty-inc').addEventListener('click', () => {
      qty = qty + 1;
      document.getElementById('qty-value').textContent = qty;
    });

    // Add to cart
    document.getElementById('pdp-add-cart').addEventListener('click', () => {
      Store.addToCart(product, qty);
      updateHeaderCounts();
      showToast(`${product.name} added to cart`);
    });

    // Wishlist toggle
    document.getElementById('pdp-wishlist').addEventListener('click', e => {
      const active = Store.toggleWishlist(product.id);
      e.currentTarget.classList.toggle('active', active);
      updateHeaderCounts();
    });

    // WhatsApp enquiry link
    const msg = `Hello, I am interested in:\n\n${product.name}\nPrice: ${formatKES(product.price)}\nProduct page: ${location.href}\n\nCould you please provide more information?`;
    document.getElementById('pdp-whatsapp').href = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;

    // Related product card events
    const relatedSection = main.querySelector('.related');
    if (relatedSection) initProductCardEvents(relatedSection);
  }

  render();
});
