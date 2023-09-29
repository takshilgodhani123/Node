const joi=require("joi")

/** creatr Order */
const createOrder={
    body: joi.object().keys({
        total: joi.number().required(),
        orderStatus: joi.boolean().required(),
    })
}
module.exports={createOrder};