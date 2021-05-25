const mysql      = require('mysql');
 const con = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : 'root',
   database : 'blogapp'
 });

 con.connect((err)=>{
     if(err){
         console.log('Error connecting to  db');
         console.log(err);
         return;
     }
     console.log('Connection established');
 });
 module.exports= con;