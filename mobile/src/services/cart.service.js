const {Cart}=require("../models")

const createCart=async(reqBody)=>{
    return Cart.create(reqBody);
}

const getCartlist=async(req,res)=>{
    return Cart.find({$or:[{is_active:true}]});
}

const getCartById = async (CartId) => {
    return Cart.findById(CartId);
  };

const updateDetails = async (CartId, updateBody) => {
    return Cart.findByIdAndUpdate(CartId, { $set: updateBody });
  };

const deleteCartById=async(CartId)=>{
    return Cart.findByIdAndDelete(CartId)
}
module.exports={
    createCart,
    getCartlist,
    getCartById,
    updateDetails,
    deleteCartById
}