var expect = require('chai').expect;
var spec = require('./spec_helper');
var one = spec.one;


describe("#template", function() {

  describe("#templateInfo", function() {
    it("should fetch vm info", function(done) {
      this.timeout(5000);

      var template = one.getTemplate(spec.defaultTemplate);

      template.info(function(err, data) {
        expect(err).to.be.null;
        expect(data).to.be.ok;
        done();
      });

    });

    it("should create a vm from template", function(done) {
      this.timeout(5000);

      var template = one.getTemplate(spec.defaultTemplate);

      template.instantiate('test_one', undefined, undefined, function(err, vm) {
        expect(err).to.be.null;
        expect(vm).to.be.ok;

        vm.action('delete', function(err, data) {
          expect(err).to.be.null;
          expect(data).to.be.ok;
          done();
        });
      });

    });
  });

});
