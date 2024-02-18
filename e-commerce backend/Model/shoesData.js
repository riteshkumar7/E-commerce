const mongoose=require("mongoose");
const shoeData=new mongoose.Schema({

    title:{type:String},
    price:{type:Number},
    authormodel:{type:String},
    image:{type:String},
    discriptionheading:{type:String},
    discription:{type:String}

});
const ShoeData=new mongoose.model("ShoeData",shoeData);
module.exports=ShoeData;