var OpenNebula = require('../lib/opennebula');
var one = new OpenNebula(process.env.ONE_CREDENTIALS, process.env.ONE_HOST);

one.getVMs(function(err, data) {
  console.log(data);
});

one.getHosts(function(err, data) {
  console.log(data);
});
