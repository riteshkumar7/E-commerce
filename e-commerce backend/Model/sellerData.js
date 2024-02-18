const mongoose=require("mongoose");
const sellerData=new mongoose.Schema({

    title:{type:String},
    price:{type:Number},
    authormodel:{type:String},
    image:{type:String},
    discriptionheading:{type:String},
    discription:{type:String}

});
const SellerData=new mongoose.model("SellerData",sellerData);
module.exports=SellerData;