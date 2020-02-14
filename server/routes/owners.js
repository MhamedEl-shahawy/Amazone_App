const router = require("express").Router();
const Owner = require(".../models/owner");


// Post 
router.post("/owners",async (req,res)=>{
  try{
   
   let owner = new Owner();
   owner.name = req.body.name;
   owner.about = req.body.about;

 

   await owner.save();

   res.json({
   	 status:true,
   	 message:"Successfully Saved"
   });
  }catch(err){
    
   res.status(500).json({
   	 status:false,
   	 message:err.message
   });

  }
});

// Get
router.get("/owners",async (req,res)=>{
  try{
    let owners = await Owner.find()
  
   res.json({
   	
   	 owners:owners
   });
  }catch(err){
    
   res.status(500).json({
   	 success:false,
   	 message:err.message
   });

  }
})

 module.exports = router;