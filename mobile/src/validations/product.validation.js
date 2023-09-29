const joi=require("joi")

/** creatr Product */
const createProduct={
    body: joi.object().keys({
        product_name: joi.string().required().trim(),
        product_desc: joi.string().required().trim(),
        price: joi.number().required(),
        quantity : joi.string().required().trim(),
        status: joi.boolean().required(),
    })
}
module.exports={createProduct};