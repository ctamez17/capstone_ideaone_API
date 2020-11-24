const mysql = require("mysql");
require("dotenv").config();

class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating connection...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: "34.70.158.217",
        user: "root",
        password: "SamwiseTheGamgee",
        database: "myGoogleDatabase",
      });
      return this.pool;
    }
    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;