/* ============================================================
   FURNOVA — shop page: filter, search, sort (client-side)
   ============================================================ */

const SHOP_CATEGORIES = ['All', 'Living Room', 'Bedroom', 'Dining', 'Office', 'Outdoor', 'Storage', 'Decor'];

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(location.search);

  const state = {
    search: params.get('search') || '',
    category: params.get('category') || 'All',
    sort: 'Featured',
    max: 200000
  };

  document.getElementById('filter-toggle-icon').innerHTML = Icon('sliders', 16);

  const catList = document.getElementById('category-filter-list');
  catList.innerHTML = SHOP_CATEGORIES.map(c => `<button data-cat="${c}">${c}</button>`).join('');

  const searchInput = document.getElementById('shop-search');
  const sortSelect = document.getElementById('shop-sort');
  const priceRange = document.getElementById('price-range');
  const priceLabel = document.getElementById('price-range-label');
  const resultsEl = document.getElementById('shop-results');
  const filtersEl = document.getElementById('filters');

  searchInput.value = state.search;
  priceRange.value = state.max;

  function syncActiveCategoryButton() {
    catList.querySelectorAll('button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.cat === state.category);
    });
  }

  function render() {
    const q = state.search.toLowerCase();
    let filtered = PRODUCTS.filter(p =>
      (state.category === 'All' || p.category === state.category) &&
      p.price <= state.max &&
      `${p.name} ${p.category} ${p.description} ${p.tags.join(' ')}`.toLowerCase().includes(q)
    );

    filtered = filtered.slice().sort((x, y) => {
      if (state.sort === 'Price: Low to High') return x.price - y.price;
      if (state.sort === 'Price: High to Low') return y.price - x.price;
      if (state.sort === 'Name A-Z') return x.name.localeCompare(y.name);
      if (state.sort === 'Newest') return Number(y.isNew) - Number(x.isNew);
      return Number(y.isFeatured) - Number(x.isFeatured);
    });

    if (filtered.length === 0) {
      resultsEl.innerHTML = `
        <div class="empty-state">
          <h2>No products found</h2>
          <p>Try another search or clear your filters.</p>
          <button class="btn btn-dark" id="clear-filters-btn">Clear filters</button>
        </div>
      `;
      document.getElementById('clear-filters-btn').addEventListener('click', () => {
        state.search = ''; state.category = 'All'; state.max = 200000;
        searchInput.value = ''; priceRange.value = 200000;
        priceLabel.textContent = 'Up to KSh 200,000';
        syncActiveCategoryButton();
        render();
      });
    } else {
      resultsEl.innerHTML = `<div class="product-grid">${filtered.map(productCardHTML).join('')}</div>`;
    }

    syncActiveCategoryButton();
  }

  catList.addEventListener('click', e => {
    const btn = e.target.closest('button[data-cat]');
    if (!btn) return;
    state.category = btn.dataset.cat;
    render();
  });

  searchInput.addEventListener('input', e => {
    state.search = e.target.value;
    render();
  });

  sortSelect.addEventListener('change', e => {
    state.sort = e.target.value;
    render();
  });

  priceRange.addEventListener('input', e => {
    state.max = Number(e.target.value);
    priceLabel.textContent = `Up to KSh ${state.max.toLocaleString('en-KE')}`;
    render();
  });

  document.getElementById('filter-toggle').addEventListener('click', () => {
    filtersEl.classList.toggle('open');
  });

  initProductCardEvents(resultsEl);

  render();
});
