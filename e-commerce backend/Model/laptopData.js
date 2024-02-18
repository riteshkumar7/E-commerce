const mongoose=require("mongoose");
const laptopData=new mongoose.Schema({

    title:{type:String},
    price:{type:Number},
    authormodel:{type:String},
    image:{type:String},
    discriptionheading:{type:String},
    discription:{type:String}

});
const LaptopData=new mongoose.model("LaptopData",laptopData);
module.exports=LaptopData;