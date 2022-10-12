const express = require('express');
const followingRoute = require('./routes/following/followingRoutes');
const listenedRoute = require('./routes/listened/listenedRoutes');
const usersRoute = require('./routes/users/usersRoutes');
const app = express();

//middlewares


//routes

//users routes
app.use('/api/v1/users', usersRoute)
//following routes
app.use('/api/v1/following', followingRoute)
//listened routes
app.use('/api/v1/listened', listenedRoute)

//error handlers

//listen to server
const PORT = process.env.PORT || 9000
app.listen(PORT, console.log(`listening on port ${PORT}`))