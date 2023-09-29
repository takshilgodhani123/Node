const joi=require("joi")

/** creatr pharmacy */
const createPharmacy={
    body: joi.object().keys({
        name: joi.string().required().trim(),
        location: joi.string().required().trim(),
        phoneNumber: joi.number().required(),
        email : joi.string().required().trim(),
        operatingHours: joi.string().required().trim(),
    })
}
module.exports={createPharmacy};