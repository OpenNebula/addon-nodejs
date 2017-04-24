var Modem = require('./modem'),
  Host = require('./host'),
  VM = require('./vm'),
  Template = require('./template'),
  Cluster = require('./cluster'),
  Group = require('./group'),
  VNet = require('./vnet'),
  User = require('./user'),
  Datastore = require('./datastore'),
  Image = require('./image'),
  Zone = require('./zone'),
  Document = require('./document'),
  Vdc = require('./vdc');

var OpenNebula = function(auth, hostname) {
  this.auth = auth;
  this.hostname = hostname;
  this.modem = new Modem(this.auth, this.hostname);
};


OpenNebula.prototype.version = function(callback) {
  this.modem.call('system.version', [], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  }, true);
};

OpenNebula.prototype.config = function(callback) {
  this.modem.call('system.config', [], function(err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
};


//VM
OpenNebula.prototype.getVM = function(id) {
  return new VM(this.modem, id);
};

OpenNebula.prototype.createVM = function(template, state, callback) {
  var self = this;
  this.modem.call('vm.allocate', [template, state || false], function(err, data) {
    if (err) return callback(err);
    callback(null, new VM(self.modem, data));
  });
};

OpenNebula.prototype.getVMs = function(callback, userFilter, startID, endID, stateFilter) {
  this.modem.call('vmpool.info', [userFilter || -2, startID || -1, endID || -1, stateFilter || -1], function(err, data) {
    if (err) return callback(err);

    if (Array.isArray(data.VM_POOL)) {
      callback(null, data.VM_POOL);
    } else if(Array.isArray(data.VM_POOL.VM)) {
      callback(null, data.VM_POOL.VM);
    } else {
      callback(null, [data.VM_POOL.VM]);
    }
  });
};

//VDC
OpenNebula.prototype.getVdc = function(id) {
  return new Vdc(this.modem, id);
};

OpenNebula.prototype.createVdc = function(template, cluster, callback) {
  this.modem.call('vdc.allocate', [template, cluster || -1], function(err, data) {
    if(err) return callback(err);
    callback(null, new Vdc(this.modem, data));
  });
};

OpenNebula.prototype.getVdcs = function(callback) {
  this.modem.call('vdcpool.info', [], function(err, data) {
    if (err) return callback(err);

    if (Array.isArray(data.VDC_POOL)) {
      callback(null, data.VDC_POOL);
    } else if(Array.isArray(data.VDC_POOL.HOST)) {
      callback(null, data.VDC_POOL.HOST);
    } else {
      callback(null, [data.VDC_POOL.HOST]);
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

    if (Array.isArray(data.HOST_POOL)) {
      callback(null, data.HOST_POOL);
    } else if(Array.isArray(data.HOST_POOL.HOST)) {
      callback(null, data.HOST_POOL.HOST);
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

    if (Array.isArray(data.VMTEMPLATE_POOL)) {
      callback(null, data.VMTEMPLATE_POOL);
    } else if(Array.isArray(data.VMTEMPLATE_POOL.VMTEMPLATE)) {
      callback(null, data.VMTEMPLATE_POOL.VMTEMPLATE);
    } else {
      callback(null, [data.VMTEMPLATE_POOL.VMTEMPLATE]);
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

    if (Array.isArray(data.CLUSTER_POOL)) {
      callback(null, data.CLUSTER_POOL);
    } else if(Array.isArray(data.CLUSTER_POOL.CLUSTER)) {
      callback(null, data.CLUSTER_POOL.CLUSTER);
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

    if (Array.isArray(data.GROUP_POOL)) {
      callback(null, data.GROUP_POOL);
    } else if(Array.isArray(data.GROUP_POOL.GROUP)) {
      callback(null, data.GROUP_POOL.GROUP);
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

    if (Array.isArray(data.VNET_POOL)) {
      callback(null, data.VNET_POOL);
    } else if(Array.isArray(data.VNET_POOL.VNET)) {
      callback(null, data.VNET_POOL.VNET);
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

    if (Array.isArray(data.USER_POOL)) {
      callback(null, data.USER_POOL);
    } else if(Array.isArray(data.USER_POOL.USER)) {
      callback(null, data.USER_POOL.USER);
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

    if (Array.isArray(data.DATASTORE_POOL)) {
      callback(null, data.DATASTORE_POOL);
    } else if(Array.isArray(data.DATASTORE_POOL.DATASTORE)) {
      callback(null, data.DATASTORE_POOL.DATASTORE);
    } else {
      callback(null, [data.DATASTORE_POOL.DATASTORE]);
    }
  });
};

//IMAGE
OpenNebula.prototype.createImage = function(template, datastore, callback) {
  this.modem.call('image.allocate', [template, datastore], function(err, data) {
    if(err) return callback(err);
    callback(null, new Image(this.modem, data));
  });
};

OpenNebula.prototype.getImage = function(id) {
  return new Image(this.modem, id);
};

OpenNebula.prototype.getImages = function(callback, userFilter, startID, endID) {
  this.modem.call('imagepool.info', [userFilter || -1, startID || -1, endID || -1], function(err, data) {
    if (err) return callback(err);

    if (Array.isArray(data.IMAGE_POOL)) {
      callback(null, data.IMAGE_POOL);
    } else if(Array.isArray(data.IMAGE_POOL.IMAGE)) {
      callback(null, data.IMAGE_POOL.IMAGE);
    } else {
      callback(null, [data.IMAGE_POOL.IMAGE]);
    }
  });
};

//ZONE
OpenNebula.prototype.createZone = function(template, callback) {
  this.modem.call('zone.allocate', [template], function(err, data) {
    if(err) return callback(err);
    callback(null, new Zone(this.modem, data));
  });
};

OpenNebula.prototype.getZone = function(id) {
  return new Zone(this.modem, id);
};

OpenNebula.prototype.getZones = function(callback) {
  this.modem.call('zonepool.info', [], function(err, data) {
    if (err) return callback(err);

    if (Array.isArray(data.ZONE_POOL)) {
      callback(null, data.ZONE_POOL);
    } else if(Array.isArray(data.ZONE_POOL.ZONE)) {
      callback(null, data.ZONE_POOL.ZONE);
    } else {
      callback(null, [data.ZONE_POOL.ZONE]);
    }
  });
};

//DOCUMENT
OpenNebula.prototype.createDocument = function(template, type, callback) {
  this.modem.call('document.allocate', [template, type], function(err, data) {
    if(err) return callback(err);
    callback(null, new Document(this.modem, data));
  });
};

OpenNebula.prototype.getDocument = function(id) {
  return new Document(this.modem, id);
};

OpenNebula.prototype.getDocuments = function(type, callback, userFilter, startID, endID) {
  this.modem.call('documentpool.info', [userFilter || -1, startID || -1, endID || -1, type], function(err, data) {
    if (err) return callback(err);

    if (Array.isArray(data.DOCUMENT_POOL)) {
      callback(null, data.DOCUMENT_POOL);
    } else if(Array.isArray(data.DOCUMENT_POOL.DOCUMENT)) {
      callback(null, data.DOCUMENT_POOL.DOCUMENT);
    } else {
      callback(null, [data.DOCUMENT_POOL.DOCUMENT]);
    }
  });
};

module.exports = OpenNebula;
