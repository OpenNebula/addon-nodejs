var Cluster = function(modem, id) {
  this.modem = modem;
  this.id = id;
};

Cluster.prototype.info = function(callback) {
  this.modem.call('cluster.info', [this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Cluster.prototype.update = function(content, whole, callback) {
  this.modem.call('cluster.update', [this.id, content, whole], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Cluster.prototype.delete = function(callback) {
  this.modem.call('cluster.delete', [this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Cluster.prototype.rename = function(name, callback) {
  this.modem.call('cluster.rename', [this.id, name], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Cluster.prototype.addHost = function(host, callback) {
  this.modem.call('cluster.addhost', [this.id, host], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Cluster.prototype.delHost = function(host, callback) {
  this.modem.call('cluster.delhost', [this.id, host], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Cluster.prototype.addDatastore = function(datastore, callback) {
  this.modem.call('cluster.adddatastore', [this.id, datastore], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Cluster.prototype.delDatastore = function(datastore, callback) {
  this.modem.call('cluster.deldatastore', [this.id, datastore], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Cluster.prototype.addVnet = function(vnet, callback) {
  this.modem.call('cluster.addvnet', [this.id, vnet], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Cluster.prototype.delVnet = function(vnet, callback) {
  this.modem.call('cluster.delvnet', [this.id, vnet], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

module.exports = Cluster;
