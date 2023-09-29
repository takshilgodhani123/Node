const {grocery}=require("../models")

const createGrocery=async(reqBody)=>{
    return grocery.create(reqBody)
}

const getGroceryList=async(req,res)=>{
    return grocery.find({$or:[{is_active:true}]});
}

const getGroceryById=async(groceryId)=>{
    return grocery.findById(groceryId)
}

const updateDetails=async(groceryId,updateBody)=>{
    return grocery.findByIdAndUpdate(groceryId,{$set:updateBody})
}

const deleteGroceryById=async(groceryId)=>{
    return grocery.findByIdAndDelete(groceryId)
}

module.exports={
    createGrocery,
    getGroceryList,
    getGroceryById,
    updateDetails,
    deleteGroceryById
};