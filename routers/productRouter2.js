const express=require("express");
const {createProduct,getProducts}=require("../controllers/productController2");

const router=express.Router();
router.post("/create",createProduct);
router.get("/get",getProducts);

module.exports=router;