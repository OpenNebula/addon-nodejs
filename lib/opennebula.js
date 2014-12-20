var Modem = require('./modem'),
  Host = require('./host'),
  VM = require('./vm'),
  Template = require('./template'),
  Cluster = require('./cluster'),
  Group = require('./group'),
  VNet = require('./vnet'),
  User = require('./user'),
  Datastore = require('./datastore');

var OpenNebula = function(auth, hostname) {
  this.auth = auth;
  this.hostname = hostname;
  this.modem = new Modem(this.auth, this.hostname);
};

//VM
OpenNebula.prototype.getVM = function(id) {
  return new VM(this.modem, id);
};

OpenNebula.prototype.createVM = function(template, state, callback) {
  this.modem.call('vm.allocate', [template, state || false], function(err, data) {
    if (err) return callback(err);
    callback(null, new VM(this.modem, data));
  });
};

OpenNebula.prototype.getVMs = function(callback, userFilter, startID, endID, stateFilter) {
  this.modem.call('vmpool.info', [userFilter || -1, startID || -1, endID || -1, stateFilter || -1], function(err, data) {
    if (err) return callback(err);

    if (data.VM_POOL.isArray) {
      callback(null, data.VM_POOL);
    } else {
      callback(null, [data.VM_POOL.VM]);
    }
  });
};

//HOST
OpenNebula.prototype.getHost = function(id) {
  return new Host(this.modem, id);
};

OpenNebula.prototype.createHost = function(hostname, immad, vmmad, vnmad, cluster, callback) {
  this.modem.call('host.allocate', [hostname, immad, vmmad, vnmad, cluster || -1], function(err, data) {
    if(err) return callback(err);
    callback(null, new Host(this.modem, data));
  });
};

OpenNebula.prototype.getHosts = function(callback) {
  this.modem.call('hostpool.info', [], function(err, data) {
    if (err) return callback(err);

    if (data.HOST_POOL.isArray) {
      callback(null, data.HOST_POOL);
    } else {
      callback(null, [data.HOST_POOL.HOST]);
    }
  });
};


//TEMPLATE
OpenNebula.prototype.createTemplate = function(template, callback) {
  this.modem.call('template.allocate', [template], function(err, data) {
    if(err) return callback(err);
    callback(null, new Template(this.modem, data));
  });
};

OpenNebula.prototype.getTemplate = function(id) {
  return new Template(this.modem, id);
};

OpenNebula.prototype.getTemplates = function(callback, userFilter, startID, endID) {
  this.modem.call('templatepool.info', [userFilter || -1, startID || -1, endID || -1], function(err, data) {
    if (err) return callback(err);

    if (data.TEMPLATE_POOL.isArray) {
      callback(null, data.TEMPLATE_POOL);
    } else {
      callback(null, [data.TEMPLATE_POOL.TEMPLATE]);
    }
  });
};


//CLUSTER
OpenNebula.prototype.createCluster = function(name, callback) {
  this.modem.call('cluster.allocate', [name], function(err, data) {
    if(err) return callback(err);
    callback(null, new Cluster(this.modem, data));
  });
};

OpenNebula.prototype.getCluster = function(id) {
  return new Cluster(this.modem, id);
};

OpenNebula.prototype.getClusters = function(callback) {
  this.modem.call('clusterpool.info', [], function(err, data) {
    if (err) return callback(err);

    if (data.CLUSTER_POOL.isArray) {
      callback(null, data.CLUSTER_POOL);
    } else {
      callback(null, [data.CLUSTER_POOL.CLUSTER]);
    }
  });
};


//GROUP
OpenNebula.prototype.createGroup = function(name, callback) {
  this.modem.call('group.allocate', [name], function(err, data) {
    if(err) return callback(err);
    callback(null, new Group(this.modem, data));
  });
};

OpenNebula.prototype.getGroup = function(id) {
  return new Group(this.modem, id);
};

OpenNebula.prototype.getGroups = function(callback) {
  this.modem.call('grouppool.info', [], function(err, data) {
    if (err) return callback(err);

    if (data.GROUP_POOL.isArray) {
      callback(null, data.GROUP_POOL);
    } else {
      callback(null, [data.GROUP_POOL.GROUP]);
    }
  });
};

//VNET
OpenNebula.prototype.createVNet = function(template, cluster, callback) {
  this.modem.call('vn.allocate', [template, cluster], function(err, data) {
    if(err) return callback(err);
    callback(null, new VNet(this.modem, data));
  });
};

OpenNebula.prototype.getVNet = function(id) {
  return new VNet(this.modem, id);
};

OpenNebula.prototype.getVNets = function(callback, userFilter, startID, endID) {
  this.modem.call('vnpool.info', [userFilter || -1, startID || -1, endID || -1], function(err, data) {
    if (err) return callback(err);

    if (data.VNET_POOL.isArray) {
      callback(null, data.VNET_POOL);
    } else {
      callback(null, [data.VNET_POOL.VNET]);
    }
  });
};

//USER
OpenNebula.prototype.createUser = function(username, password, driver, callback) {
  this.modem.call('user.allocate', [username, password, driver], function(err, data) {
    if(err) return callback(err);
    callback(null, new User(this.modem, data));
  });
};

OpenNebula.prototype.login = function(username, token, period, callback) {
  this.modem.call('user.login', [username, token || '', period], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

OpenNebula.prototype.getUser = function(id) {
  return new User(this.modem, id);
};

OpenNebula.prototype.getUsers = function(callback) {
  this.modem.call('userpool.info', [], function(err, data) {
    if (err) return callback(err);

    if (data.USER_POOL.isArray) {
      callback(null, data.USER_POOL);
    } else {
      callback(null, [data.USER_POOL.USER]);
    }
  });
};

//DATASTORE
OpenNebula.prototype.createDatastore = function(template, cluster, callback) {
  this.modem.call('datastore.allocate', [template, cluster], function(err, data) {
    if(err) return callback(err);
    callback(null, new Datastore(this.modem, data));
  });
};

OpenNebula.prototype.getDatastore = function(id) {
  return new Datastore(this.modem, id);
};

OpenNebula.prototype.getDatastores = function(callback) {
  this.modem.call('datastorepool.info', [], function(err, data) {
    if (err) return callback(err);

    if (data.DATASTORE_POOL.isArray) {
      callback(null, data.DATASTORE_POOL);
    } else {
      callback(null, [data.DATASTORE_POOL.DATASTORE]);
    }
  });
};

module.exports = OpenNebula;
