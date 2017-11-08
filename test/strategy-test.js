const vows = require('vows')
const assert = require('assert')
const util = require('util')
const GoogleStrategy = require('passport-google/strategy')

vows.describe('GoogleStrategy').addBatch({
  
  'strategy': {
    topic: () => new GoogleStrategy(
      { returnURL: 'https://www.example.com/auth/google/return' },
      () => void 0
    ),
    
    'should be named google': strategy => {
      assert.equal(strategy.name, 'google')
    },
    'should have correct provider URL': strategy => {
      assert.equal(strategy._providerURL, 'https://www.google.com/accounts/o8/id')
    },
  },
  
}).export(module)
