const vows = require('vows')
const assert = require('assert')
const util = require('util')
const google = require('passport-google')

vows.describe('passport-google').addBatch({

  'module': {
    'should report a version': () => {
      assert.isString(google.version)
    },
  },
  
}).export(module)
