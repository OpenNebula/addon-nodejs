var VM = function(modem, id) {
  this.modem = modem;
  this.id = id;
};

VM.prototype.info = function(callback) {
  this.modem.call('vm.info', [this.id], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.monitoring = function(callback) {
  this.modem.call('vm.monitoring', [this.id], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.action = function(action, callback) {
  this.modem.call('vm.action', [action, this.id], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.migrate = function(host, live, enforce, datastore, callback) {
  this.modem.call('vm.migrate', [this.id, host, live, enforce, datastore], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.saveAsDisk = function(disk, imagename, imagetype, snapshot, callback) {
  this.modem.call('vm.disksaveas', [this.id, disk, imagename, imagetype, snapshot], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.createDiskSnapshot = function(disk, snapshot, callback) {
  this.modem.call('vm.disksnapshotcreate', [this.id, disk, snapshot], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.updateConf = function(template, callback) {
  this.modem.call('vm.updateconf', [this.id, template], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.revertDiskSnapshot = function(disk, snapshot, callback) {
  this.modem.call('vm.disksnapshotrevert', [this.id, disk, snapshot], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.deleteDiskSnapshot = function(disk, snapshot, callback) {
  this.modem.call('vm.disksnapshotdelete', [this.id, disk, snapshot], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.deploy = function(host, datastore, enforce, callback) {
  this.modem.call('vm.deploy', [this.id, host, datastore, enforce], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.diskSnapshot = function(disk, name, type, imed, clone, callback) {
  this.modem.call('vm.savedisk', [this.id, disk, name, type, imed, clone], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.attachDisk = function(disk, callback) {
  this.modem.call('vm.attach', [this.id, disk], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.detachDisk = function(disk, callback) {
  this.modem.call('vm.detach', [this.id, disk], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.attachNIC = function(disk, callback) {
  this.modem.call('vm.attachnic', [this.id, disk], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.detachNIC = function(disk, callback) {
  this.modem.call('vm.detachnic', [this.id, disk], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.chown = function(owner, callback) {
  this.modem.call('vm.chown', [this.id, owner, -1], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.chgrp = function(group, callback) {
  this.modem.call('vm.chown', [this.id, -1, group], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.chmod = function(user_use, user_manage, user_admin, group_use, group_manage, group_admin, other_use, other_manage, other_admin, callback, recursive) {
  this.modem.call('vm.chmod', [this.id, user_use, user_manage, user_admin, group_use, group_manage, group_admin, other_use, other_manage, other_admin, callback, recursive || false], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.rename = function(name, callback) {
  this.modem.call('vm.rename', [this.id, name], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.createSnapshot = function(name, callback) {
  this.modem.call('vm.snapshotcreate', [this.id, name], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.deleteSnapshot = function(name, callback) {
  this.modem.call('vm.snapshotdelete', [this.id, snapshot], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.snapshotrevert = function(snapshot, callback) {
  this.modem.call('vm.snapshotrevert', [this.id, snapshot], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.resize = function(template, enforce, callback) {
  this.modem.call('vm.resize', [this.id, template, enforce], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.update = function(template, replace, callback) {
  this.modem.call('vm.update', [this.id, template, replace], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.recover = function(recover, callback) {
  this.modem.call('vm.recover', [this.id, recover], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.lock = function(level, callback) {
  this.modem.call('vm.lock', [this.id, level], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VM.prototype.unlock = function(callback) {
  this.modem.call('vm.unlock', [this.id], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

module.exports = VM;
