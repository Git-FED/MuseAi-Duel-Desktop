for (const view of document.querySelectorAll('webview')) {
  view.addEventListener('dom-ready', () => {
    view.setZoomFactor(1);
  });
  view.addEventListener('new-window', (event) => {
    event.preventDefault();
  });
}
