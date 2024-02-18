const mongoose=require("mongoose");
const toyData=new mongoose.Schema({

    title:{type:String},
    price:{type:Number},
    authormodel:{type:String},
    image:{type:String},
    discriptionheading:{type:String},
    discription:{type:String}

});
const ToyData=new mongoose.model("ToyData",toyData);
module.exports=ToyData;