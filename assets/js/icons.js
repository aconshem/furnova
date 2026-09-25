/* ============================================================
   FURNOVA — inline icon set
   Simple hand-drawn outline icons so the site needs no icon
   package. Usage: Icon('heart', 18, 'my-class')
   ============================================================ */

function Icon(name, size = 20, cls = '') {
  const common = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="icon ${cls}"`;
  const paths = {
    menu: '<line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/>',
    x: '<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><line x1="16.2" y1="16.2" x2="21" y2="21"/>',
    heart: '<path d="M12 20.5s-7.5-4.6-10-9.3C.5 8 2 4.5 5.4 4c2-.3 3.7.6 4.9 2.2l1.7 2.1 1.7-2.1C15 4.6 16.7 3.7 18.6 4c3.4.5 4.9 4 3.4 7.2-2.5 4.7-10 9.3-10 9.3z"/>',
    bag: '<path d="M6 8h12l1 13H5L6 8z"/><path d="M9 8V6a3 3 0 016 0v2"/>',
    phone: '<path d="M5 4h3l1.5 4-2 1.5a12 12 0 006 6l1.5-2 4 1.5v3c0 1-1 2-2 2-8 0-14-6-14-14 0-1 1-2 2-2z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3.5 6l8.5 7 8.5-7"/>',
    pin: '<path d="M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.3"/>',
    message: '<path d="M4 5h16v11H9l-4 3.5V16H4z"/>',
    arrowRight: '<line x1="4" y1="12" x2="19" y2="12"/><path d="M13 6l6 6-6 6"/>',
    arrowUpRight: '<line x1="6" y1="18" x2="18" y2="6"/><path d="M9 6h9v9"/>',
    check: '<path d="M4.5 12.5l5 5 10-11"/>',
    truck: '<rect x="2" y="7" width="12" height="9"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="6.5" cy="18" r="1.6"/><circle cx="16.5" cy="18" r="1.6"/>',
    headphones: '<path d="M4 15v-3a8 8 0 0116 0v3"/><rect x="2.5" y="14" width="4" height="6" rx="1.2"/><rect x="17.5" y="14" width="4" height="6" rx="1.2"/>',
    star: '<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9 6.8 19.7l1-5.9-4.3-4.1 5.9-.8L12 3.5z"/>',
    sliders: '<line x1="5" y1="4" x2="5" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/><line x1="19" y1="4" x2="19" y2="20"/><circle cx="5" cy="9" r="1.8"/><circle cx="12" cy="15" r="1.8"/><circle cx="19" cy="6.5" r="1.8"/>',
    minus: '<line x1="5" y1="12" x2="19" y2="12"/>',
    plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    trash: '<path d="M4 7h16"/><path d="M9 7V4.5h6V7"/><path d="M6 7l1 13h10l1-13"/>',
    whatsapp: '<path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-1.5-.7-2.5-1.3-3.5-3-.3-.5.3-.4.7-1.4.1-.2.1-.4 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.5-.3z" fill="currentColor" stroke="none"/><path d="M12 2a10 10 0 00-8.6 15L2 22l5.1-1.3A10 10 0 1012 2z"/>'
  };
  return `<svg ${common}>${paths[name] || ''}</svg>`;
}
