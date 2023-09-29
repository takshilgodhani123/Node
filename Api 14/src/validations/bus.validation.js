const joi =require("joi");

/** creatr bus */
const createBus={
    body: joi.object().keys({
        registrationNumber: joi.string().required().trim(),
        bus_name : joi.string().required().trim(),
        model: joi.string().required().trim(),
        seatingCapacity: joi.number().required(),
        manufacturer:joi.string().required().trim(),
        yearOfManufacture: joi.number().required(),
        driverName: joi.string().required().trim()
    })
}
module.exports={createBus};