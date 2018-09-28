const express=require("express");
const app=express();
const path=require("path");
const qiniu=require("qiniu");
var accessKey="hiaSMM1QqBT-0Q0KywiDrpp_tXbgBz8p1mFXkoil";
var secretKey="A4to1dxJHlKuQ_HuoKWhdf34-J3B_dYzt4eIT5tl";
var mac=new qiniu.auth.digest.Mac( accessKey,secretKey);
var options={
    scope:"demo",
    returnBody:'{"key": $(key), "hash": $(etag), "url": "http://pflqd1edg.bkt.clouddn.com/$(key)"}',
    expires:3600,
    deadline:Math.round(new Date().getTime()/1000)+3600
    // Math下三个取整的方法
    //Math.ceil()向上取整  Math.floor()向下取整  Math.round()四舍五入取整
}
var putPolicy=new qiniu.rs.PutPolicy(options);
var uploadToken=putPolicy.uploadToken(mac)
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./qiniuUpload.html'))
});
app.get("/getToken",(req,res)=>{
    res.json({
        code:200,
        token:uploadToken
    })
})
app.listen(3003);