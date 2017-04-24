var Group = function(modem, id) {
  this.modem = modem;
  this.id = id;
};

Group.prototype.info = function(callback) {
  this.modem.call('group.info', [this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Group.prototype.update = function(content, whole, callback) {
  this.modem.call('group.update', [this.id, content, whole], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Group.prototype.delete = function(callback) {
  this.modem.call('group.delete', [this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Group.prototype.quota = function(template, callback) {
  this.modem.call('group.quota', [this.id, template], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Group.prototype.addAdmin = function(group, user, callback) {
  this.modem.call('group.addadmin', [this.id, group, user], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Group.prototype.delAdmin = function(group, user, callback) {
  this.modem.call('group.deladmin', [this.id, group, user], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Group.prototype.addProvider = function(group, zone, cluster, callback) {
  this.modem.call('group.addprovider', [this.id, group, zone, cluster], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Group.prototype.delProvider = function(group, zone, cluster, callback) {
  this.modem.call('group.delprovider', [this.id, group, zone, cluster], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

module.exports = Group;
