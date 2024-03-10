const mongoose=require("mongoose")

const UserSchema= new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:   {type:String,required:true,unique:true},
    password: {type:String,required:true,unique:true},
    role:     {type:String, enum:["admin","student"], default:"student"},
});

const UserModule =mongoose.model("User",UserSchema)

module.exports={UserModule}