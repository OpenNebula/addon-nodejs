var VNet = function(modem, id) {
  this.modem = modem;
  this.id = id;
};

VNet.prototype.info = function(callback) {
  this.modem.call('vn.info', [this.id], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VNet.prototype.update = function(content, whole, callback) {
  this.modem.call('vn.update', [this.id, content, whole], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VNet.prototype.addRange = function(content, callback) {
  this.modem.call('vn.add_ar', [this.id, content], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VNet.prototype.delRange = function(range, callback) {
  this.modem.call('vn.rm_ar', [this.id, range], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VNet.prototype.freeRange = function(range, callback) {
  this.modem.call('vn.free_ar', [this.id, range], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VNet.prototype.reserve = function(template, callback) {
  this.modem.call('vn.reserve', [this.id, template], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VNet.prototype.updateRange = function(template, callback) {
  this.modem.call('vn.update_ar', [this.id, template], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VNet.prototype.hold = function(template, callback) {
  this.modem.call('vn.hold', [this.id, template], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VNet.prototype.release = function(template, callback) {
  this.modem.call('vn.release', [this.id, template], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VNet.prototype.delete = function(callback) {
  this.modem.call('vn.delete', [this.id], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VNet.prototype.chown = function(owner, callback) {
  this.modem.call('vn.chown', [this.id, owner, -1], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VNet.prototype.chgrp = function(group, callback) {
  this.modem.call('vn.chown', [this.id, -1, group], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VNet.prototype.chmod = function(user_use, user_manage, user_admin, group_use, group_manage, group_admin, other_use, other_manage, other_admin, callback) {
  this.modem.call('vn.chmod', [this.id, user_use, user_manage, user_admin, group_use, group_manage, group_admin, other_use, other_manage, other_admin, callback], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

VNet.prototype.rename = function(name, callback) {
  this.modem.call('vn.rename', [this.id, name], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

module.exports = VNet;
