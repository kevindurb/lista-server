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
  db.createTable('lists', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
    },
    owner_id: 'int',
    name: 'text',
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
  db.dropTable('lists')
);

exports._meta = {
  "version": 1
};
