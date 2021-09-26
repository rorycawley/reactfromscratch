/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
// eslint-disable-next-line no-undef
const THIS_FILE = fs.readFileSync(__filename)

module.exports = {
  getCacheKey: (fileData, filename, configString, { instrument }) => {
    return crypto
      .createHash('md5')
      .update(THIS_FILE)
      .update('\0', 'utf8')
      .update(fileData)
      .update('\0', 'utf8')
      .update(filename)
      .update('\0', 'utf8')
      .update(configString)
      .update('\0', 'utf8')
      .update(instrument ? 'instrument' : '')
      .digest('hex')
  },
  process: (_, filename) => {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`
  },
}
