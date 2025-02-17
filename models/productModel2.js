const mongoose=require("mongoose");

const ProductSchema=new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    description:String,
    category:{type:mongoose.Schema.Types.ObjectId,ref:"Category",required:true},
    stock:{type:Number,default:0}
},{timestamps:true});

module.exports=mongoose.model("Product",ProductSchema);