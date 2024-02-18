const mongoose=require("mongoose");
const clotheData=new mongoose.Schema({

    title:{type:String},
    price:{type:Number},
    authormodel:{type:String},
    image:{type:String},
    discriptionheading:{type:String},
    discription:{type:String}

});
const ClotheData=new mongoose.model("ClotheData",clotheData);
module.exports=ClotheData;