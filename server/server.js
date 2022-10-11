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

//accounts route
//POST/api/v1/accounts
app.post('/api/v1/accounts', async(req, res)=>{
    try {
        res.json({msg: 'Create Account route'})
    } catch (error) {
        res.json(error)
    }
})

//GET/api/v1/accounts/:id
app.get('/api/v1/accounts/:id', async(req, res)=>{
    try {
        res.json({msg: 'Get single Account route'})
    } catch (error) {
        res.json(error)
    }
})

//DELETE/api/v1/accounts/:id
app.delete('/api/v1/accounts/:id', async(req, res)=>{
    try {
        res.json({msg: 'Delete Account route'})
    } catch (error) {
        res.json(error)
    }
})

//PUT/api/v1/accounts/:id
app.put('/api/v1/accounts/:id', async(req, res)=>{
    try {
        res.json({msg: 'Update Account route'})
    } catch (error) {
        res.json(error)
    }
})

//transactions route

//POST/api/v1/transactions
app.post('/api/v1/transactions', async(req, res)=>{
    try {
        res.json({msg: 'Create Transactions route'})
    } catch (error) {
        res.json(error)
    }
})

//GET/api/v1/transactions
app.get('/api/v1/transactions', async(req, res)=>{
    try {
        res.json({msg: 'Get Transactions route'})
    } catch (error) {
        res.json(error)
    }
})

//GET/api/v1/transactions/:id
app.get('/api/v1/transactions/:id', async(req, res)=>{
    try {
        res.json({msg: 'Get Transaction route'})
    } catch (error) {
        res.json(error)
    }
})

//DELETE/api/v1/transactions/:id
app.delete('/api/v1/transactions/:id', async(req, res)=>{
    try {
        res.json({msg: 'Delete Transaction route'})
    } catch (error) {
        res.json(error)
    }
})

//PUT/api/v1/transactions/:id
app.put('/api/v1/transactions/:id', async(req, res)=>{
    try {
        res.json({msg: 'Update Transaction route'})
    } catch (error) {
        res.json(error)
    }
})

//error handlers

//listen to server
const PORT = process.env.PORT || 9000
app.listen(PORT, console.log(`listening on port ${PORT}`))