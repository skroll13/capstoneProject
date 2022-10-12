//register
const registerUserController = async(req, res)=>{
    try {
        res.json({msg: 'Register route'})
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