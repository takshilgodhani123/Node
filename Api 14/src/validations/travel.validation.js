const joi=require("joi")

/** creatr travel */
const createTravel={
    body: joi.object().keys({
        name: joi.string().required().trim(),
        destination : joi.string().required().trim(),
        startDate: joi.date().required,
        endDate: joi.date().required,
        budget: joi.number().required(),
        travelers: joi.number().required(),
    })
}
module.exports={createTravel};