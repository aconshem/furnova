/* ============================================================
   FURNOVA — cart & wishlist state (localStorage, no framework)
   ============================================================ */

const Store = {
  CART_KEY: 'furnova-cart',
  WISHLIST_KEY: 'furnova-wishlist',

  getCart() {
    try { return JSON.parse(localStorage.getItem(this.CART_KEY) || '[]'); }
    catch (e) { return []; }
  },
  saveCart(cart) {
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
  },
  addToCart(product, qty = 1) {
    const cart = this.getCart();
    const existing = cart.find(i => i.id === product.id);
    if (existing) existing.quantity += qty;
    else cart.push({ ...product, quantity: qty });
    this.saveCart(cart);
  },
  removeFromCart(id) {
    this.saveCart(this.getCart().filter(i => i.id !== id));
  },
  updateQuantity(id, qty) {
    const cart = this.getCart().map(i => i.id === id ? { ...i, quantity: Math.max(1, qty) } : i);
    this.saveCart(cart);
  },
  clearCart() {
    this.saveCart([]);
  },
  cartTotal() {
    return this.getCart().reduce((s, i) => s + i.price * i.quantity, 0);
  },
  cartCount() {
    return this.getCart().reduce((s, i) => s + i.quantity, 0);
  },

  getWishlist() {
    try { return JSON.parse(localStorage.getItem(this.WISHLIST_KEY) || '[]'); }
    catch (e) { return []; }
  },
  saveWishlist(list) {
    localStorage.setItem(this.WISHLIST_KEY, JSON.stringify(list));
  },
  toggleWishlist(id) {
    let w = this.getWishlist();
    w = w.includes(id) ? w.filter(x => x !== id) : [...w, id];
    this.saveWishlist(w);
    return w.includes(id);
  },
  isWishlisted(id) {
    return this.getWishlist().includes(id);
  }
};
