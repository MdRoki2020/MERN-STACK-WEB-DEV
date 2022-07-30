const express=require('express');

const ProductController=require("../controllers/ProductsController")
const router=express.Router();


//create
router.post('/CreateProduct',ProductController.CreateProduct);
//read
router.get('/ReadProduct',ProductController.ReadProduct);
//read by id
router.get('/ReadProductById/:id',ProductController.ReadProductById);
//update
router.post('/UpdateProduct/:id',ProductController.UpdateProduct);
//delete
router.get('/DeleteProduct/:id',ProductController.DeleteProduct);


module.exports=router;