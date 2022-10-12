const express = require('express');
const usersRoute = require('./routes/users/usersRoute');
const app = express();

//middlewares


//routes

//users route
app.use('/api/v1/users', usersRoute)





app.put('/api/v1/users/:id', )

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
        res.json({msg: 'Get Listened routes'})
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