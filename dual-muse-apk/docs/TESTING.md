# Testing

## Emulator install

1. Build with `bash scripts/build.sh`.
2. Install with `adb install -r app/build/outputs/apk/debug/app-debug.apk`.
3. Launch **Muse Number Two** from the app drawer.

## Offline acceptance checklist

- App opens with airplane mode on.
- `MainActivity` loads `file:///android_asset/site/index.html`.
- The full referral page renders without a network connection.
- The favicon and CSS/JavaScript are present in the bundled site.
- Promo GIFs animate; reduced-motion behavior remains usable.
- Referral code `5F2V31` is visible.
- The Muse join and Discord buttons open in the system browser when connectivity is available.
- Back button goes through WebView history.
- Launcher icon resources exist for all density buckets.

The instrumentation test verifies that the launched WebView points at the bundled asset entry point. Visual and airplane-mode checks remain emulator acceptance tests.
