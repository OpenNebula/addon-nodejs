var expect = require('chai').expect;
var spec = require('./spec_helper');
var one = spec.one;


describe("#host", function() {

  describe("#hostInfo", function() {
    it("should fetch host info", function(done) {
      this.timeout(5000);

      var host = one.getHost(spec.defaultHost);

      host.info(function(err, data) {
        expect(err).to.be.null;
        expect(data).to.be.ok;
        done();
      });

    });
  });

});
