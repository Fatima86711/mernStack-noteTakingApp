import ratelimit from "../config/upstash.js";
const ratelimiter = async(req, res, next)=>{
    try{
        
const { success } = await ratelimit.limit("my-rate-limit");

if (!success) {
  return res.status(429).json({message:"Unable to process at this time"})
  
}
next();
    }catch(err){
        console.log("Rate Limit Error", err)
        next(err)
    }
}
export default ratelimiter;