const express = require('express')
const { registerUserController, 
    userLoginController, 
    userProfileController, 
    deleteUserController, 
    updateUserController 
} = require('../../controllers/users/usersController')

const usersRoute = express.Router()

//POST/api/v1/users/register
usersRoute.post("/register", registerUserController)

//POST/api/v1/users/login
usersRoute.post("/login", userLoginController)

//GET/api/v1/users/profile/:id
usersRoute.get("/profile/:id", userProfileController)

//DELETE/api/v1/users/:id
usersRoute.delete("/:id", deleteUserController)

//PUT/api/v1/users/:id
usersRoute.put("/:id", updateUserController)

module.exports = usersRoute;