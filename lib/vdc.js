var Vdc = function(modem, id) {
  this.modem = modem;
  this.id = id;
};

Vdc.prototype.allocate = function(template, cluster, callback) {
  this.modem.call('vdc.allocate', [template, cluster], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Vdc.prototype.delete = function(callback) {
  this.modem.call('vdc.delete', [this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Vdc.prototype.rename = function(name, callback) {
  this.modem.call('vdc.rename', [this.id, name], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Vdc.prototype.update = function(template, merge, callback) {
  this.modem.call('vdc.update', [this.id, template, merge], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Vdc.prototype.info = function(callback) {
  this.modem.call('vdc.info', [this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Vdc.prototype.addGroup = function(groupid, callback) {
  this.modem.call('vdc.addgroup', [this.id, groupid], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Vdc.prototype.delGroup = function(groupid, callback) {
  this.modem.call('vdc.delgroup', [this.id, groupid], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Vdc.prototype.addCluster = function(zoneid, clusterid, callback) {
  this.modem.call('vdc.addcluster', [this.id, zoneid, clusterid], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Vdc.prototype.delCluster = function(zoneid, clusterid, callback) {
  this.modem.call('vdc.delcluster', [this.id, zoneid, clusterid], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Vdc.prototype.addHost = function(zoneid, hostid, callback) {
  this.modem.call('vdc.delcluster', [this.id, zoneid, clusterid], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Vdc.prototype.delHost = function(zoneid, hostid, callback) {
  this.modem.call('vdc.delhost', [this.id, zoneid, clusterid], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Vdc.prototype.addDatastore = function(zoneid, datastoreid, callback) {
  this.modem.call('vdc.adddatastore', [this.id, zoneid, datastoreid], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Vdc.prototype.delDatastore = function(zoneid, datastoreid, callback) {
  this.modem.call('vdc.deldatastore', [this.id, zoneid, datastoreid], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Vdc.prototype.addVnet = function(zoneid, venetid, callback) {
  this.modem.call('vdc.addvnet', [this.id, zoneid, venetid], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Vdc.prototype.delVnet = function(zoneid, venetid, callback) {
  this.modem.call('vdc.delvnet', [this.id, zoneid, venetid], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};


module.exports = Vdc;
