//create
const createListenedController = async(req, res)=>{
    try {
        res.json({msg: 'Create a Listened route'})
    } catch (error) {
        res.json(error)
    }
}

//all listened
const getAllListenedController = async(req, res)=>{
    try {
        res.json({msg: 'Get Listened routes'})
    } catch (error) {
        res.json(error)
    }
}

// get one listened
const getOneListenedController = async(req, res)=>{
    try {
        res.json({msg: 'Get a Listened route'})
    } catch (error) {
        res.json(error)
    }
}

//delete
const deleteListenedController = async(req, res)=>{
    try {
        res.json({msg: 'Delete a Listened route'})
    } catch (error) {
        res.json(error)
    }
}

//update
const updateListenedController = async(req, res)=>{
    try {
        res.json({msg: 'Update a Listened route'})
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    createListenedController,
    getAllListenedController,
    getOneListenedController,
    deleteListenedController,
    updateListenedController
}