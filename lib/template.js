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
  this.modem.call('template.instantiate', [this.id, name, state || false, template || ''], function(err, data) {
    if(err) return callback(err);
    callback(null, new VM(this.modem, data));
  });
};

Template.prototype.allocate = function(template, callback) {
  this.modem.call('template.allocate', [this.id, template], function(err, data) {
    if(err) return callback(err);
    callback(null, new VM(this.modem, data));
  });
};

Template.prototype.clone = function(name, callback) {
  this.modem.call('template.clone', [this.id, name], function(err, data) {
    if(err) return callback(err);
    callback(null, new VM(this.modem, data));
  });
};

module.exports = Template;
