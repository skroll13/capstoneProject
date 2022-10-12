//create
const createFollowingController = async(req, res)=>{
    try {
        res.json({msg: 'Create a Following route'})
    } catch (error) {
        res.json(error)
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

//get all following
const getAllFollowingController = async(req, res)=>{
    try {
        res.json({msg: 'Get all Following routes'})
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