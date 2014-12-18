var Modem = require('./modem');
var Host = require('./host');
var VM = require('./vm');
var Template = require('./template');

var OpenNebula = function(auth, hostname) {
  this.auth = auth;
  this.hostname = hostname;
  this.modem = new Modem(this.auth, this.hostname);
};

//VM
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

//HOST
OpenNebula.prototype.getHost = function(id) {
  return new Host(this.modem, id);
};

OpenNebula.prototype.createHost = function(hostname, immad, vmmad, vnmad, cluster, callback) {
  this.modem.call('host.allocate', [hostname, immad, vmmad, vnmad, cluster || -1], function(err, data) {
    if(err) return callback(err);
    callback(null, new Host(this.modem, data));
  });
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


//TEMPLATE
OpenNebula.prototype.createTemplate = function(template, callback) {
  this.modem.call('template.allocate', [this.id, template], function(err, data) {
    if(err) return callback(err);
    callback(null, new Template(this.modem, data));
  });
};

OpenNebula.prototype.getTemplate = function(id) {
  return new Template(this.modem, id);
};

OpenNebula.prototype.getTemplates = function(callback, userFilter, startID, endID) {
  this.modem.call('templatepool.info', [userFilter || -1, startID || -1, endID || -1], function(err, data) {
    if (err) return callback(err);

    if (data.TEMPLATE_POOL.isArray) {
      callback(null, data.TEMPLATE_POOL);
    } else {
      callback(null, [data.TEMPLATE_POOL.VM]);
    }
  });
};

module.exports = OpenNebula;
