const Product = require("../models/productModel")


//Create Product -- Admin

exports.createProduct = async(req,res,next)=>{
    const product = await Product.create(req.body);
    res.status(201).json({
        sucess:true,
        product
    })
}

//Get All Products
exports.getAllProducts = (req,res)=>{

    res.status(200).json({"Message":"Route is working"})
}