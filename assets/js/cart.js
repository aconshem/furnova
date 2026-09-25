/* ============================================================
   FURNOVA — cart page
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('cart-main');
  const modal = document.getElementById('details-modal');

  document.getElementById('modal-submit-btn').innerHTML = `${Icon('message', 18)} Open WhatsApp`;

  function render() {
    const cart = Store.getCart();
    const total = Store.cartTotal();

    if (cart.length === 0) {
      main.innerHTML = `
        <div class="empty-cart">
          <h1 class="serif">Your cart is empty</h1>
          <p>Find something beautiful for your space.</p>
          <a href="shop.html" class="btn btn-dark">Continue Shopping</a>
        </div>
      `;
      return;
    }

    main.innerHTML = `
      <h1 class="serif">Your Cart</h1>
      <div class="cart-layout">
        <div id="cart-lines">
          ${cart.map(i => `
            <div class="cart-line" data-id="${i.id}">
              <img src="${i.images[0]}" alt="${i.name}">
              <div class="cart-line-info">
                <a href="product.html?slug=${i.slug}">${i.name}</a>
                <p class="cart-line-price">${formatKES(i.price)}</p>
                <div class="cart-line-row">
                  <div class="qty-stepper">
                    <button data-action="dec" data-id="${i.id}">${Icon('minus', 14)}</button>
                    <span>${i.quantity}</span>
                    <button data-action="inc" data-id="${i.id}">${Icon('plus', 14)}</button>
                  </div>
                  <button class="remove-line-btn" data-action="remove" data-id="${i.id}" aria-label="Remove">${Icon('trash', 18)}</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        <aside class="order-summary">
          <h2>Order Summary</h2>
          <div class="summary-row"><span>Subtotal</span><span>${formatKES(total)}</span></div>
          <div class="summary-row"><span>Delivery</span><span>Calculated based on location</span></div>
          <div class="summary-total"><span>Total</span><span>${formatKES(total)}</span></div>
          <button class="btn btn-whatsapp" id="open-details-btn" style="margin-top:22px;">${Icon('message', 18)} Order Via WhatsApp</button>
          <a href="shop.html" class="continue-link">Continue Shopping</a>
        </aside>
      </div>
    `;

    document.getElementById('cart-lines').addEventListener('click', e => {
      const btn = e.target.closest('button[data-action]');
      if (!btn) return;
      const id = btn.dataset.id;
      const item = Store.getCart().find(i => i.id === id);
      if (!item) return;
      if (btn.dataset.action === 'inc') Store.updateQuantity(id, item.quantity + 1);
      if (btn.dataset.action === 'dec') {
        if (item.quantity <= 1) Store.removeFromCart(id);
        else Store.updateQuantity(id, item.quantity - 1);
      }
      if (btn.dataset.action === 'remove') Store.removeFromCart(id);
      updateHeaderCounts();
      render();
    });

    document.getElementById('open-details-btn').addEventListener('click', () => {
      modal.classList.add('open');
    });
  }

  document.getElementById('close-modal').addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });

  document.getElementById('details-form').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('cf-name').value.trim();
    const phone = document.getElementById('cf-phone').value.trim();
    const loc = document.getElementById('cf-location').value.trim();
    const notes = document.getElementById('cf-notes').value.trim();
    if (!name || !phone || !loc) return;

    const cart = Store.getCart();
    const total = Store.cartTotal();
    let lines = `Hello, I would like to place an order.\n\nCustomer Name: ${name}\nPhone: ${phone}\nDelivery Location: ${loc}\n\nORDER:\n\n`;
    cart.forEach((i, n) => {
      lines += `${n + 1}. ${i.name}\nQuantity: ${i.quantity}\nUnit Price: ${formatKES(i.price)}\nSubtotal: ${formatKES(i.price * i.quantity)}\n\n`;
    });
    lines += `Subtotal:\n${formatKES(total)}\n\nDelivery: Calculated based on location\n\nAdditional Notes: ${notes || 'None'}\n\nThank you.`;

    window.open(`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(lines)}`, '_blank');
    modal.classList.remove('open');
  });

  render();
});
