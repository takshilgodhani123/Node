const joi=require("joi")

/** create music*/
const createMusic={
    body: joi.object().keys({
        title: joi.string().required().trim(),
        artist : joi.string().required().trim(),
        album: joi.string().required().trim(),
        genre: joi.string().required().trim(),
        releaseYear: joi.number().required(),
        duration: joi.number().required(),
    })
}
module.exports={createMusic};