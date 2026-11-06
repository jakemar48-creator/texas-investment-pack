// Track checkout intent without changing link navigation or sending checkout details.
document.addEventListener('click', (event) => {
  const link = event.target.closest?.('a[href]');
  if (!link) return;
  const destination = new URL(link.href, document.baseURI);
  if (destination.hostname !== 'nestuge.com' || destination.pathname !== '/checkout') return;
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', 'ClickToNestuge');
  }
});
