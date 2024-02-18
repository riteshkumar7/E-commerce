const express=require("express")
const Data=require("../Model/data")
const SellerData=require("../Model/sellerData")
const BookData=require("../Model/bookData")
const MobileData=require("../Model/mobileData")
const ClotheData=require("../Model/clotheData")
const ShoesData=require("../Model/shoesData")
const ToyData=require("../Model/toyData")
const AppliancesData=require("../Model/applianceData")
const LaptopData=require("../Model/laptopData")
const CamerasData=require("../Model/cameraData")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const route=express.Router();
require("../DB/cont");

const fun=(req,res,next)=>
{
    console.log("welcome...");
    next();
}

route.get("/",(req,res)=>{
    res.send("Home Page");
})
route.post("/saveData",fun,async (req,res)=>{
    try{
        const {username,mobile,email,password}=req.body;
        let employee=new Data({username,mobile,email,password})
        await employee.save();
        res.send("employee Joind")
    }
    catch(e){
        console.log(e)
    }
})

route.post("/login",async(req,res)=>{
    try{
        const{username,password}=req.body;
        const user=await Data.findOne({username});
        if((await bcrypt.compare(password, user.password))){
            const token=jwt.sign(
                {user_id:user._id,username},
                process.env.TOKEN_KEY,
                {
                    expiresIn:"2h",
                }
            )
            user.token=token;
            res.send(user);
        }
        else{
            res.send("Invalid");
        }
    }
    catch(err){
        console.log(err);
    }
});

route.get("/getInfo",async(req,res)=>{
    try{
        let data=await Data.find();
        res.send(data);
    }
    catch(e){
        console.log(e);
    }
})

route.get("/getData",async(req,res)=>{
    try{
        let sellerData=await SellerData.find();
        res.send(sellerData);
    }
    catch(e){
        console.log(e);
    }
})

route.get("/getBook",async(req,res)=>{
    try{
        let bookData=await BookData.find();
        res.send(bookData);
    }
    catch(e){
        console.log(e);
    }
})
route.get("/getMobile",async(req,res)=>{
    try{
        let mobileData=await MobileData.find();
        res.send(mobileData);
    }
    catch(e){
        console.log(e);
    }
})
route.get("/getToy",async(req,res)=>{
    try{
        let toyData=await ToyData.find();
        res.send(toyData);
    }
    catch(e){
        console.log(e);
    }
})
route.get("/getShoes",async(req,res)=>{
    try{
        let shoesData=await ShoesData.find();
        res.send(shoesData);
    }
    catch(e){
        console.log(e);
    }
})
route.get("/getLaptop",async(req,res)=>{
    try{
        let laptopData=await LaptopData.find();
        res.send(laptopData);
    }
    catch(e){
        console.log(e);
    }
})
route.get("/getClothes",async(req,res)=>{
    try{
        let clothesData=await ClotheData.find();
        res.send(clothesData);
    }
    catch(e){
        console.log(e);
    }
})
route.get("/getCamera",async(req,res)=>{
    try{
        let cameraData=await CamerasData.find();
        res.send(cameraData);
    }
    catch(e){
        console.log(e);
    }
})
route.get("/getAppliances",async(req,res)=>{
    try{
        let appliancesData=await AppliancesData.find();
        res.send(appliancesData);
    }
    catch(e){
        console.log(e);
    }
})
route.put("/editData/:username",async(req,res)=>{
    try{
        let{username}=req.params;
        await Data.findOneAndUpdate({username:username},req.body,{new:true})
        res.send("updated...")
    }
    catch(e){
        console.log(e)
    }
})


route.post("/adddata",fun,async (req,res)=>{
    try{
        const {title,price,authormodel,image,discriptionheading,discription}=req.body;
        let employee=new SellerData({title,price,authormodel,image,discriptionheading,discription})
        await employee.save();
        res.send("employee Joind")
    }
    catch(e){
        console.log(e)
    }
})
route.post("/addbookdata",fun,async (req,res)=>{
    try{
        const {title,price,authormodel,image,discriptionheading,discription}=req.body;
        let employee=new BookData({title,price,authormodel,image,discriptionheading,discription})
        await employee.save();
        res.send("employee Joind")
    }
    catch(e){
        console.log(e)
    }
})
route.post("/addmobiledata",fun,async (req,res)=>{
    try{
        const {title,price,authormodel,image,discriptionheading,discription}=req.body;
        let employee=new MobileData({title,price,authormodel,image,discriptionheading,discription})
        await employee.save();
        res.send("employee Joind")
    }
    catch(e){
        console.log(e)
    }
}) 

route.post("/addclothesdata",fun,async (req,res)=>{
    try{
        const {title,price,authormodel,image,discriptionheading,discription}=req.body;
        let employee=new ClotheData({title,price,authormodel,image,discriptionheading,discription})
        await employee.save();
        res.send("employee Joind")
    }
    catch(e){
        console.log(e)
    }
})
route.post("/addshoesdata",fun,async (req,res)=>{
    try{
        const {title,price,authormodel,image,discriptionheading,discription}=req.body;
        let employee=new ShoesData({title,price,authormodel,image,discriptionheading,discription})
        await employee.save();
        res.send("employee Joind")
    }
    catch(e){
        console.log(e)
    }
})
route.post("/addtoydata",fun,async (req,res)=>{
    try{
        const {title,price,authormodel,image,discriptionheading,discription}=req.body;
        let employee=new ToyData({title,price,authormodel,image,discriptionheading,discription})
        await employee.save();
        res.send("employee Joind")
    }
    catch(e){
        console.log(e)
    }
})
route.post("/addappliancesdata",fun,async (req,res)=>{
    try{
        const {title,price,authormodel,image,discriptionheading,discription}=req.body;
        let employee=new AppliancesData({title,price,authormodel,image,discriptionheading,discription})
        await employee.save();
        res.send("employee Joind")
    }
    catch(e){
        console.log(e)
    }
})
route.post("/addlaptopdata",fun,async (req,res)=>{
    try{
        const {title,price,authormodel,image,discriptionheading,discription}=req.body;
        let employee=new LaptopData({title,price,authormodel,image,discriptionheading,discription})
        await employee.save();
        res.send("employee Joind")
    }
    catch(e){
        console.log(e)
    }
})
route.post("/addcameradata",fun,async (req,res)=>{
    try{
        const {title,price,authormodel,image,discriptionheading,discription}=req.body;
        let employee=new CamerasData({title,price,authormodel,image,discriptionheading,discription})
        await employee.save();
        res.send("employee Joind")
    }
    catch(e){
        console.log(e)
    }
})

