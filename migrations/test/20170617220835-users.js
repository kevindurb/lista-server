'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

const password = '$2a$10$WBn4ckXDbH22LvSCWArcxuq0RBV77RFnYrO.XJol/tZsyfPYv08wO';

const userColumns = [
  'username',
  'name',
  'password_digest',
];

const users = [
  ['usr0', password],
  ['usr1', password],
  ['usr2', password],
  ['usr3', password],
  ['usr4', password],
  ['usr5', password],
  ['usr6', password],
  ['usr7', password],
  ['usr8', password],
  ['usr9', password],
];

exports.up = db => (
  Promise.all(
    users.map((userData) => (
      db.insert('users', userColumns, userData, () => null)
    ))
  )
);

exports.down = db => (
  db.runSql('truncate table users')
);

exports._meta = {
  "version": 1
};
