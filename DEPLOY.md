Deployment (prebuilt) — quick steps

1) Build locally
   npm run build

2) Create a zip of the `dist` directory (PowerShell):
   Compress-Archive -Path .\dist\* -DestinationPath site-dist.zip -Force

3) Open Appwrite Console -> Project -> Sites -> Yosr Academy V2 -> Deployments -> Upload
   - Upload `site-dist.zip` and activate the deployment
   - Set fallback file to `index.html` (single-page app)

Why this is recommended
- The Appwrite cloud build is failing due to an optional native Rollup module (`@rollup/rollup-linux-x64-musl`) that cannot be resolved in the environment. Uploading the prebuilt `dist` avoids server-side builds and makes deployment deterministic.

Alternative: If you want to use cloud builds, we set the install command to reliably remove lockfiles & node_modules and install without optional deps: `rm -rf node_modules package-lock.json && npm install --no-optional`, and the build command is `npx --yes vite build`. This often works but the prebuilt-upload is faster and more reliable.