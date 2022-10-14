const Following = require("../../model/Following")
const User = require("../../model/User");
const { AppErr } = require("../../utils/appErr");



//create
const createFollowingController = async(req, res, next)=>{
    const {episodeName, podcastName, image, audioLink, wantToFollow, listenedTo, notes} = req.body 
    try {
        //1. find the logged in user
        const userFound = await User.findById(req.user);
        if(!userFound) return next(new AppErr("user not found", 404))
        //2. create the following list
        const following = await Following.create({
            episodeName, 
            podcastName, 
            image, 
            audioLink, 
            wantToFollow, 
            listenedTo, 
            notes,
            createdBy: req.user
        })
        //3. push the following into the users Following field
        userFound.followings.push(following._id)
        //4. resave the user
        await userFound.save()
        res.json({
            status: "success",
            data: following
        })
    } catch (error) {
        next(error)
    }
}

//get one following
const getOneFollowingController = async(req, res)=>{
    try {
        res.json({msg: 'Get single Following route'})
    } catch (error) {
        res.json(error)
    }
}

//get all following
const getAllFollowingController = async(req, res)=>{
    try {
        const following = await Following.find()
        res.json(following)
        console.log(following)
    } catch (error) {
        res.json(error)
    }
}

//delete
const deleteFollowingController = async(req, res)=>{
    try {
        res.json({msg: 'Delete a Following route'})
    } catch (error) {
        res.json(error)
    }
}

//update
const updateFollowingController = async(req, res)=>{
    try {
        res.json({msg: 'Update a Following route'})
    } catch (error) {
        res.json(error)
    }
}




module.exports = {
    createFollowingController,
    getOneFollowingController,
    deleteFollowingController,
    updateFollowingController,
    getAllFollowingController
}