import { test } from 'node:test'
import assert from 'node:assert/strict'
import { libraryNotice, canNotify } from '../src/domain/notice.js'

test('library notice: count, or an error when unknown', () => {
  assert.equal(libraryNotice(1).message, 'You have 1 sound in your library.')
  assert.equal(libraryNotice(4).message, 'You have 4 sounds in your library.')
  assert.equal(libraryNotice(4).tone, 'info')
  assert.equal(libraryNotice(null).tone, 'error')
  assert.equal(libraryNotice(2).key, libraryNotice(3).key)
})

test('canNotify is false on apps without notifications', () => {
  assert.equal(canNotify({ notifications: { show() {} } }), true)
  assert.equal(canNotify({}), false)
  assert.equal(canNotify(undefined), false)
})
