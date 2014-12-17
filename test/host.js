var expect = require('chai').expect;
var client = require('./spec_helper').client;

describe("#host", function() {

  describe("#hostsInfo", function() {
    it("should fetch hosts list", function(done) {
      this.timeout(5000);

      client.call('hostpool.info', [], function(error, data) {
        expect(data).not.to.be.null;

        console.log(data);

        done();
      });

    });

    it("should fetch host info", function(done) {
      this.timeout(5000);

      client.call('host.info', [1], function(error, data) {
        expect(data).not.to.be.null;

        console.log(data);

        done();
      });

    });
  });

});
