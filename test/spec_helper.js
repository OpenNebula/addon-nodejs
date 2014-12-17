var Modem = require('../lib/modem');

var modem = new Modem(process.env.ONE_CREDENTIALS, process.env.ONE_HOST);

module.exports = {
  'client': modem
};
