PORT=9000;
const express=require('express');
const app=express();
const database=require('./modules/connections');
app.use(express.json());

app.post('/AddUser',(req,res)=>{
    const data={
        name:req.body.name,
        rollno:req.body.rollno,
        email:req.body.email,
        phone:req.body.mobile
    }
    // console.log(data);
    const sql="INSERT INTO `studentsdata` SET ?";
    database.query(sql,data,(error,result)=>{
        if(error)console.log(error.sqlMessage);
        else res.json()
    })
    
})


















app.listen(PORT,()=>{
    console.log(`server started ${PORT}`);
});