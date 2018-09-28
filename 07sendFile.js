const express=require("express");
const app=express();
const path=require("path");
app.get("/getFile",(req,res)=>{
    console.log(__dirname);
   let absolutePath=path.resolve(__dirname,"./public/upload_2e76016343a59402eae5c0c17ea67ae9.png")
    res.sendFile( absolutePath);
})
app.listen(3029);