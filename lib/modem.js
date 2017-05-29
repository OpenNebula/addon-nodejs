var url = require('url');
var rpc = require('xmlrpc');
var xml2js = require('xml2js');

var Modem = function(auth, hostname, namespace) {
  var parsedHostname = url.parse(hostname);
  this.auth = auth;
  this.hostname = hostname;
  this.protocol = parsedHostname.protocol;
  this.namespace = namespace || 'one.';
};


Modem.prototype.call = function(action, params, callback, ignore) {
  var fparams = [this.auth];
  fparams = fparams.concat(params || []);

  var xmlClient;
  if(this.protocol === 'https:') {
    xmlClient = rpc.createSecureClient(this.hostname);
  } else {
    xmlClient = rpc.createClient(this.hostname);
  }

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
