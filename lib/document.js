var Document = function(modem, id) {
  this.modem = modem;
  this.id = id;
};

Document.prototype.info = function(callback) {
  this.modem.call('document.info', [this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Document.prototype.update = function(content, whole, callback) {
  this.modem.call('document.update', [this.id, content, whole], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Document.prototype.clone = function(name, callback) {
  this.modem.call('document.clone', [this.id, name], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Document.prototype.delete = function(callback) {
  this.modem.call('document.delete', [this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Document.prototype.chown = function(owner, callback) {
  this.modem.call('document.chown', [this.id, owner, -1], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

Document.prototype.chgrp = function(group, callback) {
  this.modem.call('document.chown', [this.id, -1, group], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

Document.prototype.chmod = function(user_use, user_manage, user_admin, group_use, group_manage, group_admin, other_use, other_manage, other_admin, callback) {
  this.modem.call('document.chmod', [this.id, user_use, user_manage, user_admin, group_use, group_manage, group_admin, other_use, other_manage, other_admin, callback], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

Document.prototype.rename = function(name, callback) {
  this.modem.call('document.rename', [this.id, name], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

module.exports = Document;
