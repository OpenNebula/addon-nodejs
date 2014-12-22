var expect = require('chai').expect;
var one = require('./spec_helper').one;

describe("#opennebula", function() {

  describe("#version", function() {
    it("should get version", function(done) {
      this.timeout(10000);

      one.version(function(err, version) {
        expect(err).to.be.null;
        expect(version).to.be.ok;
        done();
      });

    });
  });

  describe("#config", function() {
    it("should get config", function(done) {
      this.timeout(10000);

      one.config(function(err, config) {
        expect(err).to.be.null;
        expect(config).to.be.ok;
        done();
      });

    });
  });

  describe("#getHosts", function() {
    it("should get host list", function(done) {
      this.timeout(10000);

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
      this.timeout(10000);

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
      this.timeout(10000);

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
      this.timeout(10000);

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
      this.timeout(10000);

      one.getDatastores(function(err, datastores) {
        expect(err).to.be.null;
        expect(datastores).to.be.ok;
        expect(datastores).to.be.array;
        done();
      });

    });
  });

  describe("#getUsers", function() {
    it("should get users list", function(done) {
      this.timeout(10000);

      one.getUsers(function(err, users) {
        expect(err).to.be.null;
        expect(users).to.be.ok;
        expect(users).to.be.array;
        done();
      });

    });
  });

  describe("#getVNets", function() {
    it("should get vnets list", function(done) {
      this.timeout(10000);

      one.getVNets(function(err, vnets) {
        expect(err).to.be.null;
        expect(vnets).to.be.ok;
        expect(vnets).to.be.array;
        done();
      });

    });
  });

  describe("#getGroups", function() {
    it("should get groups list", function(done) {
      this.timeout(10000);

      one.getGroups(function(err, groups) {
        expect(err).to.be.null;
        expect(groups).to.be.ok;
        expect(groups).to.be.array;
        done();
      });

    });
  });

  describe("#getZones", function() {
    it("should get zones list", function(done) {
      this.timeout(10000);

      one.getZones(function(err, zones) {
        expect(err).to.be.null;
        expect(zones).to.be.ok;
        expect(zones).to.be.array;
        done();
      });

    });
  });

});
