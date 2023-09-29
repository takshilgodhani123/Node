const {Travel}=require("../models")

const createTravel=async(reqBody)=>{
    return Travel.create(reqBody);
}

const getTravellist=async(req,res)=>{
    return Travel.find({$or:[{is_active:true}]});
}

const getTravelById = async (travelId) => {
    return Travel.findById(travelId);
  };
  
  const updateDetails = async (travelId, updateBody) => {
    return Travel.findByIdAndUpdate(travelId, { $set: updateBody });
  };

const deleteTravelById=async(travelId)=>{
    return Travel.findByIdAndDelete(travelId)
}
module.exports={
    createTravel,
    getTravellist,
    getTravelById,
    updateDetails,
    deleteTravelById
}