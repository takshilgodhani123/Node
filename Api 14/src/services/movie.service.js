const {Movie}=require("../models")

const createMovie=async(reqBody)=>{
    return Movie.create(reqBody)
}

const getMovieList=async(req,res)=>{
    return Movie.find({$or:[{is_active:true}]});
}

const getMovieById = async (MovieId) => {
    return Movie.findById(MovieId);
  };
  
  const updateDetails = async (MovieId, updateBody) => {
    return Movie.findByIdAndUpdate(MovieId, { $set: updateBody });
  };

const deleteMovieById=async(MovieId)=>{
    return Movie.findByIdAndDelete(MovieId)
}

module.exports={
    createMovie,
    getMovieList,
    getMovieById,
    updateDetails,
    deleteMovieById
};