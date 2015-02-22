var rpc = require('xmlrpc');
var xml2js = require('xml2js');

var Modem = function(auth, hostname, namespace) {
  this.auth = auth;
  this.hostname = hostname;
  this.namespace = namespace || 'one.';
};


Modem.prototype.call = function(action, params, callback, ignore) {
  var fparams = [this.auth];
  fparams = fparams.concat(params || []);
  
  var clientOptions = {
    host: this.hostname
    , port: 2633
    , path: '/RPC2'
  }
  
  var xmlClient = rpc.createClient(clientOptions);

  xmlClient.methodCall(this.namespace + action, fparams, function(error, value) {
    if (error) return callback(error);

    var success = Boolean(value[0]);
    var message = value[1];

    if (success === false) {
      return callback(new Error(message));
    }

    if(!ignore && typeof message === 'string' && message.length > 0) {
      xml2js.parseString(message, {
        'explicitArray': false
      }, function(err, result) {
        if (err) return callback(new Error('error parsing xml'));
        callback(null, result);
      });
    } else {
      callback(null, message || {});
    }

  });
};

module.exports = Modem;
