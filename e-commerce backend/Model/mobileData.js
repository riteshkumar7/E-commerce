const mongoose=require("mongoose");
const mobileData=new mongoose.Schema({

    title:{type:String},
    price:{type:Number},
    authormodel:{type:String},
    image:{type:String},
    discriptionheading:{type:String},
    discription:{type:String}

});
const MobileData=new mongoose.model("MobileData",mobileData);
module.exports=MobileData;