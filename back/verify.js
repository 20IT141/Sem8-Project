const {verify , decode} = require("jsonwebtoken");

module.exports={
    checkToken : (req,res,next)=>{
        let token = req.get("authorization");
        if(token){
            token = token.slice(" ");
            verify(token, "Astha123", (err,decoded,next)=>{
                if(err){
                    res.json({
                        success : 0 ,
                        Message : "Invalid Token"
                    });
                }else{
                    next();
                }
            });
        }else{
            res.json({
                success:0,
                messsage :"Access Denied ! Unauthorized User.."
            });
        }
    }
};