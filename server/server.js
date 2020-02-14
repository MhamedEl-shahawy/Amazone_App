const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/user");

const app = express();

dotenv.config();

// conncet mongoose
mongoose.connect(process.env.DATABASE,{useNewUrlParser: true,useUnifiedTopology:true},(err)=>{
	(err)? console.log(err):console.log("Connect To DATABASE ")
})

// midelware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// reqiure apis
const productRoutes = reqiure("./routes/product");
const categoryRoutes = reqiure("./routes/category");
const ownerRoutes = reqiure("./routes/owners");



app.use("/api",productRoutes);
app.use("/api",categoryRoutes);
app.use("/api",ownerRoutes);



app.listen(3000,err=>{
   if(err){
        console.log(err);
   }else{
        console.log("all is Right");
   }
});