const {School}=require("../models")

const createSchool=async(reqBody)=>{
    return School.create(reqBody)
}

const getSchoolList=async(req,res)=>{
    return School.find({$or:[{is_active:true}]});
}

const getSchoolById = async (schoolId) => {
    return School.findById(schoolId);
  };

const updateDetails = async (schoolId, updateBody) => {
    return School.findByIdAndUpdate(schoolId, { $set: updateBody });
  };

const deleteSchool=async(schoolId)=>{
    return School.findByIdAndDelete(schoolId)
}

module.exports={
    createSchool,
    getSchoolList,
    getSchoolById,
    updateDetails,
    deleteSchool
};