const { app, BrowserWindow, WebContentsView, shell } = require('electron');

const MUSE_URL = 'https://muse.ai/';
const DIVIDER_WIDTH = 4;
const MIN_WIDTH = 980;
const MIN_HEIGHT = 620;

let win;
let leftView;
let rightView;

function configureView(view) {
  view.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https://') || url.startsWith('http://')) shell.openExternal(url);
    else if (url.startsWith('mailto:') || url.startsWith('tel:')) shell.openExternal(url);
    return { action: 'deny' };
  });
  view.webContents.on('will-navigate', (event, url) => {
    // Muse may redirect through authentication, account, or other HTTPS
    // endpoints. Keep normal web navigation inside the isolated pane instead
    // of sending redirects to the user's default browser.
    if (url.startsWith('https://') || url.startsWith('http://')) return;
    if (url.startsWith('mailto:') || url.startsWith('tel:')) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });
}

function layoutViews() {
  if (!win || win.isDestroyed() || !leftView || !rightView) return;
  const { width, height } = win.getContentBounds();
  const panelWidth = Math.floor((width - DIVIDER_WIDTH) / 2);
  leftView.setBounds({ x: 0, y: 0, width: panelWidth, height });
  rightView.setBounds({
    x: panelWidth + DIVIDER_WIDTH,
    y: 0,
    width: width - panelWidth - DIVIDER_WIDTH,
    height
  });
}

function createWindow() {
  win = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: MIN_WIDTH,
    minHeight: MIN_HEIGHT,
    title: 'Dual-Muse',
    backgroundColor: '#11182f',
    autoHideMenuBar: true,
    icon: `${__dirname}/assets/icon.png`,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  // Separate persistent partitions provide independent cookies, localStorage,
  // cache, service workers, and login sessions for each side.
  leftView = new WebContentsView({
    webPreferences: {
      partition: 'persist:dual-muse-left',
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });
  rightView = new WebContentsView({
    webPreferences: {
      partition: 'persist:dual-muse-right',
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  configureView(leftView);
  configureView(rightView);
  win.contentView.addChildView(leftView);
  win.contentView.addChildView(rightView);
  layoutViews();
  win.on('resize', layoutViews);

  leftView.webContents.loadURL(MUSE_URL);
  rightView.webContents.loadURL(MUSE_URL);

  win.on('closed', () => {
    win = null;
    leftView = null;
    rightView = null;
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
