const express = require('express');
const app = express();

//middlewares


//routes

//users route
//POST/api/v1/users/register
app.post('/api/v1/users/register', async(req, res)=>{
    try {
        res.json({msg: 'Register route'})
    } catch (error) {
        res.json(error)
    }
})

//POST/api/v1/users/login
app.post('/api/v1/users/login', async(req, res)=>{
    try {
        res.json({msg: 'Login route'})
    } catch (error) {
        res.json(error)
    }
})

//GET/api/v1/users/profile/:id
app.get('/api/v1/users/profile/:id', async(req, res)=>{
    try {
        res.json({msg: 'Profile route'})
    } catch (error) {
        res.json(error)
    }
})

//DELETE/api/v1/users/:id
app.delete('/api/v1/users/profile/:id', async(req, res)=>{
    try {
        res.json({msg: 'Delete route'})
    } catch (error) {
        res.json(error)
    }
})

//PUT/api/v1/users/:id
app.put('/api/v1/users/profile/id', async(req, res)=>{
    try {
        res.json({msg: 'Update route'})
    } catch (error) {
        res.json(error)
    }
})

//following routes
//POST/api/v1/following
app.post('/api/v1/following', async(req, res)=>{
    try {
        res.json({msg: 'Create a Following route'})
    } catch (error) {
        res.json(error)
    }
})

//GET/api/v1/following/:id
app.get('/api/v1/following/:id', async(req, res)=>{
    try {
        res.json({msg: 'Get single Following route'})
    } catch (error) {
        res.json(error)
    }
})

//DELETE/api/v1/following/:id
app.delete('/api/v1/following/:id', async(req, res)=>{
    try {
        res.json({msg: 'Delete a Following route'})
    } catch (error) {
        res.json(error)
    }
})

//PUT/api/v1/following/:id
app.put('/api/v1/following/:id', async(req, res)=>{
    try {
        res.json({msg: 'Update a Following route'})
    } catch (error) {
        res.json(error)
    }
})

//listened route

//POST/api/v1/listened
app.post('/api/v1/listened', async(req, res)=>{
    try {
        res.json({msg: 'Create a Listened route'})
    } catch (error) {
        res.json(error)
    }
})

//GET/api/v1/listened
app.get('/api/v1/listened', async(req, res)=>{
    try {
        res.json({msg: 'Get Listened route'})
    } catch (error) {
        res.json(error)
    }
})

//GET/api/v1/listened/:id
app.get('/api/v1/listened/:id', async(req, res)=>{
    try {
        res.json({msg: 'Get a Listened route'})
    } catch (error) {
        res.json(error)
    }
})

//DELETE/api/v1/listened/:id
app.delete('/api/v1/listened/:id', async(req, res)=>{
    try {
        res.json({msg: 'Delete a Listened route'})
    } catch (error) {
        res.json(error)
    }
})

//PUT/api/v1/listened/:id
app.put('/api/v1/listened/:id', async(req, res)=>{
    try {
        res.json({msg: 'Update a Listened route'})
    } catch (error) {
        res.json(error)
    }
})

//error handlers

//listen to server
const PORT = process.env.PORT || 9000
app.listen(PORT, console.log(`listening on port ${PORT}`))