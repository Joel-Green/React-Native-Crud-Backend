const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const userRoutes = require('./api/routes/users');
const userTestRoutes = require('./api/routes/userstest');
app.use('/userstest',userTestRoutes);
app.use('/users',userRoutes);

mongoose.connect('mongodb://localhost:27017/ReactTest',{ useNewUrlParser: true })

app.use((req, res , next )=> {
    res.status(200).json({
        message:'Test'
    })
})

module.exports = app;