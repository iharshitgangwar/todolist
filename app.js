
const express=require("express");
const bodyparser=require("body-parser");

const app=express();
let items=[];
let workItems=[];
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

//use always after declaring express
app.set("view engine","ejs")





app.get("/",function(req,res){
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    }

    let today=new Date()
    let day =today.toLocaleDateString("en-US",options)
    console.log(day);
    res.render("index",{listTitle:day,newListitems:items})
 
});


app.post("/",function(req,res){
    console.log(req.body)
   let item= req.body.newItem;
   items.push(item);
   res.redirect("/");
})

app.get("/work",function(req,res){
    res.render("index",{listTitle:"Work list",newListitems:workItems})
})

app.post("/work",function(req,res){
    let item= req.body.newItem;
    workItems.push(item);
      items.push(item);
    res.redirect("/");
 })

app.post("/delete",function(req,res){
    items=[];
    res.redirect("/");

})


app.listen(3000,function(){
    console.log("server is started at port 3000")
})