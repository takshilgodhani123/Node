const joi=require("joi")

/** creatr Cart */
const createCart={
    body: joi.object().keys({
        total: joi.number().required(),
        quantity : joi.string().required().trim()
    }),
}
module.exports={createCart};