const jwt=require=("jsonwebtoken")

const authMiddleware= async (req,res,next)=>{
     const  token=req.headers?.authorization?.split(" ")[1]
    if(!token){
       res.send({message:"No token ,authorization"})
     }
     try{
          const decoded=jwt.verify(token,"10h")
          req.user=decoded.user;
          next()
     }catch(err){
           console.log(err)
           res.status(401).json({message:"Invalid token"})
     }
}

module.exports={ authMiddleware}