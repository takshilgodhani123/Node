const joi=require("joi")

/** create jewelry*/
const createJewelry={
    body: joi.object().keys({
        name: joi.string().required().trim(),
        location: joi.string().required().trim(),
        material : joi.string().required().trim(),
        gemstone: joi.string().required().trim(),
        price: joi.number().required(),
    })
}
module.exports={createJewelry};