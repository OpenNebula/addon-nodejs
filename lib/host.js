var Host = function(modem, id) {
  this.modem = modem;
  this.id = id;
};

Host.prototype.info = function(callback) {
  this.modem.call('host.info', [this.id], function(err, data) {
    if(err) return callback(err);
    callback(null, data);
  });
};

Host.prototype.enable = function(callback) {
  //TODO
};

Host.prototype.disable = function(callback) {
  //TODO
};

Host.prototype.update = function(callback) {
  //TODO
};

Host.prototype.allocate = function(callback) {
  //TODO
};

Host.prototype.delete = function(callback) {
  //TODO
};

Host.prototype.rename = function(callback) {
  //TODO
};

module.exports = Host;
