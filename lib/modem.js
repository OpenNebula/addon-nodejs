var rpc = require('xmlrpc');

var Modem = function(secret, endpoint, namespace) {
  this.oneAuth = secret;
  this.oneEndPoint = endpoint;
  this.namespace = namespace || 'one.';
};


Modem.prototype.call = function(action, other_params, callback) {
  var params = [this.oneAuth];
  params = params.concat(other_params || []);
  var xmlClient = rpc.createClient(this.oneEndPoint);

  xmlClient.methodCall(this.namespace + action, params, function(error, value) {
    if (error) return callback(error);

    var success = Boolean(value[0]);
    var message = value[1];

    if (success === false) {
      return callback(new Error(message));
    }

    callback(undefined, value);
  });
};

module.exports = Modem;
