var expect = require('chai').expect;
var one = require('./spec_helper').one;


describe("#vm", function() {


  describe("#createVM", function() {
    it("should create a vm", function(done) {
      this.timeout(5000);

      one.createVM('GRAPHICS=[TYPE="vnc",LISTEN="0.0.0.0"]\nMEMORY="512"\nVCPU="1"\nOS=[ARCH="x86_64"]\n NIC=[NETWORK="cloud"]\nCPU="0.5"\n DISK=[IMAGE="ttylinux",IMAGE_UNAME="oneadmin"]\n', false, function(err, vm) {
        expect(err).to.be.null;
        expect(vm).to.be.ok;

        vm.info(function(err, data) {
          expect(err).to.be.null;
          expect(data).to.be.ok;

          vm.action('delete', function(err, data) {
            expect(err).to.be.null;
            expect(data).to.be.ok;
            done();
          });
        });
      });

    });
  });
});
