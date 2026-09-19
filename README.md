# Noctívago sample plugin

A starting point for [Noctívago](https://github.com/Venari-Hunt/Noctivago) plugins. It adds a **Sample** tab that shows how many sounds are in your library, written in React.

## Make your own

1. Click **Use this template** (or copy this repo) and rename it.
2. In `manifest.json`, set your own `id`, `name`, `author` and `description`. The `id` is lowercase letters, digits and dashes.
3. Run `npm install`, then `npm run build`. That writes `main.js`.
4. To try it, copy `manifest.json` and `main.js` into `%APPDATA%\Noctívago\plugins\<your-id>\` and restart Noctívago.

The plugin API is in `types/plugin.d.ts` and explained in [docs/plugins.md](https://github.com/Venari-Hunt/Noctivago/blob/master/docs/plugins.md).

## Release it

1. Bump `version` in `manifest.json`, and add the same version to `versions.json` with your `minAppVersion`.
2. Commit, then push a tag equal to that version: `git tag 1.0.1 && git push origin 1.0.1`.
3. `.github/workflows/release.yml` builds `main.js` and publishes the GitHub Release the app installs from.

To list it in the app's Browse window, open a pull request on [noctivago-plugins](https://github.com/Venari-Hunt/noctivago-plugins).
