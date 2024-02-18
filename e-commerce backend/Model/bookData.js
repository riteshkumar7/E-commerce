const mongoose=require("mongoose");
const bookData=new mongoose.Schema({

    title:{type:String},
    price:{type:Number},
    authormodel:{type:String},
    image:{type:String},
    discriptionheading:{type:String},
    discription:{type:String}

});
const BookData=new mongoose.model("BookData",bookData);
module.exports=BookData;