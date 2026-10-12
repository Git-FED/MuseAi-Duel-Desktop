# Dual-Muse desktop wrapper and Android launcher

<img width="1421" height="889" alt="Screenshot 2026-10-12 190934" src="https://github.com/user-attachments/assets/1c239771-1ca1-4886-b29c-14ff099a1e20" />

This package includes an unofficial Android Muse launcher and a Dual-Muse Electron desktop wrapper. The desktop app opens **two completely separate Muse browser instances side by side** in one split-screen window using two native Electron webviews.

Each side uses its own persistent Electron session partition:

- Left browser: `persist:dual-muse-left`
- Right browser: `persist:dual-muse-right`

That means each side has independent cookies, local storage, cache, service workers, and login state. You can sign into different Muse accounts—or keep two independent Muse sessions—at the same time.

Both desktop instances open `https://muse.ai/`. Normal HTTP(S) navigation stays inside each isolated pane; explicit external links open in the system browser.

The Android project is under `dual-muse-apk/`. It opens `https://muse.ai/` in an Android WebView and keeps all HTTP(S) redirects—including authentication and account redirects—inside the app. Only mail and telephone links use external system handlers.

## Run the desktop app locally

```bash
cd dual-muse-desktop
npm ci
npm start
```

## Build Windows installers

```bash
cd dual-muse-desktop
npm ci
npm run dist
```

The build produces NSIS installer and portable Windows artifacts under `dual-muse-desktop/dist/`.

## Build the Android APK

```bash
cd dual-muse-apk
bash scripts/build.sh
```

## Branding assets

The desktop app includes:

- `dual-muse-desktop/assets/icon.png` — Linux/runtime icon
- `dual-muse-desktop/assets/icon.ico` — Windows installer and shortcut icon
- `dual-muse-desktop/assets/favicon.png` — favicon-sized web asset
- `dual-muse-desktop/assets/favicon.ico` — browser favicon

This is an unofficial wrapper and is not affiliated with muse.ai.
