const {Product}=require("../models")

const createProduct=async(reqBody)=>{
    return Product.create(reqBody);
}

const getProductlist=async(req,res)=>{
    return Product.find({$or:[{is_active:true}]});
}

const getProductById = async (productId) => {
    return Product.findById(productId);
  };

const updateDetails = async (productId, updateBody) => {
    return Product.findByIdAndUpdate(productId, { $set: updateBody });
  };

const deleteProductById=async(productId)=>{
    return Product.findByIdAndDelete(productId)
}
module.exports={
    createProduct,
    getProductlist,
    getProductById,
    updateDetails,
    deleteProductById
}