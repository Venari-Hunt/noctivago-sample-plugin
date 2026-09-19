# Noctívago sample plugin

A starting point for [Noctívago](https://github.com/Venari-Hunt/Noctivago) plugins. It adds a **Sample** tab that shows how many sounds are in your library, written in React.

## Make your own

1. Click **Use this template** (or copy this repo) and rename it.
2. In `manifest.json`, set your own `id`, `name`, `author` and `description`. The `id` is lowercase letters, digits and dashes.
3. Run `npm install`, then `npm run build`. That writes `main.js`.
4. To try it, copy `manifest.json` and `main.js` into `%APPDATA%\noctivago\plugins\<your-id>\` and restart Noctívago.

The plugin API is in `types/plugin.d.ts` and explained in [docs/plugins.md](https://github.com/Venari-Hunt/Noctivago/blob/master/docs/plugins.md).

## Notifications

The app has built-in notifications (bottom-left of the window), and your plugin can show them:

```js
this.app.notifications?.show({ message: 'Rain pack downloaded.', tone: 'success' })
```

- **When:** whenever your plugin does something the user didn't just ask for (a background download, an automatic change, an error nobody saw). That's the app's own rule.
- **Options:** `tone` (`info`, `success`, `error`), `title` (defaults to your plugin's name), `key` (a second notice with the same key replaces the first), `timeoutMs` (leave it out and it stays until closed), `actions` (buttons: `[{ label, onClick }]`).
- **Older apps:** notifications need Noctívago 0.1.238 or newer. Either call it with `?.` as above, so it does nothing on an older app, or set `"minAppVersion": "0.1.238"` in `manifest.json`.

The Sample tab's **Show a notification** button is a working example: `src/domain/notice.js` builds the message, `src/components/NotifyButton.jsx` shows it.

## How to organize your code

Please keep the layout this template uses. Every screen in Noctívago is built this way, including the app's own plugins ([CONTRIBUTING.md](https://github.com/Venari-Hunt/Noctivago/blob/master/CONTRIBUTING.md#code-conventions)):

```
src/
  index.jsx      entry: the plugin class, registers the tab
  domain/        what the plugin does: rules and utilities, no DOM
  components/    the interface: small React components, one job each
test/            tests for domain/ (npm test)
```

- **domain/** holds the logic. It never touches the page, so you can test it with plain `node --test` and debug it without opening the app.
- **components/** only display things and pass user actions to domain/. Split a component when it starts doing two jobs, instead of growing one big file.
- Canvas drawing (waveforms, meters) is fine inside a component.

The release workflow runs `npm test` before publishing, so a failing test stops a broken release.

## Release it

1. Bump `version` in `manifest.json`, and add the same version to `versions.json` with your `minAppVersion`.
2. Commit, then push a tag equal to that version: `git tag 1.0.1 && git push origin 1.0.1`.
3. `.github/workflows/release.yml` builds `main.js` and publishes the GitHub Release the app installs from.

To list it in the app's Browse window, open a pull request on [noctivago-plugins](https://github.com/Venari-Hunt/noctivago-plugins).
