const bcrypt = require('bcryptjs')
const User = require("../../model/User")
const { AppErr, appErr } = require('../../utils/appErr')

//register
const registerUserController = async(req, res, next)=>{
    const { fullname, password, email } = req.body
    // console.log('test')
    try{
        //check if email exsists
        const userFound = await User.findOne({ email })
        if(userFound){
            next(appErr('user already exists', 400))
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
        next(new Error(error))
    }
}

//login
const userLoginController = async(req, res)=>{
    const { email, password } = req.body
    try {
        //check if email exists
        const userFound = await User.findOne({email})
        if(!userFound) 
            return next(new AppErr("invalid login credentials", 400))

        //check if password is correct
        const isPasswordMatch = await bcrypt.compare(password, userFound.password)
        if(!isPasswordMatch) 
        return next(new AppErr("invalid login credentials", 400))

        res.json({
            status: "success", 
            fullname: userFound.fullname,
        id: userFound._id
        })
    } catch (error) {
        next(AppErr)
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