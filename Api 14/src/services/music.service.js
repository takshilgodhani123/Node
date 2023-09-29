const {Music}=require("../models")

const createMusic=async(reqBody)=>{
    return Music.create(reqBody)
}

const getMusicList=async(req,res)=>{
    return Music.find({$or:[{is_active:true}]});
}

const getMusicById = async (MusicId) => {
    return Music.findById(MusicId);
  };

const updateDetails = async (MusicId, updateBody) => {
    return Music.findByIdAndUpdate(MusicId, { $set: updateBody });
  };

const deleteMusicById=async(MusicId)=>{
    return Music.findByIdAndDelete(MusicId)
}

module.exports={
    createMusic,
    getMusicList,
    getMusicById,
    updateDetails,
    deleteMusicById
};