# Decisions

- The Android app is the product. Token Town is downstream promotional/checkout material.
- The app runs an offline bundle under `app/src/main/assets/site`.
- No live site is required at runtime for the bundled app shell.
- The favicon and comedic promo GIFs are app assets, not merely website decorations.
- Referral code `5F2V31` is baked into the in-app page.
- Signing keystore is local only and must never be committed.
- GitHub Actions builds the APK on every push.
- The wrapper is unofficial and must not claim affiliation with muse.ai.
