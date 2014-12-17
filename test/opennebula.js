var expect = require('chai').expect;
var one = require('./spec_helper').one;

describe("#opennebula", function() {

  describe("#createVM", function() {
    it("should create a vm", function(done) {
      this.timeout(5000);

      var host = one.createVM('GRAPHICS=[TYPE="vnc",LISTEN="0.0.0.0"]\nMEMORY="1024"\n FROM_APP="53e767ba8fb81d6a69000001"\nVCPU="1"\nFROM_APP_NAME="CentOS 6.5 - KVM"\nOS=[ARCH="x86_64"]\n NIC=[NETWORK="private"]\nLOGO="images/logos/centos.png"\nCPU="0.5"\n DISK=[IMAGE="CentOS-6.5-one-4.8",IMAGE_UNAME="oneadmin"]\n', false, function(err, vm) {
        expect(err).to.be.null;
        expect(vm).to.be.ok;
        done();
      });

    });
  });

});
