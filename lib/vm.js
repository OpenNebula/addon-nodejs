var VM = function(modem, id) {
  this.modem = modem;
  this.id = id;
};

VM.prototype.info = function(callback) {
  this.modem.call('vm.info', [this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.action = function(action, callback) {
  this.modem.call('vm.action', [action, this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.deploy = function(host, datastore, enforce, callback) {
  this.modem.call('vm.deploy', [this.id, host, datastore, enforce], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.snapshot = function(disk, name, type, imed, clone, callback) {
  this.modem.call('vm.savedisk', [this.id, disk, name, type, imed, clone], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.attachDisk = function(disk, callback) {
  this.modem.call('vm.attach', [this.id, disk], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.detachDisk = function(disk, callback) {
  this.modem.call('vm.detach', [this.id, disk], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.attachNIC = function(disk, callback) {
  this.modem.call('vm.attachnic', [this.id, disk], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.detachNIC = function(disk, callback) {
  this.modem.call('vm.detachnic', [this.id, disk], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

module.exports = VM;
