var orm = require("../config/orm.js");

var burger = {
      selectAll: function(cb) {
        orm.selectAll(function(res) {
          cb(res);
        });
      },
      insertOne: function(vals, cb) {
        orm.insertOne(vals, function(res) {
          cb(res);
        });
      },
      updateOne: function(objCV, condition, cb) {
        orm.updateOne(objCV, condition, function(res) {
          cb(res);
        });
      },
};

module.exports = burger;