route.put("/updateData/:title",async(req,res)=>{
    try{
        let{title}=req.params;
        await SellerData.findOneAndUpdate({title:title},req.body,{new:true})
        res.send("updated...")
    }
    catch(e){
        console.log(e)
    }
})
route.put("/updatebookData/:title",async(req,res)=>{
    try{
        let{title}=req.params;
        await BookData.findOneAndUpdate({title:title},req.body,{new:true})
        res.send("updated...")
    }
    catch(e){
        console.log(e)
    }
})
route.put("/updatemobileData/:title",async(req,res)=>{
    try{
        let{title}=req.params;
        await MobileData.findOneAndUpdate({title:title},req.body,{new:true})
        res.send("updated...")
    }
    catch(e){
        console.log(e)
    }
})
route.put("/updateclothesData/:title",async(req,res)=>{
    try{
        let{title}=req.params;
        await ClotheData.findOneAndUpdate({title:title},req.body,{new:true})
        res.send("updated...")
    }
    catch(e){
        console.log(e)
    }
})
route.put("/updateshoesData/:title",async(req,res)=>{
    try{
        let{title}=req.params;
        await ShoesData.findOneAndUpdate({title:title},req.body,{new:true})
        res.send("updated...")
    }
    catch(e){
        console.log(e)
    }
})
route.put("/updatetoyData/:title",async(req,res)=>{
    try{
        let{title}=req.params;
        await ToyData.findOneAndUpdate({title:title},req.body,{new:true})
        res.send("updated...")
    }
    catch(e){
        console.log(e)
    }
})
route.put("/updateappliancesData/:title",async(req,res)=>{
    try{
        let{title}=req.params;
        await AppliancesData.findOneAndUpdate({title:title},req.body,{new:true})
        res.send("updated...")
    }
    catch(e){
        console.log(e)
    }
})
route.put("/updatelaptopData/:title",async(req,res)=>{
    try{
        let{title}=req.params;
        await LaptopData.findOneAndUpdate({title:title},req.body,{new:true})
        res.send("updated...")
    }
    catch(e){
        console.log(e)
    }
})
route.put("/updatecameraData/:title",async(req,res)=>{
    try{
        let{title}=req.params;
        await CamerasData.findOneAndUpdate({title:title},req.body,{new:true})
        res.send("updated...")
    }
    catch(e){
        console.log(e)
    }
})
route.delete("/removedata/:title",async(req,res)=>{
    try{
        console.log(req.params);
        const {title}=req.params;
     const sellerData= await SellerData.findOneAndDelete({title:title});
        res.send("removed");
    }
    catch(e){
        console.log(e);
    }
})
route.delete("/removebookdata/:title",async(req,res)=>{
    try{
        console.log(req.params);
        const {title}=req.params;
     const bookData= await BookData.findOneAndDelete({title:title});
        res.send("removed");
    }
    catch(e){
        console.log(e);
    }
})
route.delete("/removemobiledata/:title",async(req,res)=>{
    try{
        console.log(req.params);
        const {title}=req.params;
     const mobileData= await MobileData.findOneAndDelete({title:title});
        res.send("removed");
    }
    catch(e){
        console.log(e);
    }
})
route.delete("/removeclothesdata/:title",async(req,res)=>{
    try{
        console.log(req.params);
        const {title}=req.params;
     const clotheDataData= await ClotheData.findOneAndDelete({title:title});
        res.send("removed");
    }
    catch(e){
        console.log(e);
    }
})
route.delete("/removeshoesdata/:title",async(req,res)=>{
    try{
        console.log(req.params);
        const {title}=req.params;
     const shoesData= await ShoesData.findOneAndDelete({title:title});
        res.send("removed");
    }
    catch(e){
        console.log(e);
    }
})
route.delete("/removetoydata/:title",async(req,res)=>{
    try{
        console.log(req.params);
        const {title}=req.params;
     const toyData= await ToyData.findOneAndDelete({title:title});
        res.send("removed");
    }
    catch(e){
        console.log(e);
    }
})
route.delete("/removeappliancesdata/:title",async(req,res)=>{
    try{
        console.log(req.params);
        const {title}=req.params;
     const applianceData= await AppliancesData.findOneAndDelete({title:title});
        res.send("removed");
    }
    catch(e){
        console.log(e);
    }
})
route.delete("/removelaptopdata/:title",async(req,res)=>{
    try{
        console.log(req.params);
        const {title}=req.params;
     const laptopData= await LaptopData.findOneAndDelete({title:title});
        res.send("removed");
    }
    catch(e){
        console.log(e);
    }
})
route.delete("/removecameradata/:title",async(req,res)=>{
    try{
        console.log(req.params);
        const {title}=req.params;
     const cameraData= await CamerasData.findOneAndDelete({title:title});
        res.send("removed");
    }
    catch(e){
        console.log(e);
    }
})
module.exports=route;