const mongoose=require("mongoose");
const applianceData=new mongoose.Schema({

    title:{type:String},
    price:{type:Number},
    authormodel:{type:String},
    image:{type:String},
    discriptionheading:{type:String},
    discription:{type:String}

});
const ApplianceData=new mongoose.model("ApplianceData",applianceData);
module.exports=ApplianceData;