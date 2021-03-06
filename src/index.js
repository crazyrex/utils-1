// eslint-disable-next-line no-underscore-dangle
if (!global._babelPolyfill) {
  // eslint-disable-next-line global-require
  require('@babel/polyfill')
}
// eslint-disable-next-line global-require
// require('source-map-support/register')

const base = require('./base')
const common = require('./common')
const constants = require('./constants')
const data = require('./data')
const error = require('./error')
const fetch = require('./fetch')
const fs = require('./fs')
const ip = require('./ip')
const lang = require('./lang')
const logic = require('./logic')
const path = require('./path')
const string = require('./string')

module.exports = {
  ...base,
  ...common,
  ...constants,
  ...data,
  ...error,
  ...fetch,
  ...fs,
  ...ip,
  ...lang,
  ...logic,
  ...path,
  ...string
}
