var Zone = function(modem, id) {
  this.modem = modem;
  this.id = id;
};

Zone.prototype.info = function(callback) {
  this.modem.call('zone.info', [this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Zone.prototype.update = function(content, whole, callback) {
  this.modem.call('zone.update', [this.id, content, whole], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Zone.prototype.delete = function(callback) {
  this.modem.call('zone.delete', [this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Zone.prototype.rename = function(name, callback) {
  this.modem.call('zone.rename', [this.id, name], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

module.exports = Zone;
