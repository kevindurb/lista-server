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

exports.up = db => (
  db.createTable('users', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: 'text',
      unique: true,
    },
    name: 'text',
    password_digest: 'text',
    created_at: {
      type: 'datetime',
      defaultValue: 'now()',
    },
    updated_at: {
      type: 'datetime',
      defaultValue: 'now()',
    },
  })
);

exports.down = db => (
  db.dropTable('users')
);

exports._meta = {
  "version": 1
};