const {Stationery}=require("../models")

const createStationery=async(reqBody)=>{
    return Stationery.create(reqBody);
}

const getStationerylist=async(req,res)=>{
    return Stationery.find({$or:[{is_active:true}]});
}

const getStationeryById = async (stationeryId) => {
    return Stationery.findById(stationeryId);
  };
  
  const updateDetails = async (stationeryId, updateBody) => {
    return Stationery.findByIdAndUpdate(stationeryId, { $set: updateBody });
  };

const deleteStationeryById=async(StationeryId)=>{
    return Stationery.findByIdAndDelete(StationeryId)
}
module.exports={
    createStationery,
    getStationerylist,
    getStationeryById,
    updateDetails,
    deleteStationeryById
}