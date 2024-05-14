const mysql = require("mysql");

 var con = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:"eventproject"
 });

 con.connect((err)=>{
    if(err){
        console.log("Error in database connection : ",err );
    } else{
        console.log("DB connect successfully");
    }
 });

module.exports = con;