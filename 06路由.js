const express=require("express");
const {Router}=require("express");
const app=express();
const router=Router();
app.use(router);
let count=0
router.get("/01",(req,res,next)=>{
   ({count}=req.query)
   count=parseInt(count);
   count+=100
   next();
},function(req,res){
    res.send(`count加二百后结果是${count+100}`)
})
app.listen(3098)