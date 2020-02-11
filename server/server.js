const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

// midelware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// get data from server
app.get("/",(req,res)=>{
   res.json("hello amazone")
});
// post data to backend
app.post("/",(req,res)=>{
    console.log(req.body.name);
});
app.listen(3000,err=>{
   if(err){
        console.log(err);
   }else{
        console.log("all is Right");
   }
});