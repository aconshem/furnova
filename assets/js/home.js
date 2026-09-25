/* ============================================================
   FURNOVA — home page logic
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('hero-img').src = IMAGES.hero;

  // Category grid
  const categoryGrid = document.getElementById('category-grid');
  categoryGrid.innerHTML = CATEGORIES.map(c => `
    <a class="cat-card" href="shop.html?category=${encodeURIComponent(c.name)}">
      <div class="cat-img"><img src="${c.image}" alt="${c.name}" loading="lazy"></div>
      <h3>${c.name}</h3>
      <p>${c.description}</p>
    </a>
  `).join('');

  // Featured products
  const featuredGrid = document.getElementById('featured-grid');
  renderProductGrid(featuredGrid, PRODUCTS.filter(p => p.isFeatured));

  // New arrivals
  const newGrid = document.getElementById('new-grid');
  renderProductGrid(newGrid, PRODUCTS.filter(p => p.isNew).slice(0, 4));

  initProductCardEvents(document.body);

  // Room highlight grid
  const rooms = [
    ['Living Room', IMAGES.living, 'Comfortable pieces for slow mornings and good conversations.'],
    ['Bedroom', IMAGES.bedroom, 'Create a restful retreat that feels entirely yours.'],
    ['Dining Room', IMAGES.dining, 'Gather around furniture built for everyday moments.'],
    ['Home Office', IMAGES.office, 'Make focused work feel considered and comfortable.']
  ];
  document.getElementById('room-grid').innerHTML = rooms.map(([name, img, desc]) => `
    <div class="room-card">
      <img src="${img}" alt="${name}" loading="lazy">
      <div class="room-card-text">
        <h3 class="serif">${name}</h3>
        <p>${desc}</p>
        <a href="shop.html">Explore Collection →</a>
      </div>
    </div>
  `).join('');

  // Why choose us
  const features = [
    ['check', 'Quality Furniture'],
    ['truck', 'Delivery Available'],
    ['message', 'Easy WhatsApp Ordering'],
    ['headphones', 'Customer Support']
  ];
  document.getElementById('feature-grid').innerHTML = features.map(([icon, title]) => `
    <div class="feature-card">
      <div class="feature-icon">${Icon(icon, 21)}</div>
      <h3>${title}</h3>
      <p>Thoughtful service from browsing to delivery.</p>
    </div>
  `).join('');

  // Reviews
  document.getElementById('review-grid').innerHTML = REVIEWS.map(r => `
    <div class="review-card">
      <div class="review-stars">${Array.from({ length: r.rating }).map(() => Icon('star', 15)).join('')}</div>
      <p class="quote">"${r.review}"</p>
      <p class="name">${r.name}</p>
      <p class="loc">${r.location}</p>
    </div>
  `).join('');

  // Inspiration grid
  document.getElementById('inspo-grid').innerHTML = IMAGES.inspiration.map((x, i) => `
    <img src="${x}" alt="Furniture inspiration ${i + 1}" loading="lazy">
  `).join('');

  // Newsletter (demo only — no backend)
  document.getElementById('newsletter-form').addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('newsletter-note').hidden = false;
    e.target.reset();
  });
});
