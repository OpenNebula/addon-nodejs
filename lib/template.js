var VM = require('./vm');

var Template = function(modem, id) {
  this.modem = modem;
  this.id = id;
};

Template.prototype.info = function(callback) {
  this.modem.call('template.info', [this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Template.prototype.update = function(content, whole, callback) {
  this.modem.call('template.update', [this.id, content, whole], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Template.prototype.instantiate = function(name, state, template, callback) {
  var self = this;
  this.modem.call('template.instantiate', [this.id, name, state || false, template || ''], function(err, data) {
    if(err) return callback(err);
    callback(null, new VM(self.modem, data));
  });
};

Template.prototype.clone = function(name, callback) {
  this.modem.call('template.clone', [this.id, name], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Template.prototype.delete = function(callback) {
  this.modem.call('template.delete', [this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Template.prototype.chown = function(owner, callback) {
  this.modem.call('template.chown', [this.id, owner, -1], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

Template.prototype.chgrp = function(group, callback) {
  this.modem.call('template.chown', [this.id, -1, group], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

Template.prototype.chmod = function(user_use, user_manage, user_admin, group_use, group_manage, group_admin, other_use, other_manage, other_admin, callback) {
  this.modem.call('template.chmod', [this.id, user_use, user_manage, user_admin, group_use, group_manage, group_admin, other_use, other_manage, other_admin, callback], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};

Template.prototype.rename = function(name, callback) {
  this.modem.call('template.rename', [this.id, name], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

module.exports = Template;
