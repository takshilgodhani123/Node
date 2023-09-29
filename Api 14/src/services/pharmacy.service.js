const {Pharmacy}=require("../models")

const createPharmacy=async(reqBody)=>{
    return Pharmacy.create(reqBody);
}

const getPharmacylist=async(req,res)=>{
    return Pharmacy.find({$or:[{is_active:true}]});
}

const getPharmacyById = async (pharmacyId) => {
    return Pharmacy.findById(pharmacyId);
  };
  
  const updateDetails = async (pharmacyId, updateBody) => {
    return Pharmacy.findByIdAndUpdate(pharmacyId, { $set: updateBody });
  };

const deletePharmacyById=async(pharmacyId)=>{
    return Pharmacy.findByIdAndDelete(pharmacyId)
}
module.exports={
    createPharmacy,
    getPharmacylist,
    getPharmacyById,
    updateDetails,
    deletePharmacyById
}