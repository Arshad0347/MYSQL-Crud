PORT=9000;
const express=require('express');
const app=express();
const database=require('./modules/connections');
app.use(express.json());

app.post('/AddUser',(req,res)=>{//Add User in MySql
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

app.get('/getUser',(req,res)=>{ //get user by database
    const sql="SELECT * FROM `studentsdata`";
    database.query(sql,(error,result)=>{
        if(error)console.log(error.sqlMessage);
        else res.json(result)
    })
})

// app.post('/updateUser:name',(req,res)=>{//update user
//     const sql="UPDATE `studentsdata` SET `name`=?";
//     database.query(sql,[req.body.name],(error,result)=>{
//         if(error)console.log(error.sqlMessage);
//         else res.json(result)
//     })
// })

app.post('/updateUseremail:email',(req,res)=>{
    const sql="UPDATE `studentsdata` SET `email`=?";
    database.query(sql,[req.body.email],(error,result)=>{
        if(error) console.log(error,sqlMessage);
        else res.json()
        
    })
})




















app.listen(PORT,()=>{
    console.log(`server started ${PORT}`);
});