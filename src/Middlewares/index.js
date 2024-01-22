const jwt = require("jsonwebtoken")
const {check,validationResult} = require("express-validator")
exports.verifyToken=(req,res,next)=>{
       
    try {
         
         const token=req.headers.authorization
         console.log(token);
        if(token){
           const data = jwt.verify(token,"MYSECRETKEY@")
           const {id}=data;
           req.id=id;
           next();
           

        }else{
            return res.status(401).json({message:"Token is missing"})
        }
    } catch (err) {
        return res.status(401).json({err})
    }

}

exports.validateForm = [

 check("name").notEmpty().withMessage("please Enter Name"),
 check("phoneno").isMobilePhone().withMessage("please Enter phoneno"),
 check("email").isEmail().withMessage("please Enter Email"),
 check("message").notEmpty().withMessage("please Enter message"),
 check("interest").notEmpty().withMessage("please Enter interest")

]

exports.isValidated = (req,res,next)=>{

    const errors = validationResult(req)

    if(errors.isEmpty()){
        next()
    }else{
        res.status(400).json({message:errors.array()[0]})
    }

}