var assert = require('chai').assert

// Utlitiy function for easily appending to HTML
var Utils = {

  injectHTML: function(html) {
    document.body.insertAdjacentHTML('beforeend', html)
    return document.body.lastChild
  },

  repeat: function( func, count, delay, complete ) {
    var counter = 0
    var interval = setInterval( function() { 

      func()
      counter += 1 

      if ( count == counter ) {
        clearInterval( interval )
        if (complete) { complete() }
      }
    }, delay )
  },

  testInterval: function ( func, expression, options ) {

    options = Object.assign( {}, { count: 3, delay: 0 }, options )

    setTimeout( function() { 

      self.repeat( func, options.count, options.interval, function() {
        // Test that the count equals expected results
        // TODO: figure out how to test expressions async
        assert.equal( expression.call(), options.expected )
      })

    }, options.delay )

  }

}

var self = Utils

module.exports = Utils
