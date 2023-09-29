const joi=require("joi")

/** create movie*/
const createMovie={
    body: joi.object().keys({
        title: joi.string().required().trim(),
        director : joi.string().required().trim(),
        location: joi.string().required().trim(),
        price: joi.number().required(),
        rating: joi.number().required(),
        show: joi.number().required(),
        seat: joi.string().required().trim(),
    })
}
module.exports={createMovie};