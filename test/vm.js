var expect = require('chai').expect;
var one = require('./spec_helper').one;


describe("#vm", function() {

  describe("#vmInfo", function() {
    it("should fetch vm info", function(done) {
      this.timeout(5000);

      var vm = one.getVM(122);

      vm.info(function(error, data) {
        expect(error).to.be.null;
        expect(data).to.be.ok;
        done();
      });

    });

    it("should reboot vm", function(done) {
      this.timeout(5000);

      var vm = one.getVM(64);

      vm.action('reboot', function(error, data) {
        expect(error).to.be.null;
        expect(data).to.be.ok;
        done();
      });

    });
  });

});
