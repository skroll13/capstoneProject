const express = require('express')
port = 3001

const app = express()

app.listen(port, (req,res) => {
   console.log(`Server is listening on port: ${port}`)
})