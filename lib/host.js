var Host = function(modem, id) {
  this.modem = modem;
  this.id = id;
};

Host.prototype.info = function(callback) {
  this.modem.call('host.info', [this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Host.prototype.enable = function(callback) {
  this.modem.call('host.enable', [this.id, true], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Host.prototype.monitoring = function(callback) {
  this.modem.call('host.monitoring', [this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Host.prototype.disable = function(callback) {
  this.modem.call('host.enable', [this.id, false], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Host.prototype.update = function(template, merge, callback) {
  this.modem.call('host.update', [this.id, template, merge], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Host.prototype.allocate = function(hostname, manager, vm, cluster, callback) {
  this.modem.call('host.allocate', [this.id, hostname, manager, vm, cluster], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Host.prototype.delete = function(callback) {
  this.modem.call('host.delete', [this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Host.prototype.setStatus = function(status, callback) {
  this.modem.call('host.status', [this.id, status], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Host.prototype.rename = function(name, callback) {
  this.modem.call('host.rename', [this.id, name], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

module.exports = Host;
