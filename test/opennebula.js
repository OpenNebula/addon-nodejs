var expect = require('chai').expect;
var one = require('./spec_helper').one;

describe("#opennebula", function() {

  describe("#getHosts", function() {
    it("should get host list", function(done) {
      this.timeout(5000);

      one.getHosts(function(err, hosts) {
        expect(err).to.be.null;
        expect(hosts).to.be.ok;
        expect(hosts).to.be.array;
        done();
      });

    });
  });

  describe("#getVMs", function() {
    it("should get vm list", function(done) {
      this.timeout(5000);

      one.getVMs(function(err, vms) {
        expect(err).to.be.null;
        expect(vms).to.be.ok;
        expect(vms).to.be.array;
        done();
      });

    });
  });

  describe("#getTemplates", function() {
    it("should get template list", function(done) {
      this.timeout(5000);

      one.getTemplates(function(err, templates) {
        expect(err).to.be.null;
        expect(templates).to.be.ok;
        expect(templates).to.be.array;
        done();
      });

    });
  });

  describe("#getImages", function() {
    it("should get images list", function(done) {
      this.timeout(5000);

      one.getImages(function(err, images) {
        expect(err).to.be.null;
        expect(images).to.be.ok;
        expect(images).to.be.array;
        done();
      });

    });
  });

  describe("#getDatastores", function() {
    it("should get datastores list", function(done) {
      this.timeout(5000);

      one.getDatastores(function(err, datastores) {
        expect(err).to.be.null;
        expect(datastores).to.be.ok;
        expect(datastores).to.be.array;
        done();
      });

    });
  });

});
