PORT=9000;
const express=require('express');
const app=express();
const database=require('./modules/connections');
app.use(express.json());

app.post('/AddUser',(req,res)=>{//Add User in MySql
    const data={
        fullname:req.body.fullname,
        email:req.body.email,
        phone:req.body.mobile,
        father:req.body.father,
        mother:req.body.mother,
        city:req.body.city
    }
    // console.log(data);
    const sql="INSERT INTO `studentrecords` SET ?";
    database.query(sql,data,(error,result)=>{
        if(error)console.log(error.sqlMessage);
        else res.json(result)
    })
    
})

app.get('/getUser',(req,res)=>{ //get all user by database
    const sql="SELECT * FROM `studentrecords`";
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

app.post('/updateUser:email',(req,res)=>{
    const sql="UPDATE `studentrecords` SET `email`=?";
    database.query(sql,[req.body.email],(error,result)=>{
        if(error) console.log(error,sqlMessage);
        else res.json()
        
    })
})


app.post('/update',(req,res)=>{
    const sql="UPDATE `studentrecords` SET `fullname`='[henry]',`email`='[henry@gmail.com]',`phone`='[9846586445-3]',`father`='[jospeh]',`mother`='[jane]',`city`='[pune]' WHERE 1"
    database.query(sql,
        [req.body.fullname,req.body.email,req.body.mobile,req.body.father,req.body.mother,req.body.city],
        (error,result)=>{
            if(error) console.log(error);
            else res.json()
        }
    )
})

app.delete("/deleteUser/:email", (req, res) => {
    const sql = 'DELETE FROM studentrecords WHERE email = ?'; 
    database.query(sql, [req.params.email], (error, result) => { 
        if (error) {
            console.log(error);
            res.status(500).json({ error: "Database error" });
        } else {
            res.json(result);
        }
    });
});


app.listen(PORT,()=>{
    console.log(`server started ${PORT}`);
});