# nice-bytes

Pretty format a number as bytes

## Example

```js
const niceBytes = require('nice-bytes')

niceBytes(64 * 1024).text // '65.54kB'
```

## Documentation

The `niceBytes` function returns meta information about how
to format the text.

### `const info = niceBytes(bytes)`

Given a number `bytes` it returns an `info` object with

 - `suffix` ; a string like `B` or `MB` or `kB`
 - `magnitude` ; same as suffic but as a number
 - `result` ; the amount of mb / kb / gb etc.
 - `fixed` ; same as result but fixed to two digits as a string
 - `text` ; The text format ( fixed + suffix ).

## install

```
% npm install nice-bytes
```

## MIT Licensed
