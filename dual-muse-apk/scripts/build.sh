#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
chmod +x ./gradlew
./gradlew --no-daemon assembleDebug
echo "APK: app/build/outputs/apk/debug/app-debug.apk"
