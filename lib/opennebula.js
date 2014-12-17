var Modem = require('./modem');
var Host = require('./host');
var VM = require('./vm');

var OpenNebula = function(auth, hostname) {
  this.auth = auth;
  this.hostname = hostname;
  this.modem = new Modem(this.auth, this.hostname);
};


OpenNebula.prototype.getVM = function(id) {
  return new VM(this.modem, id);
};

OpenNebula.prototype.createVM = function(template, state, callback) {
  this.modem.call('vm.allocate', [template, state || false], function(err, data) {
    if (err) return callback(err);
    callback(null, new VM(this.modem, data));
  });
};

OpenNebula.prototype.getVMs = function(callback, userFilter, startID, endID, stateFilter) {
  this.modem.call('vmpool.info', [userFilter || -1, startID || -1, endID || -1, stateFilter || -1], function(err, data) {
    if (err) return callback(err);

    if (data.VM_POOL.isArray) {
      callback(null, data.VM_POOL);
    } else {
      callback(null, [data.VM_POOL.VM]);
    }
  });
};

OpenNebula.prototype.getHost = function(id) {
  return new Host(this.modem, id);
};

OpenNebula.prototype.getHosts = function(callback) {
  this.modem.call('hostpool.info', [], function(err, data) {
    if (err) return callback(err);

    if (data.HOST_POOL.isArray) {
      callback(null, data.HOST_POOL);
    } else {
      callback(null, [data.HOST_POOL.HOST]);
    }
  });
};

module.exports = OpenNebula;
