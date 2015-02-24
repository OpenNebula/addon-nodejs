var OpenNebula = require('../lib/opennebula');

var one = new OpenNebula(process.env.ONE_CREDENTIALS, process.env.ONE_HOST);

module.exports = {
  'one': one,
  'defaultTemplate': 4,
  'defaultHost': 1
};
