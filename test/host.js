var expect = require('chai').expect;
var one = require('./spec_helper').one;


describe("#host", function() {

  describe("#hostInfo", function() {
    it("should fetch host info", function(done) {
      this.timeout(5000);

      var host = one.getHost(1);

      host.info(function(err, data) {
        expect(err).to.be.null;
        expect(data).to.be.ok;
        done();
      });

    });
  });

});
