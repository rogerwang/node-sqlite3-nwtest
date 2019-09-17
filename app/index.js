'use strict';
var sqlite3 = require('..'); //.verbose();
console.log(sqlite3);
var db = new sqlite3.Database('test.db', sqlite3.OPEN_READWRITE, function(err) {});
//
//var result = '';
//db.serialize(function() {
//  db.run("CREATE TABLE lorem (info TEXT)");
//
//  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//  for (var i = 0; i < 10; i++) {
//      stmt.run("Ipsum " + i);
//  }
//  stmt.finalize();
//
//  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//      result += row.id + ": " + row.info + "; ";
//      console.log(row.id + ": " + row.info);
//  });
//});
//
//db.close();

