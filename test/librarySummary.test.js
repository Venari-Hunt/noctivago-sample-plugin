import { test } from 'node:test'
import assert from 'node:assert/strict'
import { librarySummary, countSounds } from '../src/domain/librarySummary.js'

test('summary pluralizes and handles an unknown count', () => {
  assert.equal(librarySummary(1), 'Your library has 1 sound.')
  assert.equal(librarySummary(3), 'Your library has 3 sounds.')
  assert.equal(librarySummary(null), 'Your library has … sounds.')
})

test('countSounds returns null when the library call fails', async () => {
  assert.equal(await countSounds({ list: async () => [1, 2] }), 2)
  assert.equal(await countSounds({ list: async () => { throw new Error('x') } }), null)
})
