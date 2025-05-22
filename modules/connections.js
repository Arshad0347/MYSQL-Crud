const mysql=require('mysql');
const database=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:"records",
})
database.connect((error)=>{
if(error){
    console.log(error);
    
}else{
    console.log('datatbase is successfully connected');
}
})
module.exports=database;