var assert = require('assert');
var  ProfileController= require('../../api/controllers/ProfileController');

// Here goes a module test
describe('Profile Controller', function() {
  describe('Create Profile', function() {
    it ('should  Render profile View', function() {
     var mockReq = null;
        var mockRes = {
          render: function(viewName) {
             assert.equal(viewName,'profile','Profile view is rendered!!');
          }
        };
        ProfileController.create(mockReq,mockRes);
    });
  });
});