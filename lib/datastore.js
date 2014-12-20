var Datastore = function(modem, id) {
  this.modem = modem;
  this.id = id;
};

Datastore.prototype.info = function(callback) {
  this.modem.call('datastore.info', [this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Datastore.prototype.update = function(content, whole, callback) {
  this.modem.call('datastore.update', [this.id, content, whole], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Datastore.prototype.delete = function(callback) {
  this.modem.call('datastore.delete', [this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Datastore.prototype.chown = function(owner, callback) {
  this.modem.call('datastore.chown', [this.id, owner, -1], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

Datastore.prototype.chgrp = function(group, callback) {
  this.modem.call('datastore.chown', [this.id, -1, group], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

Datastore.prototype.chmod = function(user_use, user_manage, user_admin, group_use, group_manage, group_admin, other_use, other_manage, other_admin, callback) {
  this.modem.call('datastore.chmod', [this.id, user_use, user_manage, user_admin, group_use, group_manage, group_admin, other_use, other_manage, other_admin, callback], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

Datastore.prototype.rename = function(name, callback) {
  this.modem.call('datastore.rename', [this.id, name], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

module.exports = Datastore;
