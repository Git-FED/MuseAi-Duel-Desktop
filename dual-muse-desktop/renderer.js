for (const view of document.querySelectorAll('webview')) {
  view.addEventListener('new-window', (event) => {
    event.preventDefault();
  });
}
