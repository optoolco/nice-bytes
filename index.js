module.exports = function niceBytes (bytes) {
  bytes = Number(bytes)

  const divider = 1000
  const magnitude = Math.log(bytes) / Math.log(divider) | 0
  const result = (bytes / Math.pow(divider, magnitude))
  const fixed = result.toFixed(2)

  const suffix = magnitude
    ? ('kMGTPEZY'[magnitude - 1]) + 'B' : 'B'

  return {
    suffix: suffix,
    magnitude: magnitude,
    result: result,
    fixed: fixed
  }
}
