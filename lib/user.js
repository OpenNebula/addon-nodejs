var User = function(modem, id) {
  this.modem = modem;
  this.id = id;
};

User.prototype.info = function(callback) {
  this.modem.call('user.info', [this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

User.prototype.update = function(content, whole, callback) {
  this.modem.call('user.update', [this.id, content, whole], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

User.prototype.delete = function(callback) {
  this.modem.call('user.delete', [this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

User.prototype.chgrp = function(group, callback) {
  this.modem.call('user.chgrp', [this.id, group], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

User.prototype.passwd = function(password, callback) {
  this.modem.call('user.passwd', [this.id, password], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

User.prototype.chauth = function(driver, password, callback) {
  this.modem.call('user.chauth', [this.id, driver, password || ''], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

User.prototype.quota = function(template, callback) {
  this.modem.call('user.quota', [this.id, template], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

User.prototype.addgroup = function(group, callback) {
  this.modem.call('user.addgroup', [this.id, group], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

User.prototype.delgroup = function(group, callback) {
  this.modem.call('user.delgroup', [this.id, group], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

module.exports = User;
