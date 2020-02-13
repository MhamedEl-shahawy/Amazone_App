const router = require("express").Router();
const Product = require(".../models/product");
//Post Create New Product
router.post('/products',async (req,res)=>{
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


//Get request - get singel product 


//Put request - delete a single

 //Delete request - delete a single Product


 module.exports = router;