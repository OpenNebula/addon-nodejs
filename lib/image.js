var Image = function(modem, id) {
  this.modem = modem;
  this.id = id;
};

Image.prototype.info = function(callback) {
  this.modem.call('image.info', [this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Image.prototype.update = function(content, whole, callback) {
  this.modem.call('image.update', [this.id, content, whole], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Image.prototype.clone = function(name, callback) {
  this.modem.call('image.clone', [this.id, name], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Image.prototype.delete = function(callback) {
  this.modem.call('image.delete', [this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Image.prototype.chown = function(owner, callback) {
  this.modem.call('image.chown', [this.id, owner, -1], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

Image.prototype.chgrp = function(group, callback) {
  this.modem.call('image.chown', [this.id, -1, group], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

Image.prototype.chmod = function(user_use, user_manage, user_admin, group_use, group_manage, group_admin, other_use, other_manage, other_admin, callback) {
  this.modem.call('image.chmod', [this.id, user_use, user_manage, user_admin, group_use, group_manage, group_admin, other_use, other_manage, other_admin], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

Image.prototype.rename = function(name, callback) {
  this.modem.call('image.rename', [this.id, name], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Image.prototype.persistent = function(persistent, callback) {
  this.modem.call('image.persistent', [this.id, persistent], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Image.prototype.chtype = function(type, callback) {
  this.modem.call('image.chtype', [this.id, type], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Image.prototype.enable = function(callback) {
  this.modem.call('image.enable', [this.id, true], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Image.prototype.disable = function(callback) {
  this.modem.call('image.enable', [this.id, false], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Image.prototype.lock = function(level, callback) {
  this.modem.call('image.lock', [this.id, level], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Image.prototype.unlock = function(callback) {
  this.modem.call('image.unlock', [this.id], function(err, data) {
      if(err) return callback(err);
      callback(null, data);
  });
};

module.exports = Image;
