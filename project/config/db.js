const mysql = require("mysql2");
require("dotenv").config();


const db = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    port : process.env.DB_PORT,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    ssl :{
        rejectUnauthorized: false
    }
});

db.connect(err =>{
    if(err){
        console.log("Error Connecting to DATABASE",err);
    }
    else{
        console.log("Database is connected successfully");
    }
});

module.exports = db;