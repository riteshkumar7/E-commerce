const mongoose=require("mongoose");
const cameraData=new mongoose.Schema({

    title:{type:String},
    price:{type:Number},
    authormodel:{type:String},
    image:{type:String},
    discriptionheading:{type:String},
    discription:{type:String}

});
const CameraData=new mongoose.model("CameraData",cameraData);
module.exports=CameraData;