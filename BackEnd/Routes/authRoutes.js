const express=require("express");
const authRoutes=express.Router();
const bcrypt =require("bcryptjs");
const jwt=require("jsonwebtoken");
const {UserModule}=require("../Modules/UserModule");


//User Registration
authRoutes.post("/register",async(req,res)=>{
    try{
         const {username,email,password}=req.body
         let user=await UserModule.findOne({email})
         console.log(user)
    if(user){
          res.send({message:"User already exists"})
 
     }else{
            user=new UserModule({username,email,password})
            const salt=await bcrypt.genSalt(10)
            user.password=await bcrypt.hash(password,salt);
            await  user.save()
            res.send({message:"User registered successfully"})
       }
            
       }catch(err){
            console.log(err)
         res.send({message:"Server Error"})
    }
})

//User Login
authRoutes.post("/login",async (req,res)=>{
    try{
        const {email,password}=req.body;
          let user=await UserModule.findOne({email})
    if(!user){
            res.send({message:"Invalid credentials"})
    }
         // Validate password
            const isMatch=await bcrypt.compare(password,user.password)
     if(!isMatch){
           res.send({message:"Invalid credentials"})
         }
         const payload={
            user:{
                id:user.id,
                role:user.role
            }
         };
         jwt.sign(payload,"secret",{expiresIn:"10h"},(err,token)=>{
            if(err){
              console.log(err)
       }else{
                res.json({token})
            }
             
            
         })
    }catch(err){
         console.log(err)
         res.send({message:"Server Error"})
    }
})


module.exports={authRoutes};

