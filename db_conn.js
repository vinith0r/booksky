var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "vini",
  password: "vinith8001"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
