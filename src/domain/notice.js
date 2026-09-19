// What the sample's notification says, kept out of the component so it can be
// tested alone. The app shows notifications with app.notifications.show()
// (Noctívago 0.1.238+). Rule of thumb: show one whenever your plugin does
// something the user didn't just ask for, like a background download.

export function libraryNotice(soundCount) {
  return {
    // Same key = a second notice replaces the first instead of stacking.
    key: 'sample-library',
    tone: soundCount === null ? 'error' : 'info',
    message: soundCount === null ? "Couldn't read your library." : librarySentence(soundCount),
    // Without timeoutMs it stays until closed. Use that for things that may
    // happen while nobody is looking; a short timeout suits a direct reply
    // to a click like this one.
    timeoutMs: 6000
  }
}

function librarySentence(count) {
  return `You have ${count} sound${count === 1 ? '' : 's'} in your library.`
}

// Older apps have no app.notifications; the ?. keeps the plugin working
// there (the button just hides). Or set "minAppVersion": "0.1.238".
export function canNotify(app) {
  return typeof app?.notifications?.show === 'function'
}
