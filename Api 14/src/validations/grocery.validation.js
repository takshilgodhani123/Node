const joi=require("joi")

/** create  grocery*/
const createGrocery={
    body: joi.object().keys({
        name: joi.string().required().trim(),
        category : joi.string().required().trim(),
        price: joi.number().required(),
        quantity: joi.number().required(),
    })
}
module.exports={createGrocery};