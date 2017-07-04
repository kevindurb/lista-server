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
  db.createTable('items', {
    id: {
      type: 'uuid',
      primaryKey: true,
      defaultValue: new String('uuid_generate_v4()'),
    },
    list_id: 'uuid',
    title: 'text',
    description: 'text',
    done: {
      type: 'boolean',
      defaultValue: false,
      notNull: false,
    },
    created_at: {
      type: 'datetime',
      defaultValue: new String('now()'),
    },
    updated_at: {
      type: 'datetime',
      defaultValue: new String('now()'),
    },
  })
);

exports.down = db => (
  db.dropTable('items')
);

exports._meta = {
  "version": 1
};
