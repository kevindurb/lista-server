const log = require('debug')('lista:log');

module.exports = {
  log: name => x => {
    log(name, x);
    return x;
  },
};
