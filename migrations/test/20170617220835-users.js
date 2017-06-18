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
  ['usr0', 'name0', password],
  ['usr1', 'name1', password],
  ['usr2', 'name2', password],
  ['usr3', 'name3', password],
  ['usr4', 'name4', password],
  ['usr5', 'name5', password],
  ['usr6', 'name6', password],
  ['usr7', 'name7', password],
  ['usr8', 'name8', password],
  ['usr9', 'name9', password],
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
