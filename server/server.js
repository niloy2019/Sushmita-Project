//Importing required Node Modules
const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express()
const PORT=process.env.PORT || 5000

// Middlewares
app.use(cors())
app.use(bodyParser.json());


//Sending a meassge 
app.get('/', (re, res) => {
    res.send('<h1>Server is up and Running at port: 3000<h1>')
})


//Connecting to MongoDB Server
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("MongoDB Database connection established Successfully");
        })
        .catch((err) => {
            throw err
        })



//Importing Routes
const CourseRoute = require('./routes/course')

//Using Routes
app.use('/course', CourseRoute);


//Running Our Server on PORT : 5000 
app.listen(PORT, console.log(`Server is listening at Port: ${PORT}`))
