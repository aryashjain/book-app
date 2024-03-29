import { User } from "../models/user.model.js";


export const registerUser = async(req,res)=>{
   try {
     const {name,email, username,phone} = req.body
     if(!name || !email || !username || !phone) {
         // error
         res.status(403).json({"error":"pls send author or year"});   
     }
     const exist = await User.findOne({
         $or:[{username},{email}]
     })
     if(exist) {
         res.status(403).json({"error":"user already exists"});
     }
     const user = await User.create({
         name,
         email,
         username: username.toLowerCase(),
         phone
     })
 
     if(!user) {
         res.status(400).json({"error":"unable to register user pls try again"})
     }
     const  idString = user._id.toHexString();
    console.log(user, user._id,idString );
    res.cookie("id",idString);
     return res.status(201).json(user)
   } catch (error) {
    console.log("error->",error)
    res.status(500).json({"error":error})
   }

}


