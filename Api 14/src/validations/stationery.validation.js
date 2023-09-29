const joi=require("joi")

/** creatr stationery */
const createStationery={
    body: joi.object().keys({
        name: joi.string().required().trim(),
        category : joi.string().required().trim(),
        price: joi.number().required(),
        stock: joi.number().required(),
    })
}
module.exports={createStationery};