// dependency for mysql npm package
var mysql = require("mysql");
// create the connection information for the sql database
var connection;
//Creating connection to JawsDB Remote Database for Heroku deployment
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({ 
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });
};
// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// Export connection for our ORM to use.
module.exports = connection;