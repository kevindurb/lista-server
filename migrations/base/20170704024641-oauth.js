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
  Promise.all([
    db.createTable('oauth_tokens', {
      id: {
        type: 'uuid',
        primaryKey: true,
        defaultValue: new String('uuid_generate_v4()'),
      },
      client_id: 'uuid',
      user_id: 'uuid',
      access_token: 'text',
      access_token_expires_on: 'datetime',
      refresh_token: 'text',
      refresh_token_expires_on: 'datetime',
      created_at: {
        type: 'datetime',
        defaultValue: new String('now()'),
      },
      updated_at: {
        type: 'datetime',
        defaultValue: new String('now()'),
      },
    }),
    db.createTable('oauth_clients', {
      id: {
        type: 'uuid',
        primaryKey: true,
        defaultValue: new String('uuid_generate_v4()'),
      },
      name: {
        type: 'text',
        unique: true,
      },
      secret: {
        type: 'uuid',
        unique: true,
        defaultValue: new String('uuid_generate_v4()'),
      },
      redirect_uri: 'text',
      created_at: {
        type: 'datetime',
        defaultValue: new String('now()'),
      },
      updated_at: {
        type: 'datetime',
        defaultValue: new String('now()'),
      },
    })
  ])
);

exports.down = db => (
  db.dropTable('users')
);

exports._meta = {
  "version": 1
};
