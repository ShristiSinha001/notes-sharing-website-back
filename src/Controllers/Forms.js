const Form = require("../Models/Form")
const jwt = require("jsonwebtoken")

exports.addForm = async (req, res,next) => {




    try {

        const { name, PhoneNo, email, message, interest } = req.body
        const _form = new Form(req.body)
        await _form.save()
        req.subject = "user from"
        req.text = "user form Successfully submitted"
    
        next()
    

    } catch (error) {
        console.log(error)
        res.send(400).json({ message: "Error" })
    }


}