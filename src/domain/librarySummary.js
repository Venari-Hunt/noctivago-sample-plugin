// The plugin's rules, with no DOM, so they can be tested alone (test/).

export function librarySummary(soundCount) {
  if (soundCount === null) return 'Your library has … sounds.'
  return `Your library has ${soundCount} sound${soundCount === 1 ? '' : 's'}.`
}

export async function countSounds(library) {
  try {
    return (await library.list()).length
  } catch {
    return null
  }
}
