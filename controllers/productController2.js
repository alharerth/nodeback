const Product=require("../models/productModel2");

const createProduct=async(req,res)=>{
    try {
        const newProduct=new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);

    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const getProduct=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
};

module.exports={createProduct,getProduct};