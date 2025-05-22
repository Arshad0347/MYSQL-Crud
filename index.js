const express=require('express');
const app=express();

PORT=9000;

app.listen(PORT,()=>{
    console.log(`server started ${PORT}`);
});