const bcrypt = require('bcryptjs')
const User = require("../../model/User")

//register
const registerUserController = async(req, res)=>{
    const { fullname, password, email } = req.body
    try{
        //check if email exsists
        const userFound = await User.findOne({ email })
        if(userFound){
            return res.json({ message: "User Already Exists" })
        }
        //check if fields are empty
        if(!email || !password || !fullname){
            return res.json({message: "Please complete all required fields"})
        }
        //hash userpassword
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //create user
        const user = await User.create({
            fullname,
            email, 
            password: hashedPassword,
        });
        res.json({
            status: "success",
            fullname: user.fullname,
            email: user.email,
            id: user._id,
        });
    } catch (error) {
        res.json(error)
    }
}

//login
const userLoginController = async(req, res)=>{
    try {
        res.json({msg: 'Login route'})
    } catch (error) {
        res.json(error)
    }
}

//profile
const userProfileController = async(req, res)=>{
    try {
        res.json({msg: 'Profile route'})
    } catch (error) {
        res.json(error)
    }
}

//delete
const deleteUserController = async(req, res)=>{
    try {
        res.json({msg: 'Delete user route'})
    } catch (error) {
        res.json(error)
    }
}

//update
const updateUserController = async(req, res)=>{
    try {
        res.json({msg: 'Update user route'})
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    registerUserController,
    userLoginController,
    userProfileController,
    deleteUserController,
    updateUserController
}