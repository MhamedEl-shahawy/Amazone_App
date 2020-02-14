const router = require("express").Router();
const Product = require(".../models/product");
const upload = require("../middelwares/upload-image");

router.post("/products",upload.single("photo"),async (req,res)=>{
  try{
   
   let product = new Product();
   product.title = req.body.title;
   product.description = req.body.description;
   product.price = req.body.price;
   product.photo = req.body.photo;
   product.stockQuantity = req.body.stockQuantity;
   product.rating = req.body.rating;

   await product.save();

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

//Get  get all products
router.get("/products",async (req,res)=>{
  try{
    let products = await Product.find()
  
   res.json({
     status:true,
     products:products
   });
  }catch(err){
    
   res.status(500).json({
     status:false,
     message:err.message
   });

  }
})

//Get request - get singel product 
router.get("/products/:id",async (req,res)=>{
  try{
    let product = await Product.findOne({_id:req.params.id})
  
   res.json({
     status:true,
     product:product
   });
  }catch(err){
    
   res.status(500).json({
     success:false,
     message:err.message
   });

  }
});

//Put request - delete a single
router.put("/products/:id",upload.single("photo"),async (req,res)=>{
  try{
    let product = await Product.findOneAndUpdate({_id:req.params.id},{
      $set:{
        title:req.body.title,
        description : req.body.description,
        price : req.body.price,
        photo : req.body.photo,
        owner : req.body.ownerID,
        category:req.body.categoryID
      }
    },
    {upsert:true}
  );

  
   res.json({
     status:true,
     updateProduct:product
   });
  }catch(err){
    
   res.status(500).json({
     success:false,
     message:err.message
   });

  }
});

//Delete request - delete a single Product
router.delete("/products/:id",async (req,res)=>{
  try{
    let deletedProduct = await Product.findOneAndDelete({_id:req.params.id});
    if (deletedProduct) {
       res.json({
         status:true,
         message:"Successfully Deleted"
       });
    }
  
  }catch(err){
    
   res.status(500).json({
     success:false,
     message:err.message
   });

  }
});

 module.exports = router;