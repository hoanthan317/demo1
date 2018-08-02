const mysql = require('mysql'), async = require('async');

var PRODUCTION_DB = 'demo_prod_database'
  , TEST_DB = 'demo_test_database';

exports.MODE_TEST = 'mode_test';
exports.MODE_PRODUCTION = 'mode_production';

var state = {
    pool: null,
    mode: null
};

exports.connect = function(mode, done) {
    state.pool = mysql.createPool({
      host: 'localhost',
      port: 3306,
      user: 'hoanthan',
      password: 'hoan1531',
      database: mode === exports.MODE_PRODUCTION ? PRODUCTION_DB : TEST_DB
    })

    state.mode = mode
    done()
};

exports.get = function() {
    return state.pool
};