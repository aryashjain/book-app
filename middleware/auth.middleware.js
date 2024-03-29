import { User } from "../models/user.model.js";

export const verifyUser = async(req,res,next)=>{
try {
    const _id = req.cookies?.id
    console.log(_id);
    if(!_id){
       throw new Error("id not added to cookies")
    }
    const resp = await User.findById(_id)

    if(!resp) {
       throw new Error("User not registered")
    }
    req.user = resp;
    next();
} catch (error) {
  next(error)
}
}