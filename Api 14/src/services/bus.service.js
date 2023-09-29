const { Bus}=require("../models");

const createBus=async(reqBody)=>{
    return Bus.create(reqBody)
}

const getBuslist=async(req, res)=>{
    return Bus.find({$or:[{is_active:true}]});
}

const getBusById=async(busId)=>{
    return Bus.findById(busId);
}

const updateDetails=async(busId,updateBody)=>{
    return Bus.findByIdAndUpdate(busId,{$set:updateBody})
}

const deleteBus=async(busId)=>{
    return Bus.findByIdAndDelete(busId);
}

module.exports={
    createBus,
    getBuslist,
    getBusById,
    updateDetails,
    deleteBus
}