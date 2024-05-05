import { User}  from "../Models/User.js";
import  jwt  from "jsonwebtoken";
//token 

export const authenticate = async (req, res, next) => {
  try{
    const token = req.header("auth");
    if (!token) return res.json({ message: "Login First" });
    const decoded = jwt.verify(token, process.env.JWT);
    const id = decoded.userID;
    // console.log(decoded);
    let user = await User.findById( id );
    if(!user) return res.json({message :" user Not Found"})
    req.user = user;
    // req.data = "Superman is belong from DC"
    next();
  }
  catch(e)
  {
    if(e.name == "TokenExpiredError")return res.json({message:"Token Expored Please Login"})
    res.json({message:"Internal Sever Error ..."});
  }
  };


