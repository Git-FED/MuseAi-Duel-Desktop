# Platform launch behavior

The Android app and the Windows desktop launcher share the Muse destination, but they launch differently:

- **Android app:** loads the bundled offline referral page at `file:///android_asset/site/index.html`.
- **Android referral buttons:** open `https://muse.ai/join` and the Discord invite in the system browser.
- **Windows desktop app:** Electron loads `https://muse.ai/` directly and requires an internet connection.
- **Token Town website:** the promotional page is `promotional.html`; its root `index.html` remains a lightweight Muse redirect.

The Android app is an unofficial wrapper and is not affiliated with muse.ai.
