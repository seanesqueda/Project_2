// Set up MySQL connection.
var mysql = require("mysql");


if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "root",
      database: "community_db"
  });
}

// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;


//Sequqlize below incase i can figure it out
// var Sequelize = require("sequelize");

// // Creates mySQL connection using Sequelize
// var sequelize = new Sequelize("community_db", "ud3ody5j9rkum4n1", "rb319v09ccw6xjum", {
//   host: "h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   port: 3306,
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

// // Exports the connection for other files to use
// module.exports = sequelize;