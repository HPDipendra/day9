import jwt from "jsonwebtoken";
import "dotenv/config";

export default (req,res,next)=>{
   try{
    const token = req.headers.token;
    console.log(token);

    if (token){
        const isValid = jwt.verify(token,process.env.JWT_SECRET);
        console.log(isValid);

        if(isValid) next();

        else {res.status(403).json({ success:"false", message: "token invalid" });}
    }
    else{
      
        res.status(200).json('token not found')
    }
}
catch(err){
    console.log(err);

    return res.status(403).json('token not provided')
}

}


