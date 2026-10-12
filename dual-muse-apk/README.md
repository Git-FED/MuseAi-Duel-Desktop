# Muse Number Two — Android Muse launcher

The Android APK opens the live Muse website at `https://muse.ai/` inside its WebView. All HTTP(S) pages and redirects stay inside the app, including Muse authentication and account endpoints. Only external mail and telephone links open through the system handler.

The project also retains the bundled referral page and assets under `app/src/main/assets/site/` for the referral experience and supporting resources. This is an unofficial wrapper and is not affiliated with muse.ai.


## Build

```bash
bash scripts/build.sh
```

A complete build requires Android SDK tooling and Gradle/Android Studio. The GitHub Actions workflow assembles and uploads a debug APK on each push.

## Windows desktop app

The `desktop-electron/` folder builds a Windows Electron installer and portable app. The desktop app also opens `https://muse.ai/` and requires an internet connection.
