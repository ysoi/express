var express=require("express");
var app=express();
var path=require("path");
var qs=require("qs")
var formidable=require("formidable");
app.get("/",(req,res)=>{
   res.sendFile(path.resolve(__dirname,"./uploadImg.html"))
    
})
app.post("/upload",(req,res)=>{
    const form=new formidable.IncomingForm();//新建表单管理对象
    form.maxFilesSize=20*1024*1024;//以字节为单位，设置文件的最大占有空间
    form.keepExtensions=true;//保持文件的扩展名
    form.uploadDir=path.resolve(__dirname,'./public');
    //解析请求
    form.parse(req,function(err,fields,files){
        console.log("fields",fields);
        console.log("files",files);
    })
    form.on('end',function(){
        console.log("success");
        res.send('图片上传成功');
    })
    

})

 

app.listen(3045);