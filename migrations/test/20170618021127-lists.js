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

const listColumns = [
  'name',
  'owner_id',
];

const lists = [
  ['test1', 1], ['test2', 1], ['test3', 1], ['test4', 1], ['test5', 1],
  ['test1', 2], ['test2', 2], ['test3', 2], ['test4', 2], ['test5', 2],
  ['test1', 3], ['test2', 3], ['test3', 3], ['test4', 3], ['test5', 3],
  ['test1', 4], ['test2', 4], ['test3', 4], ['test4', 4], ['test5', 4],
  ['test1', 5], ['test2', 5], ['test3', 5], ['test4', 5], ['test5', 5],
  ['test1', 6], ['test2', 6], ['test3', 6], ['test4', 6], ['test5', 6],
  ['test1', 7], ['test2', 7], ['test3', 7], ['test4', 7], ['test5', 7],
  ['test1', 8], ['test2', 8], ['test3', 8], ['test4', 8], ['test5', 8],
  ['test1', 9], ['test2', 9], ['test3', 9], ['test4', 9], ['test5', 9],
  ['test1', 10], ['test2', 10], ['test3', 10], ['test4', 10], ['test5', 10],
];

exports.up = db => (
  Promise.all([
    lists.map(listData => (
      db.insert('lists', listColumns, listData, () => null)
    ))
  ])
);

exports.down = db => (
  db.runSql('truncate table lists')
);

exports._meta = {
  "version": 1
};
