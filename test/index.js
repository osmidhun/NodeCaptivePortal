var Sails = require('sails');
var Barrels = require('barrels');
var mocha= require('mocha');
var fixtures;
var barrels = new Barrels();
// Global before hook
before(function (done) {
  // Lift Sails with test database
  Sails.lift({
    log: {
      level: 'error'
    },
    models: {
      connection: 'test',
      migrate: 'drop'
    }
  }, function(err, sails) {
    if (err)
      return done(err);

   
    // Populate the DB    
    barrels.populate(function(err) {
      done(err, sails);
    });
  });
});

// Global after hook
after(function (done) {
  console.log();
  sails.lower(done);
});



