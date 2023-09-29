const mongoose =require("mongoose")

const mobileSchema=new mongoose.Schema({
    shop_name:{
        type:String,
        trim:true
    },
    table_no:{
        type:Number,
        trim:true
    },
    mobile_company:{
        type:String,
        trim:true
    },
    mobile_model:{
        type:String ,
        trim:true
    },
    mobile_series:{
        type:String,
        trim:true
    },
    bill_no:{
        type : Number,
        trim:true
    },
    location:{
        type:String,
        trim:true
    },
    is_active:{
        type:Boolean,
        default:true
    }
},
{
    timestamps:true,
    versionKey:false,
});

const Mobile =mongoose.model("Mobile", mobileSchema)

module.exports= Mobile