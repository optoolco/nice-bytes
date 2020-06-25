const test = require('@pre-bundled/tape')

const niceBytes = require('./index.js')

test('niceBytes()', (assert) => {
  assert.equal(niceBytes(10 * 200).text, '2.00kB')
  assert.equal(niceBytes(64 * 1024).text, '65.54kB')
  assert.equal(niceBytes(1024 * 1024 * 64).text, '67.11MB')

  assert.end()
})
